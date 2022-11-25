const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('mainAPI', {
  arrayChannel: (rawInputArray) => ipcRenderer.invoke('objArray', )
});