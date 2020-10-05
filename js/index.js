window.addEventListener("load", function(){
    
})

//Konvertē cilvēkam lasāmu adresi precīzās koordinātās
//Izmantoju bezmaksas geokodēšanas api http://photon.komoot.de/api/*
async function getLocation(location) {
    return new Promise(async (resolve, reject) => {
        let res = await (await fetch("http://photon.komoot.de/api/?q="+location)).json()
        resolve(res.features[0].geometry.coordinates)
    })
}

async function getWeather() {
    let coordinates = await getLocation("Riga, Latvia")
    let res = await (await fetch("http://photon.komoot.de/api/?q="+location)).json()

    
}
