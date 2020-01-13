var x = [200,100]
var y = [140, 60, 100, 200]
function is_inside(x,y){
    if((x[0]>y[0]) && (x[0]<y[2]) && (x[1] > y[1]) && (x[1]<y[3]))
    {
        return true
    }
    return false
}
is_inside(x,y)
if(is_inside(x,y) == true)
{
    console.log("Diem x nam trong hcn")
}
else
{
    console.log("Diem x khong nam trong hcn")
}

other_point = is_inside([1,5],[0,0,10,8])
if(other_point == true)
{
    console.log("Diem x nam trong hcn")
}
else
{
    console.log("Diem x khong nam trong hcn")
}