var l = [1, 4, 5, -1, 10]
function get_even_list(l){
    var b = []
    for(i=0;i<l.length;i++)
    {
        if(l[i] % 2 === 0)
         b.push(l[i])
    }
    return b
}
console.log(get_even_list(l))

