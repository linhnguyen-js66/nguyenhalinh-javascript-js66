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
for(let x of Phone){
    console.log("Name:",x.Name)
    console.log("Price:",x.Price)
    console.log("Provider:",x.Provider)
}
let userInput = prompt("Nhap vao ma san pham ban muon xem:")
for(let i=0;i<Phone.length;i++)
{
    if((i-1) === userInput-1)
    {
        console.log(Phone[i-1])
    }
}
let userInput2 = prompt("Nhap vao value ban muon xem:")
for(let i =0;i<Phone.length;i++)
{
    if (Object.values(Phone[i]).indexOf(userInput2) > -1) {
        console.log(Phone[i])
     }
}
