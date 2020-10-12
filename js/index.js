window.addEventListener("load", async function(){
    let weather = await getWeather()

    let area = weather.nearest_area[0]
    let areaName = area.areaName[0].value
    let region = area.region[0].value
    let country = area.country[0].value

    let condition = weather.current_condition[0]
    let TempC = condition.temp_C
    let TempF = condition.temp_F
    let date = condition.localObsDateTime
    let weatherDesc = condition.weatherDesc[0].value

    document.getElementById("location").innerHTML = "Weather for " + areaName + ", " + region + ", " + country
    document.getElementById("temperature").innerHTML = TempC + "°C | " + TempF + "°F"
    document.getElementById("weatherdate").innerHTML = date
    document.getElementById("condition").innerHTML = weatherDesc
})

//Konvertē cilvēkam lasāmu adresi precīzās koordinātās
//Izmantoju bezmaksas geokodēšanas api http://photon.komoot.de/api/*
/*async function getLocation(location) {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await (await fetch("http://photon.komoot.de/api/?q="+location)).json()
            resolve(res.features[0].geometry.coordinates)
        }
        catch (err) {
            reject(err)
        }
    })
}*/

async function getWeather() {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await (await fetch("http://wttr.in/?format=j1")).json()
            resolve(res)
        }
        catch (err) {
            reject(err)
        }
    })
}
