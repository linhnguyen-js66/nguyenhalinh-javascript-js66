button1 = document.getElementById("push")
button2 = document.getElementById("push2")
count = document.getElementById('number')
console.dir(button1)
let counter = 0
number.innerText = 0
button1.addEventListener('click',()=>{
   console.dir(number)
   counter +=1
   number.innerText = counter
})
button2.addEventListener('click',()=>{
    number.innerText -= 1
})