const { ipcRenderer } = require("electron");

var menues = [
    "menue_DC",
    "menue_TS"
]
//html site input field id`s
var inputs = [
    "value1_DC",
    "value2_DC",
    "value3_DC",
    "value4_DC"
]
//loads as soon as the site is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMLoader");
    
    //find all menue elements and set ich of screen
    let menueQuery = document.querySelectorAll(".menue")
    for(let i = 0 ; i < menueQuery.length; i++){
        menueQuery[i].style.right = "-100vw"
    }
    document.getElementById(("button_DC")).addEventListener("click", function() {
        siteChange("menue_DC")
    });
    //show menue_TS, hide others
    document.getElementById(("button_TS")).addEventListener("click", function() {
        siteChange("menue_TS")
    });
    //
    document.getElementById(("send_DC")).addEventListener("click", function() {
        console.log(inputs)
        var valueArr = []
        console.log(valueArr)
        for(let i = 0; i < inputs.length; i++) {
            console.log(i)
            let inp = document.getElementById((inputs[i])).value
            valueArr.push(inp)
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

function nameSplit(name, type) {
    if (type == "btn"){
        return "button_" + name.split("_")[1]
    }else if (type == "menue"){
        return "menue_" + name.split("_")[1]
    }else(
        console.log("neZZZ")
    )
}