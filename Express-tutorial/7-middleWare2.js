const express = require('express');
const app = express();
const logger = require('./logger');
const auth = require('./auth');
const morgan = require('morgan');

// req => middleware => res

// app.use() => used to acess the middleware function in all the routes of the page with just simple one line code rather than manually passing the middleware function in each route
// app.use(auth, logger);
app.use(morgan('tiny'));


app.get('/', (req, res)=>{
    
    res.send("Home");
})
app.get('/about',(req, res)=>{
    res.send("About");
})

app.listen(5000, ()=>{
    console.log("Server started");
})