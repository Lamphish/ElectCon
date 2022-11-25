const btn = document.getElementById("btn")
const rawInputArray = Array.from(document.querySelectorAll(".dci"))
console.log(rawInputArray)

window.mainAPI.arrayChannel(rawInputArray)