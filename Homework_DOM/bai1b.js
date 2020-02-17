userSelect = document.getElementById("cars")
// userOption = document.getElementsByClassName("car")
del = document.getElementById("push")
del.addEventListener('click',()=>{
  console.dir(userSelect)
  console.log(userSelect.value)
  userSelect.remove([userSelect.selectedIndex])
})