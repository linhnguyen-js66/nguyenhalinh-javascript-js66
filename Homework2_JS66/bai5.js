let inputNumber = prompt().split(",")
let sum = 0
for(let i=0;i<inputNumber.length;i++)
{
    sum += Number(inputNumber[i])
}
console.log(sum)