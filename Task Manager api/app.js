const express = require('express');
const app = express();
const tasks = require('./Routes/getTask');
const connectDB = require('./db/connect');
require('dotenv').config();
// all the routes which would be there in our application
// app.get('/api/v1/tasks') -> get all tasks
// app.post('/api/v1/tasks') -> to add a new task
// app.get('/api/v1/task/:id') -> get single task 
// app.delete('/api/v1/tasks/:id') -> delete a task
// app.put('/api/v1/tasks/:id') -> update task


app.use(express.json());
app.use(express.static('./public'))

app.use('/api/v1/tasks', tasks)


const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(3000, () => {
            console.log("Server started at port 3000");
        })
    } catch (error) {
        console.log(error);
    }
}

start();
