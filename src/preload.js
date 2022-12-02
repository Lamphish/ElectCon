const { ipcRenderer } = require('electron');

document.addEventListener("DOMContentLoaded", () => {
  ipcRenderer.send("domLoaded")
})

ipcRenderer.on("serverFolders", (event, folders) => {
  var sidebar = document.getElementById("sidebar")
  var mainGrid = document.getElementById("mainGrid")
  var menueContainer = document.getElementById("menueContainer")

  folders.forEach(folder => {
    var newSideBarElement = document.createElement('button')
    newSideBarElement.classList.add('sideBarButton')
    newSideBarElement.innerText = folder
    newSideBarElement.name = folder + "_button"
    newSideBarElement.classList.add("button","defaultContainer")

    sidebar.appendChild(newSideBarElement)
    newSideBarElement.addEventListener('click', (event, data) => {
      menueContainer.innerHTML = ""
      console.log(newSideBarElement.name)
      ipcRenderer.send("getFolderElements", newSideBarElement.name)
    })
  });
})

ipcRenderer.on("serverFolderElements", (event, data) => {
  console.log(data)

  var menueContainer = document.getElementById("menueContainer")

  var firstScriptSource = data[0].sourceScript
  data.forEach(scriptVariable => {
    let inputSeperator = document.createElement('hr')
    inputSeperator.classList.add('seperator')

    
    let inputContainer = document.createElement('div')
    inputContainer.classList.add('inputContainer')
    inputContainer.width = "200px"

    let inputField = document.createElement('input')
    inputField.classList.add('defaultContainer')

    let inputAfter = document.createElement('div')
    inputAfter.classList.add('afterElement')
    inputAfter.innerText = scriptVariable.variableProp

    inputContainer.appendChild(inputField)
    inputContainer.appendChild(inputAfter)
    menueContainer.appendChild(inputContainer)
    if(firstScriptSource !== scriptVariable.sourceScript) {
          menueContainer.appendChild(inputSeperator)
    }
  })
  /*
  

  var inputDivField = document.createElement('div');
  inputDivField.classList.add("inputDivField")

  var inputDivFieldAfter = document.createElement('div')
  inputDivFieldAfter.classList.add('afterElement')
  inputDivFieldAfter.innerText = data.variableProp

  var inputField = document.createElement('input');
  inputField.type = "text"
  inputField.name = data.variableName
  inputField.classList.add("defaultContainer")

  inputDivField.appendChild(inputField)
  inputDivField.appendChild(inputDivFieldAfter)
  menueContainer.appendChild(inputDivField)
  */
})

