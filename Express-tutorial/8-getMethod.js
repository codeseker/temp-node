const express = require('express');
const app = express();
let {people} = require('./data');


app.get('/api/people', (req, res)=>{
    
    res.status(200).json(people);
})
app.listen(5000);
