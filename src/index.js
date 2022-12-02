const { app, BrowserWindow, ipcMain } = require('electron');
var fs = require('fs');
const path = require('path');
const serverFoldersPath = "../electCon/src/scripts/"
const { getServerFolders, getServerFolderElements } = require('./mainModules/getServerFolders.js')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
    },
  });
  win.loadFile('./src/index.html');
};

app.whenReady().then(() => {
  createWindow();
  

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
  
});

ipcMain.on("domLoaded", (event) => {
  console.log("Dom loaded")
  event.reply("serverFolders", getServerFolders())
})

/* */
ipcMain.on("getFolderElements", (event, folder) => {
  var variableArr = []
  folderName = folder.split('_')[0]

  var scripts = getServerFolderElements(folderName)

  scripts.forEach(script => {
    var scriptValue = fs.readFileSync(serverFoldersPath + folderName + "/" + script, "utf-8")
    let regExp = new RegExp(/#[^#]+#/g)
    
    let scriptVariable =scriptValue.match(regExp)
    if(scriptVariable) {
      scriptVariable.forEach(variable =>{
        let variableProp = variable.split("#")[1]
        let variableObj = {
          sourceScript: script,
          variableName: variable,
          variableProp: variableProp,
          variableDescription : "",
        }
        variableArr.push(variableObj)
      })
    }
    
  });
  event.reply("serverFolderElements", variableArr)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});