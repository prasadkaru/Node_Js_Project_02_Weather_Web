

const axios = require("axios");

const getGeo =(location)=>{
    return new Promise((resolve, reject)=>{
        const url=`https://api.weatherapi.com/v1/current.json?key=dd429db7150e4c0b85a20607232511&q=${location}&aqi=yes`;
        axios.get(url)
            .then(function (response) {
                // handle success
                resolve ({
                    name:response.data.location.name,
                    lat:response.data.location.lat,
                    lon:response.data.location.lon
                })
                //console.log(response.data.location.name+" is in "+response.data.location.lat+" "+response.data.location.lon)
            })
            .catch(function (error) {
                // handle error
                reject({error:error.response.data.error.message})
                //console.log(error.response.data.error.message);
            });
    })
}

module.exports=getGeo;



