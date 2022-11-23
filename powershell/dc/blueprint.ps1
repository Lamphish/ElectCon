# Net 3.5 installieren

Install-WindowsFeature Net-Framework-Core -source \\network\share\sxs

----------------

# Domänencontroller mit der PowerShell installieren 

Get-NetAdapter

Set-NetIPInterface -InterfaceAlias "Ethernet" -AddressFamily IPv4 -DHCP Disabled -PassThru
 
# IPs ändern:
New-NetIPAddress -AddressFamily IPv4 -InterfaceAlias "Ethernet" -IPAddress !input0 -PrefixLength 24 -DefaultGateway !input1
## >Ip Adress und DG muss natürlich angepasst werden<

# DNS ändern:
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses !input0
## >IP aus obiger Eingabe übernehmen<

# IPv6 deaktivieren:
Disable-NetAdapterBinding -Name Ethernet -ComponentID ms_tcpip6
 
# Server umbenennen:
Rename-Computer -NewName !input2 -Restart -Force
## >Server Name anpassen<

----------------

# Installieren der Active Directory-Domänendienste und Heraufstufen des Servers zu einem Domänencontroller

Add-WindowsFeature AD-Domain-Services
Install-ADDSForest -DomainName !input3 -InstallDNS
## >Hinweis: Ersetzen Sie "vdom.local" durch den korrekten Namen der Gesamtstruktur und Domäne.<

---------------------

#Zeitserver Sync

# w32tm /query /configuration | findstr "NtpServer"
# Denfendo vorhanden
# w32tm /config /syncfromflags:MANUAL /manualpeerlist:fw.kunde.local /reliable:YES
