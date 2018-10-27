const express = require('express')
const app = express()
const port = 3000

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