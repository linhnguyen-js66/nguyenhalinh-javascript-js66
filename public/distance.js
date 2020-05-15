const start = document.querySelector("#start")
const stop = document.querySelector("stop")
let Pos = []
const cor = []
start.addEventListener("click", () => {

    navigator.geolocation.watchPosition(
        async data => {
    
            // debugger
            // console.log(data);
            await cor.push([data.coords.latitude, data.coords.longitude])
            await window.localStorage.setItem("cor", JSON.stringify(cor))
            Pos.push(cor)

            console.log(Pos[0][0][0])
            console.log(Pos[0][0][1])
          
        },
        error => console.log(error),
        {
            enableHighAccuracy: true
        }
    )

})