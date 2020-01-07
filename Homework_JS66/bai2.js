console.log("Tinh giai thua:")
let temp = 1
let n = Number(prompt("Nhap n so:"))
for(let i=1;i<=n;i++)
{
    temp*=i
}
console.log(temp)
if(userInput === 'E')
{
    userInput = prompt("Nhap chu cai:")
}
else if(userInput === 'C')
{
    Input = prompt("Nhap phan tu muon them:")
    shop.push(Input)
    console.log(shop)
}
else if(userInput === 'R')
{
    let inputUser = prompt("Nhap A/O:")
    if(inputUser === 'A')
    {
        console.log(shop)
    }
    else if(inputUser === 'O')
    {
        inputIndex = prompt("Nhap chi so:")
        for(let i=0;i<shop.length;i++)
        {
            if( i-1 === inputIndex)
            {
                console.log(shop[i-1])
            }
            else
            {
                alert("Error")
            }
        }
    }
}