const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

require('./db')(app);


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

const user = {name: "Ann", status: "master"};
const data = {name: "Folk", type: "audio", region: "Kiev"};
const audio = {genre: "wedding", region: "Poltava"};
const video = {type: "youtube", link: "https://www.youtube.com/?gl=RU&hl=ru", name: "music"}

app.get('/', ()=>{
    console.log("Success!")
})

app.get('/home', (req, res)=>{
    console.log("Home!");
    res.send(data).end;
    
})

app.get('/about', (req, res)=>{
    console.log("About!");
    res.send(user).end;
    
})

app.get('/audio', (req, res)=>{
    console.log("Audio!");
    res.send(audio).end;
    })

    app.get('/video', (req, res)=>{
        console.log("Video!");
        res.send(video).end;
        
    })

    app.listen(port, ()=>{
    console.log("Server connected!")  
})