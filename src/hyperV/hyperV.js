const { exec } = require('child_process');
exec("./hyperV.ps1", {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    console.log(stdout)
    console.log(error)
})