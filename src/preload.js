const { ipcRenderer } = require("electron");

//loads as soon as the site is loaded
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById(`button`)
    btn.addEventListener("click", function(){
        let input = document.getElementById(`input`).value
        document.getElementById("menue").style.display = "none"
        ipcRenderer.send("testCon", input)
    })
});