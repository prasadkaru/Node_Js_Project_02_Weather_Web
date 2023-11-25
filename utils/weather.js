const axios = require("axios");
// legacy way
// const lat = 12;
// const lon = -94.04;
// const apiKey = "dd429db7150e4c0b85a20607232511";
// const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=yes`;
//
// // Now you can use the 'url' variable in your API request.
//
const getWeather = (lat,lon)=>{
    return new Promise((resolve,reject)=>{
        const url=`https://api.weatherapi.com/v1/current.json?key=dd429db7150e4c0b85a20607232511&q=${lat},${lon}&aqi=dd429db7150e4c0b85a20607232511`
// Make a request for a user with a given ID
        axios.get(url)
            .then(function (response) {
                // handle success
                // /console.log(response.data.location.country+" city : "+response.data.location.name)
                // console.log(response.data.current.temp_c);
                // console.log(response.data.current.condition.text);
                resolve({weather:response.data.location.country +' Currently '+response.data.current.condition.text+' and temparature is '+response.data.current.temp_c+' C'})
                //console.log("Currently "+response.data.current.condition.text+" and temparature is "+response.data.current.temp_c)
            })
            .catch(function (error) {
                // handle error
                reject({error:error.response.data.error.message})
            });

    })
}


module.exports = getWeather