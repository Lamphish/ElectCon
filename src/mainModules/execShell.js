var spawn = require("child_process").spawn,child;
const path = "../electCon/src/scripts/";

function execShell(server, file) {
    //open powershell and execute the script
    child = spawn("powershell.exe",[path + "/" + server + "/" + file]);   
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
    });
    //end input
    child.stdin.end();
}

module.exports = { execShell }