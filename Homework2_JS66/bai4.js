let Shop = ['Jeans', 'T-Shirt', 'Socks' ]
let UserInput = prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?").toUpperCase()
if (UserInput == 'C'){
    let input1 = prompt("Enter the position u want to update:")
    let input2 = prompt("Enter the name u want to update:")
    alert("Done")
    if(typeof Shop[input1-1] === 'undefined') {
        Shop.push(input2)
    }
    else {
        Shop[input1-1]=input2
    }
    UserInput = prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?").toUpperCase()
    console.log("The current items are:")
    Shop.forEach((value,index)=>{
        console.log(`${index+1}.${value}`)
    })
} 
else if (UserInput == 'R'){
    console.log("The current items are:")
    Shop.forEach((value,index)=>{
        console.log(`${index+1}.${value}`)
    })
} 
else if (UserInput =='D'){
    let UserInput3 = prompt("Enter the position u want to delete")
    if (UserInput3 -1 < Shop.length ){
        Shop.splice(UserInput3-1,1)
        alert("Done")
        let UserInput = prompt("Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?").toUpperCase()
        Shop.forEach((value,index)=>{
            console.log(`${index+1}.${value}`)
        })
    } else {
        alert("This command is not supported")
    }
} else {
    alert("This command is not supported")
}
