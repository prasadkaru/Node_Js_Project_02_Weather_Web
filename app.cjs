

const weather = require('./utils/weather')
const geo = require('./utils/geo')
const express  = require('express');
const app = express();

app.get("/",(req, res)=>{
    res.send(`<h1>WelCome</h1>`);
});

app.get('/about',(req, res)=>{
    res.send('about')
});

app.get('/help',(req, res)=>{
    res.send("from help app.cjs")
})

app.get('/weather',(req, res)=>{
    if(!req.query.address){
        res.send({error:'page not found'})
    }
    geo(req.query.address)
    .then((data)=>{
        return weather(data.lat,data.lon)
    })
    .then((data)=>{
        res.send(data);
    })
    .catch((error)=>{
        res.send(error)
    })

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