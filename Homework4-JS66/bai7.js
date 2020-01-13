var s = "I have 5$ and you don't have $haha"
function remove_dollar_sign(s){
    
    return s.replace(/\$/gi,"")
}
console.log(remove_dollar_sign(s))
var string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}
    