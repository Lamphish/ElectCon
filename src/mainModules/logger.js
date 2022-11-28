var fs = require("fs");
const { builtinModules } = require("module");
const path = "../electCon/src/log.txt"

function log(dataToLog) {
    fs.appendFile(path, dataToLog, "utf-8", function(err) {
        if (err) {
            return console.log(err);
        }
        else {
            return "Data loged!" | true
        }
    })
}

module.exports = { log }