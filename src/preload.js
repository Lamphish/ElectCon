const { ipcRenderer } = require("electron");
var menues = document.getElementsByClassName("menue")
//find all DC input elements
var inputsDC = document.getElementsByClassName("input_DC")

//loads as soon as the site is loaded
document.addEventListener("DOMContentLoaded", () => {
    
    console.log("DOMLoader");
    //log the id of every menue item
    for(let i = 0 ; i < menues.length; i++){
        console.log(menues[i].id)
    }
    //hide all sites
    siteHandler("all")
    //on DC click (show)
    document.getElementById(("button_DC")).addEventListener("click", () => {
     siteHandler("menue_DC")
    });
    //on TS click (show)
    document.getElementById(("button_TS")).addEventListener("click", () => {
     siteHandler("menue_TS")
    });

    document.getElementById(("send_DC")).addEventListener("click", () => {
        var valueArr = []
        for(let i = 0; i < inputsDC.length; i++) {
            valueArr[i] = String(document.getElementById((inputsDC[i].id)).value)
            console.log(valueArr[i])
        }
        valueArr.push("dc")
        ipcRenderer.send("rewrite", (valueArr))
    });
});

function siteHandler(thisMenue) {
    for(let i = 0 ; i < menues.length; i++){
        if(menues[i].id == thisMenue){
            console.log("show " + menues[i].id)
            document.getElementById(menues[i].id).style.right = "0"
        }else if("all" == thisMenue){
            document.getElementById(menues[i].id).style.right = "-100vw"
        }else {
            document.getElementById(menues[i].id).style.right = "-100vw"
        }
    }
}