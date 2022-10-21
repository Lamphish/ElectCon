const { ipcRenderer } = require("electron");
const menues = [
    "menueDC",
    "menueTS"
]

//loads as soon as the site is loaded
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById(`test`).addEventListener("click", sendCon)
    document.getElementById(`buttonTS`).addEventListener("click", menueTS)
});

function sendCon() {
    let input = document.getElementById(`in`).value
    ipcRenderer.send("debug", "debug")
    ipcRenderer.send("testCon", input)
};

function menueTS() {
    changeMenue("menueTS")
}
function changeMenue(thisMenue) {
    ipcRenderer.send("debug", "debug")
    menues.forEach(function(menue) {
        if (menue != thisMenue) {
            document.getElementById(menue).style.display = "none"
        }
        document.getElementById(thisMenue).style.display = "initial"
    })
}
    