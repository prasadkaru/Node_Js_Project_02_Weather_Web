

const weather = require('../utils/weather')
const geo = require('../utils/geo')
const express  = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();

const templatePath =path.join(__dirname,"../templates");
const partialsPath = path.join(__dirname,"../templates/partials")

app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialsPath);

const publicDirpath = path.join(__dirname,'../public')
//console.log(publicDirpath);
app.use(express.static(publicDirpath));
app.get('/',(req, res)=>{
    res.render('index',{
        name:'sunil',
        age:10
    })
})


// app.get("/",(req, res)=>{
//     res.send(`<h1>WelCome</h1>`);
// });

app.get('/about',(req, res)=>{
    res.render('about')
});

app.get('/help',(req, res)=>{
    res.render("help")
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
    res.render("404")
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