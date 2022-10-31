const { ipcRenderer } = require("electron");
let menues = [
    "menue_DC",
    "menue_TS"
]

let inputs = [
    "value1",
    "value2",
    "value3",
    "value4"
]
//loads as soon as the site is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMLoader");
    menues.forEach(function(menue) {
        document.getElementById(menue).style.right = "-100vw";
    });
    document.getElementById(("button_DC")).addEventListener("click", function() {
        siteChange("menue_DC")
    });
    document.getElementById(("button_TS")).addEventListener("click", function() {
        siteChange("menue_TS")
    });
    document.getElementById(("send_DC")).addEventListener("click", function() {
        let valueArr = []
        for(let i = 0; i <= inputs.length; i++) {
            valueArr.join(document.getElementById(inputs[i]).value)
        }
        console.log(valueArr)
        ipcRenderer.send("edit")
    });
});

function siteChange(thisMenue) {
    menues.forEach(function(menue) {
        if(menue == thisMenue){
            console.log("show " + menue)
            document.getElementById(menue).style.right = "0"
        }else {
            document.getElementById(menue).style.right = "-100vw"
        }
    })
}

function sendCon() {
    ipcRenderer.send("debug", "debug");
    ipcRenderer.send("testCon", input);
};