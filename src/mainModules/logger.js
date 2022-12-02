var fs = require("fs");
const path = "../electCon/src/log.txt"

function log(data) {
    fs.appendFile(path, data, "utf-8", function(err) {
        if (err) {
            return console.log(err);
        }
        else {
            return "Data loged!" | true
        }
    })
}

module.exports = { log }