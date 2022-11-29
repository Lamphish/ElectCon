const { app, BrowserWindow, ipcMain } = require('electron');
const { editShell } = require('./mainModules/editShell')
const { execShell } = require('./mainModules/execShell')
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
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

//catch the inputfields conent array
ipcMain.on('objArray', (event, array, server) => {
  console.log("Data array recieved by the preload: \n")
  console.log(array)
  editShell(array, server)
  execShell("dc")
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});