const arr = [3, 4, 6, -9, 10, -88, 2]
let userInput = Number(prompt())
if(arr.includes(userInput) === false )
{
    console.log("NOT FOUND",userInput)
}
else if(arr.includes(userInput) === true)
{
   for(let i=0;i<arr.length;i++)
   {
       if(arr[i] === userInput)
       {
           console.log("FOUND",userInput,"voi chi so",i)
       }
   }
}