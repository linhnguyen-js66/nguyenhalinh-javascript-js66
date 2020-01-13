var s = "I have 5$ and you don't have $haha"
function remove_dollar_sign(s){
    
    return s.replace(/\$/gi,"")
}
console.log(remove_dollar_sign(s))
