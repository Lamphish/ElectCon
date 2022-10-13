/*var fs = require(`fs`)

document.getElementById("button").addEventListener("click", function() {
    console.log("test");
    fs.readFile("./test.ps1", 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace("[testWebsite]", 'amazon.com'); 
        fs.writeFile("ah.ps1", result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
    });
    
})
*/

const { exec } = require('child_process');
    exec("Test-Connection google.com", {'shell':'powershell.exe'}, (error, stdout)=> {
        console.log(stdout)
        console.log(error)
    })