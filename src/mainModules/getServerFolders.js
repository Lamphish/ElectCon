const { readdirSync } = require('fs');
const serverFoldersPath = "../electCon/src/scripts/"


function getServerFolders() {
    let serverFolders = readdirSync(serverFoldersPath)
    return serverFolders
}

function getServerFolderElements(server) {
    let serverFolderElements = readdirSync(serverFoldersPath + server)
    return serverFolderElements
}


module.exports = { getServerFolders, getServerFolderElements }