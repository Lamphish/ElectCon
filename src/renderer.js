const buttons = document.querySelectorAll(".sendItButtons")

//create an eventlistener for each "sendItButton"
buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log("Send it Button Clicked: " + button.name)
        //form the button name to fit the input fields class => send the inputclass name to getInputArray
        console.log(getInputArray("." + button.name.split("b")[0]+"i"))
    })
});


function getInputArray(inputClass) {
    //find all input fields
    const rawInputArray = Array.from(document.querySelectorAll(inputClass))
    //safe the inputfield name in a property array
    const prop = rawInputArray.map(input => input.name)
    //safe the inputfield value in a value array
    const value = rawInputArray.map(input => input.value)

    //create an empty array
    var editedArray = []
    //for each importfield create a new object with the prop and value attributes and safe them in the array
    for(let i = 0; i < prop.length; i ++) {
        let input = {
            "prop" : prop[i] ,
            "value" : value[i],
        }
        editedArray[i] = input
    }
    console.log(editedArray)

    //sendt the object array to the main thru the bridge
    window.mainAPI.arrayChannel(editedArray)

    return "Get Input of the " + inputClass + " Group: Success"
}