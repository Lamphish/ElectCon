var fs = require('fs')
const path = "../electCon/src/scripts/"

function editShell(editedArray, server) {

    //find blueprint file and read the data
    fs.readFile(path + server + "/pwsh.ps1", "utf-8", function (err,data) {
        if (err) {
            return console.log(err);
        }

        var result = data

        //for each object in the editedArray replace the "prop" with the "value"
        for(let i = 0; i < editedArray.length; i++) {
            //global replacement regex
            let regex = new RegExp(editedArray[i].prop, "g")
            result = result.replace(regex, editedArray[i].value)
        }
        
        //log the edited blueprint
        console.log(`Result: \n${result}`)

        //safe the edited blueprint to a file, if not exisiting create the file
        fs.writeFile(path + server + "/pwsh2.ps1", result, "utf-8", function (err) {
            if (err) return console.log(err);
        });
    });
}

module.exports = { editShell }