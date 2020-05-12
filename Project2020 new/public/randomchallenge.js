let content = document.getElementById("display_challenge")
let runButton = document.getElementById("push")

runButton.addEventListener('click',()=>{
   let randomNumber = Math.floor(Math.random() * 11) + 1  
   content.innerHTML  = randomNumber + "M"
})