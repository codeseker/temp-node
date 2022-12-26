const express = require('express');
const app = express();
const logger = require('./logger');

// req => middleware => res

// middle ware now can be used in every app.get without writing the whole code again and again, we just had to pass the middleware between method and req, res

// const logger = (req, res, next)=>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time);

//     //to avoid buffering we use next function of express
//     next();
// }

app.get('/', logger , (req, res)=>{
    
    res.send("Home");
})
app.get('/about',logger ,(req, res)=>{
    res.send("About");
})

app.listen(5000, ()=>{
    console.log("Server started");
})