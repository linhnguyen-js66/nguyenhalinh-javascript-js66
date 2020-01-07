let sheepSizes = [5,7,300,90,24,50,75]
//Create an array to represent the sizes of your flock, and log all of your flock size,
//expected screen output:
console.log("Hello my name is Ha Linh and here is my sheep sizes:")
console.log(sheepSizes.join(" "))

//At the end of each month, you have to choose one and only one sheep to shear
//and thus you want to choose the biggest one to maximize your profit. Add scripts
//to search for the biggest sheep in your list:

let max = Number.NEGATIVE_INFINITY
for (i = 0;i<sheepSizes.length; i++) {
  
    max = Math.max(max,sheepSizes[i])
  }
  console.log("Now my biggest sheep has size:",max,"let's shave it")

//When your biggest sheer, its size will return to the default size, which is 8.
let findsizeMAX = sheepSizes.indexOf(max)
sheepSizes[findsizeMAX] = 8
console.log("After shearing, here is my flock:")
console.log(sheepSizes.join(" "))

//In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
for(let j=0;j<2;j++){
for(let i=0;i<sheepSizes.length;i++)
{
    sheepSizes[i] += 50;
}
console.log("One month has, passed, my sheeps have grown, here are their sizes:","month:",j+1)
console.log(sheepSizes.join(" "))
let maxsize = Math.max(...sheepSizes);
console.log("Now my biggest sheep has size ",maxsize, ", let's shave it")
let find = sheepSizes.indexOf(maxsize)
sheepSizes[find] = 8
console.log("After shearing, here is my flock:")
console.log(sheepSizes.join(" "))
}
console.log("Month 3:")
for(let i=0;i<sheepSizes.length;i++)
{
    sheepSizes[i] += 50;
}
console.log(sheepSizes.join(" "))
//After day by day shearing sheep, you became bored. You want to sell your flock
// to travel the world. In order to have fair trade, you must now calculate the total
// size of your sheep and then the expected money you can get from selling your
// flock, before going to the market. Write a program to calculate the total size of
// your sheep as well as the money you would have. Expected console output:
let sumSize = 0
for(let i = 0;i<sheepSizes.length;i++)
{
    sumSize+=sheepSizes[i]
}
console.log("My flock has size in total:",sumSize)
console.log("I would get",sumSize,"*2$ = ",sumSize*2)
