var spawn = require("child_process").spawn,child;
const { readLog } = require('./readlog');
const { log } = require('./logger');
const path = "../electCon/src/scripts/";

function execShell(server) {
    readLog()
    //open powershell and execute the script
    child = spawn("powershell.exe",[path + "/" + server + "/" + "pwsh.ps1"]);   
    //catch outputs and log them
    child.stdout.on("data",function(data){
        console.log("Powershell Data: " + data);
    });
    //catch errors and log them
    child.stderr.on("data",function(data){
        console.log("Powershell Errors: " + data);
    });
    //log finishing
    child.on("exit",function(){
        console.log("Powershell Script finished");
        log("Powershell Script number executed:" + fileNumber)
    });
    //end input
    child.stdin.end();
}

module.exports = { execShell }