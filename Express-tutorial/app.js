const express = require('express');
const app = express();
const { readFileSync } = require('fs');
const {people} = require('./data')


// parse form data using built in middleware
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.get('/index.html', (req, res) => {
    const file = readFileSync('./form/jsForm.html', 'utf8');
    res.status(200).send(file);
})
app.get('/api/people', (req, res)=>{
    res.json(people);
})

app.post('/api/people', (req, res)=>{
    res.status(201);
    res.end();
})

app.put('/api/people/:id', (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    
    const person = people.find((person) => {
        return person.id === Number(id);
    })

    const newPeople = people.map((person) => {
        if(person.id === Number(id))
        {
            person.name = name;
        }
        return person
    })
    res.json(newPeople);
})

app.delete('/api/people/:id', (req, res)=>{
    const {id} = req.params;
    const person = people.find((person) => {
        return person.id === Number(id);
    })

    const newPeople = people.filter((person) => {
        return person.id !== Number(id);
    })
    res.json(newPeople);
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
