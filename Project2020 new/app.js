let text = document.getElementById('text')
let start = document.getElementById('start')
let stop = document.getElementById('stop')
let content = document.getElementById("display_challenge")
let runButton = document.getElementById("push")

runButton.addEventListener('click',()=>{
   let randomNumber = Math.floor(Math.random() * 11) + 1  
   content.innerHTML  = randomNumber + "M"
})

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
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		return dist.toFixed(1);
    }
}


    start.addEventListener('click',() => {
    let Tong = 0
   
    console.log("check")
    checkLocation(Tong) 
    document.getElementById('icon').style.display = ""
    time.style.display = "";
    reapeat = setInterval(count,1000)
}
)

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

stop.addEventListener('click', () => {
    console.log("stop")
    navigator.geolocation.clearWatch(setting);
    console.log(setting)
    prePosition.lat = null
    prePosition.lon = null
    time.innerText = "TIME OUT:"+" "+ SecondsTime +" "+ "S"; 
    clearInterval(reapeat)
}
)
function count(){
    SecondsTime += 1
    time.innerText  = SecondsTime +" "+ "S" ;
 }
