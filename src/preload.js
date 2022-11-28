const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('mainAPI', {
  //bridge the array with the inputs of the inputfields
  arrayChannel: (editedArray) => ipcRenderer.send('objArray', editedArray)
});