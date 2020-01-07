let height = Number(prompt("Hay nhap chieu cao:"))
let weight = Number(prompt("Hay nhap can nang:"))
let hm = height*0.01
let BMI = weight/(hm*hm)
let result = null
if(BMI < 16)
{
    result = "Thieu can nang"
}
else if(BMI < 18.5)
{
    result = "Thieu can nang"
}
else if(BMI < 25)
{
    result = "Binh thuong"
}
else if(BMI < 30)
{
    result = "thua can"
}
else 
{
    result = "Beo phi"
}
alert(result)