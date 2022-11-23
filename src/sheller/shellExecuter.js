var spawn = require("child_process").spawn,child;
var fs = require('fs');

function executer() {
    child = spawn("powershell.exe",["../electcon-win32-x64/resources/app/powershell/dc/test.ps1"]);
    child.stdout.on("data",function(data){
        toString(data)
        fs.appendFile('../electcon-win32-x64/resources/app/powershell/dc/log.txt', data, 'utf-8', function(err, data) {
            if (err) throw err;
            console.log('Done!');
        })
        console.log("Powershell Data: " + data);
    });
    child.stderr.on("data",function(data){
        console.log("Powershell Errors: " + data);
    });
    child.on("exit",function(){
        console.log("Powershell Script finished");
    });
    child.stdin.end();
}

module.exports = {executer}