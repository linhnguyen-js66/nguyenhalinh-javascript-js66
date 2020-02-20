context = {
    data:null
}
const getData = async ()=>{
    let api = await fetch('http://dummy.restapiexample.com/api/v1/employees')
    console.log(api)
    let data = await api.json()
    console.log(data)
    context.data = data.data
    console.log(context.data)
}
const viewData = async ()=>{
    await getData()
    console.log(context.data)
    let get = document.getElementById('employee_salary')
    context.data.forEach((element,i)=>{
      let information = `<div id='user-${i}'>
      <li>ID:${element.id}</li>
      <li>Name:${element.employee_name}</li>
      <li>Age:${element.employee_age}</li>
      <li class="view">Salary:${element.employee_salary}</li>
      </div>
      <br>`
      get.innerHTML+=information
    });
}
const showSalary = async ()=>{
 await viewData()
 for(i=0;i<context.data.length;i++)
 {
     let userInfor = document.getElementById(`user-${i}`)
     userInfor.addEventListener('mouseover',()=>{
        userInfor.children[3].classList.toggle('view')
        // console.dir(userInfor)
     })
 }
}
const createNew = async ()=>{
await showSalary()
let button = document.getElementById('push')
button.addEventListener('click',()=>{
    let text1 = document.getElementById("input1"); 
    let text2 = document.getElementById("input2");
    let text3 = document.getElementById("input3");
    let text4 = document.getElementById("input4");
    let li1 = "<li>ID: " + text1.value + "</li>";
    let li2 = "<li>Name: " + text2.value + "</li>";
    let li3 = "<li>Age: " + text3.value + "</li>";
    let li4 = "<li>Salary: " + text4.value + "</li>"
    document.getElementById('employee_salary').innerHTML+=li1+li2+li3+li4
    console.log(context.data)
})
}
createNew()
