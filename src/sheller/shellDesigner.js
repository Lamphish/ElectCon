var fs = require('fs');
const bpPrefix = "!"

function rewrite(dataArray) {
    var psFolder = dataArray[dataArray.length-1];
    console.log(dataArray)
    
    fs.readFile('../electcon-win32-x64/resources/app/powershell/' + psFolder + '/blueprint.ps1', 'utf-8', function(err, data) {
        if (err) throw err;
        var updated

        for(let i = 0; i < dataArray.length - 1; i++){
            updated = data.replace(/!input0/g, dataArray[0]) //New-NetIPAddress -IPAdress l 14 | Set-DnsClientServerAddress -ServerAddresses l 18
                            .replace(/!input1/g, dataArray[1]) //New-NetIPAddress -DefaultGateway l 14
                            .replace(/!input2/g, dataArray[2]) //Rename-Computer -NewName l 25
                            .replace(/!input3/g, dataArray[3]) //Install-ADDSForest -DomainName l 33
            fs.writeFile('../electcon-win32-x64/resources/app/powershell/' + psFolder + '/executable.ps1', updated, 'utf-8', function(err, data) {
                if (err) throw err;
                
            })
        }
        
    });
    
}


module.exports = {rewrite}