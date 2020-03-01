let button1 = document.getElementById('push')
let button2 = document.getElementById('push2')
let number = document.getElementById('number')
number.innerText = 0;
let counter = 0;
let running = false;
let repeat;
function start(){ 
    running = true;
    repeat = setInterval(increment, 3000);
}

function stop(){
    clearInterval(repeat);
    running = false;
}
function increment(){
        counter += 1;
        number.innerText = counter;
}
