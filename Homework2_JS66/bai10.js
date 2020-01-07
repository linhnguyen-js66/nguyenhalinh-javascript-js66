let inputName = prompt().split(',')
let arr = []
for(let i=0;i<inputName.length;i++)
{
    arr.push("<"+inputName[i]+">")
}
alert(arr)