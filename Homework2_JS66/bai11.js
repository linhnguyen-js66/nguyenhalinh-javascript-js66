let inputNumber = prompt().split(",")
let arr = []
for(let i=0;i<inputNumber.length;i++)
{
    if(Number(inputNumber[i]) % 2 != 0)
    {
        arr.push(inputNumber[i])
    }
}
alert(arr)