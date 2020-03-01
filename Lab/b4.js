let body   = document.getElementById('ts_body')
let button = document.getElementById('add')
let input1 = document.getElementById('add1')
let input2 = document.getElementById('add2')
let input3 = document.getElementById('add3')
let table  = document.getElementById('tb_table'),rIndex;
// let del = document.getElementsByClassName('push')
// let update = document.getElementById('change')
// let delete = document.getElementById('delete')
console.dir(body)
console.log(body)
button.addEventListener('click',()=>{
    console.log(input1.value)
    console.log(input2.value)
    console.log(input3.value)
    body.innerHTML += `<tr><td>${input1.value}</td>
    <td>${input2.value}</td>
    <td>${input3.value}</td>
    <td><input type="button" value="X" onclick="deleteRow(this)"></td>
    <td><input type="button" value="U" onclick="update()"></td>
    </tr>`
    input1.value = ' '
    input2.value = ' '
    input3.value = ' '
})
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tb_table").deleteRow(i);
}
function update(){
for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
         rIndex = this.rowIndex;
         input1.value = this.cells[0].innerHTML;
         input2.value = this.cells[1].innerHTML;
         input3.value = this.cells[2].innerHTML;
    };
}
}
function change(){
    table.rows[rIndex].cells[0].innerHTML = input1.value
    table.rows[rIndex].cells[1].innerHTML = input2.value
    table.rows[rIndex].cells[2].innerHTML = input3.value
    input1.value = " ";
    input2.value = " ";
    input3.value = " ";
}
document.getElementById('clear').addEventListener('click',()=>{
    input1.value = " ";
    input2.value = " ";
    input3.value = " ";
})
