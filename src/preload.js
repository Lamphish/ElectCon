const { ipcRenderer } = require("electron");


//loads as soon as the site is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Site Content loaded")
    
    //listens on button click
    document.getElementById(`button`).addEventListener("click", () => {
        console.log("Button Click Event")
        //send the event to the main process (index.js)
        ipcRenderer.send("buttonClicked");
    })
})