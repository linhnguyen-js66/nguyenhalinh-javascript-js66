let text = document.getElementById('text')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let content = document.getElementById("display_challenge")
// let runButton = document.getElementById("push")


let time = document.getElementById("time_game")
time.innerText = 0 +" "+ "S";
let SecondsTime = 0
let reapeat;
let prePosition = {
    lat : null,
    lon : null
}
var setting


let distanceText = document.getElementById('distance')

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
}

function textDist (text){
    distanceText.innerText = text
}

function visualText (latitude, longitude) {
    text.innerHTML = `${latitude} + ${longitude}`
}
options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};


function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 5.609344 * 40 }
		if (unit=="N") { dist = dist * 5.8684 * 40}
		return dist
    }
}


  

function checkLocation (Tong) {
    
        setting = window.navigator.geolocation.watchPosition(
        data => {
           if(prePosition.lat == null || prePosition.lon == null){
            prePosition.lat = data.coords.latitude
            prePosition.lon = data.coords.longitude
            visualText(data.coords.latitude, data.coords.longitude)
           }else {
                visualText(data.coords.latitude, data.coords.longitude)
               let dis = distance(prePosition.lat,prePosition.lon,data.coords.latitude,data.coords.longitude, "K")
               Tong += dis
               textDist(Tong)
               prePosition.lat = data.coords.latitude
               prePosition.lon = data.coords.longitude
           }}, error,options
      )
}

// runButton.addEventListener('click', ()=>{
//    randomNumber = Math.floor(Math.random() * 11) + 1  
//    content.innerHTML  = randomNumber + "M"
// })

  start.addEventListener('click', () => {
    let Tong = 0
   
    console.log("check")
    checkLocation(Tong) 
    time.style.display = "";
    reapeat = setInterval(count,1000)
    let randomNumber = Math.floor(Math.random() * 4) + 1  
    content.innerHTML  = randomNumber + "M"
    start.style.display = "none"
    stop.addEventListener('click',()=>{
        let inputUser = prompt('Bạn có muốn tiếp tục thử thách  không ? V(yes)/X(no)').toLocaleLowerCase()
        if(inputUser === 'v'){
        time.innerText = "TIME OUT:"+" "+ SecondsTime +" "+ "S"; 
        clearInterval(reapeat)
        setTimeout(function(){window.location.reload('https://runforlifeweb-2020.web.app/')},2000) 
    }
        else if(inputUser==='x'){
            time.innerText = "TIME OUT:"+" "+ SecondsTime +" "+ "S";  
            clearInterval(reapeat)
            start.style.display = "none"
            if(randomNumber > Tong){
                document.getElementById('check_game').innerText = "LOOSE MEO MEO"
            }
            else if(randomNumber < Tong){
                document.getElementById('check_game').innerText = "WIN HAHAHAH"
            }
        }
    })
    }
)
stop.addEventListener('click',() => {
    console.log("stop")
    navigator.geolocation.clearWatch(setting);
    console.log(setting)
    prePosition.lat = null
    prePosition.lon = null
    
   
    
    // else if(inputUser==='x'){
    //     time.innerText = "TIME OUT:"+" "+ SecondsTime +" "+ "S";  
    //     clearInterval(reapeat)
    //     start.style.display = "none"
    // }
  }
)

function count(){
    SecondsTime += 1
    time.innerText  = SecondsTime +" "+ "S" ;
    
 }
