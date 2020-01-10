let dictionary = {
    'debug' : 'The process of figuring out why your program has a certain error and how to fix it',
    'string': 'Chuoi',
    'template': 'Ban mau',
    'stl': 'Standard Template Library'
}
Object.keys(dictionary).forEach((value,index)=>{
    console.log(`${index + 1}.${value}`)
})
alert("Hi there, this is dev dictionary")
let userInput = prompt("Enter a keyword:").toLocaleLowerCase()
if(userInput in dictionary){
    console.log(userInput,":")
    console.log(dictionary[userInput])
}else{
    alert("We could not find your word")
    let userInput = prompt("Enter a keyword:").toLocaleLowerCase()
    alert('Done')
    let newValue = prompt("Nhap y nghia cua tu:").toLocaleLowerCase()
    dictionary[userInput] = newValue
    console.log(userInput,":")
    console.log(newValue)
    console.log(dictionary)
}
