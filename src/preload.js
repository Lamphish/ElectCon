const { ipcRenderer } = require("electron");

//find all menue elements and set ich of screen
var menues = document.getElementsByClassName("menue")

//html site input field id`s
var inputs = document.getElementsByClassName("input_DC")
//loads as soon as the site is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMLoader");
    //log the id of every menue item
    for(let i = 0 ; i < menues.length; i++){
        console.log(menues[i].id)
    }
    siteHandler("all")
    //on DC click (show)
    document.getElementById(("button_DC")).addEventListener("click", function() {
     siteHandler("menue_DC")
    });
    //on TS click (show)
    document.getElementById(("button_TS")).addEventListener("click", function() {
     siteHandler("menue_TS")
    });
    //
    document.getElementById(("send_DC")).addEventListener("click", function() {
        console.log(inputs)
        var valueArr = []
        console.log(valueArr)
        for(let i = 0; i < inputs.length; i++) {
            console.log(i)
            let inp = document.getElementById((inputs[i].id)).value
            valueArr.push(inp)
        }
        console.log(valueArr)
        ipcRenderer.send("edit")
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

function nameSplit(name, type) {
    if (type == "btn"){
        return "button_" + name.split("_")[1]
    }else if (type == "menue"){
        return "menue_" + name.split("_")[1]
    }else{
        console.log("unavailable type")
    }
}