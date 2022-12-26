const express = require('express');
const app = express();
const { readFileSync } = require('fs');


// parse form data using built in middleware
app.use(express.urlencoded({ extended: false }));


app.get('/index.html', (req, res) => {
    const file = readFileSync('./form/index.html', 'utf8');
    res.status(200).send(file);
})


app.post('/login', (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    if (name) {
        return res.send(`Welcome ${name}`);
    }
    res.send("Enter correctly");
    // console.log(req.body);
})
app.listen(5000);
