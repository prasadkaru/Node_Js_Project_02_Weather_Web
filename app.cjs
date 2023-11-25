

const weather = require('./utils/weather')

weather(13,-94)
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error)
    })
