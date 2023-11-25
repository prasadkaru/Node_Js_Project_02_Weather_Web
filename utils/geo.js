

const axios = require("axios");

const location="London"

const url=`https://api.weatherapi.com/v1/current.json?key=dd429db7150e4c0b85a20607232511&q=${location}&aqi=yes`;
axios.get(url)
    .then(function (response) {
        // handle success
        console.log(response.data.location.name+" is in "+response.data.location.lat+" "+response.data.location.lon)
    })
    .catch(function (error) {
        // handle error
        console.log(error.response.data.error.message);
    });