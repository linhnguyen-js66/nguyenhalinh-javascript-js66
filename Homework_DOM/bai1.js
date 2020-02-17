let link = document.getElementById('demo-a')
let button = document.getElementById('btn-demo')
let input = document.getElementById("demo-input")
console.dir(input)
console.dir(link)
button.addEventListener('click',()=>{
     console.log(link.href)
     input.value = link.href
})