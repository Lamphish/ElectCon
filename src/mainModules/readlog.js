const { fs } = require('fs');
const path = "../electCon/src/log.txt"

function readLog() {
    fs.readFile(path, "utf-8", function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data)
    })
}


module.exports = { readLog }