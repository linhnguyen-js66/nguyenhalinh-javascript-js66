let Phone = [
    Phone1 = {
        'Name':'Xiaomi portable charger 20000mah',
        'Brand': 'Xiaomi',
        'Price':'428',
        'Color':'White',
        'Category':'Charger',
        'Provider':'PhukienzeroDientuccc'
    },
    Phone2 = {
        'Name':'VSmart Active 1',
        'Brand': 'XVSmart ',
        'Price':'5487 ',
        'Color':'Black',
        'Category':'Phone',
        'Provider':'Tgdd Ddghn VhStore'
    },
    Phone3 = {
        'Name':'IPhone X',
        'Brand': 'Apple ',
        'Price':'21490 ',
        'Color':'Gray',
        'Category':'Phone',
        'Provider':'Tgdd'
    },
    Phone4 = {
        'Name':'Samsung Galaxy A9 ',
        'Brand': 'Samsung',
        'Price':'8490 ',
        'Color':'Blue ',
        'Category':'Phone',
        'Provider':'Tgdd'
    }
]
for(let i=0;i<Phone.length;i++){
    let a0=Object.keys(Phone[i])
    let a1=Object.values(Phone[i]);
    for(let j = 0;j<a0.length;j++)
    {
        if(a1 === 'Name')
        console.log('#'+(i+1) + '.' + ' ' + a0[j])
        if(a1 !== 'Name'){
        console.log(a0[j]+ ':' +' ' +a1[j])
        }
    }
}
let userInput = prompt("Nhap vao ma san pham ban muon xem:")
console.log("MA SP:")
for(let i=0;i<Phone.length;i++)
{
    if((i-1) === userInput-1)
    {
        console.log(Phone[i-1])
    }
}
console.log("_______________________________________________________________")
console.log("Thuoc tinh san pham theo tim kiem:")
let userInput2 = prompt("Nhap vao value ban muon xem:").toLocaleUpperCase()
for(let i =0;i<Phone.length;i++)
{
    if (Object.values(Phone[i]).indexOf(userInput2) > -1) {
        console.log(Phone[i])
     }
}
