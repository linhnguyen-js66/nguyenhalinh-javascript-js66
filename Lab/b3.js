
context = {
    data: null
}

const getData = async ()=>{
    let api = await fetch('https://raw.githubusercontent.com/edtechkidsvn/quotes/master/data.json')
    console.log(api)
    let data = await api.json()
    context.data = data.data
    console.log(context.data)
}
// getData()
const viewData = async () => {
    await getData()
    console.log(context.data)
    let get = document.getElementById('quotes')
    let quote = document.getElementById('quoteText')
    let author = document.getElementById('quoteAuthor')
    let button = document.getElementById('push')
    button.addEventListener('click',()=>{
        let randomItems = Math.floor(Math.random()*context.data.length)
        quote.innerHTML += '<span>"</span>'+context.data[randomItems].quoteText + '<span>"</span>'
        author.innerHTML += '<span>"</span>'+context.data[randomItems].quoteAuthor + '<span>"</span>'
    })
}
viewData()