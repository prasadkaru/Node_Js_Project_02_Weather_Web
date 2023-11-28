

const weather = require('./utils/weather')
const geo = require('./utils/geo')
const express  = require('express');
const app = express();

app.get("/",(req, res)=>{
    res.send('hello from express app.cjs');
});

app.get('/about',(req, res)=>{
    res.send('about')
});

app.get('/help',(req, res)=>{
    res.send("from help app.cjs")
})

app.get('/weather',(req, res)=>{
    res.send("weather")
})

app.get('*',(req, res)=>{
    res.send("page not found")
})
// weather(13,-94)
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error)
//     })

// geo('Colombo')
//     .then((data)=>{
//         return weather(data.lat,data.lon)
//     })
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
app.listen(3000,()=>{
    console.log("server open 3000")});