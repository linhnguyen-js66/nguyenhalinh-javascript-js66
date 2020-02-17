let myTable= document.getElementById('myTable')
let button = document.getElementById("push")
button.addEventListener('click',() => {
let input1 = Number(prompt("Input the Row number(0,1,2)", "0"));
let input2 = Number(prompt("Input the Column number(0,1)","0"));
let content = prompt("Input the Cell content"); 
console.dir(myTable)
// for(var r=0;r<parseInt(input1,10);r++)
//   {
//     var x = myTable.rows[r].cells
//    for(var c=0;c<parseInt(input2,10);c++)  
//     {
//       x[c].innerHTML= content
//     }
//    }
 var x = myTable.rows[parseInt(input1,10)].cells;
 x[parseInt(input2,10)].innerHTML = content;
})