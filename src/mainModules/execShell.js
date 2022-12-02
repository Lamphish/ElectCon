var spawn = require("child_process").spawn,child;
var fs = require('fs')
const { log } = require('./logger');
const path = "../electCon/src/scripts/";


function execShell(server) {
    fs.readFile("../electCon/src/toDo/" + server + ".txt", function(err, data) {
        
        //fs.writeFile("../electCon/src/toDo/" + server + ".txt", linesExceptFirst, "utf-8")
    })
    //open powershell and execute the script
    child = spawn("powershell.exe",[path + server + "/" + "executable.ps1"]);
    //catch outputs and log them
    child.stdout.on("data", function(data){
        console.log("Powershell Data: " + data);
        log(data)
    });
    //catch errors and log them
    child.stderr.on("data", function(data){
        console.log(data)
    });
    //log finishing
    child.on("exit",function(){
        console.log("Powershell Script finished");
    });
    //end input
    child.stdin.end();

    return "Sript Executed"
}

module.exports = { execShell }

