let inputArray = prompt().split(",")
let min = Number.POSITIVE_INFINITY
for (i = 0;i<inputArray.length; i++) {
  
    min = Math.min(min, Number(inputArray[i]))
  }
  console.log(min)
