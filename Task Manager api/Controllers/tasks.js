const Task = require('../Models/Task');

const getAllTasks = async (req, res) => {

    try {
        const allTasks = await Task.find({});
        res.status(200).json({ tasks: allTasks });
    } catch (error) {
        res.staus(500).json({ msg: error });
    }
}

const createTask = async (req, res) => {

    try {
        const tasks = await Task.create(req.body);
        res.status(201).json(tasks);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

const deleteTask = async (req, res) => {

    try {
        const { id: taskId } = req.params;
        const deletedTask = await Task.findOneAndDelete({ _id: taskId });
        res.status(201).json(deletedTask);

        if (!deletedTask) {
            res.json({ msg: `No task with id: ${taskId}` });
        }
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}

const getTask = async (req, res) => {

    try {
        const { id: taskId } = req.params;
        const singleTask = await Task.findOne({ _id: taskId });
        res.status(200).json(singleTask);
    } catch (error) {
        res.status(404).json({ msg: "Not Found" });
    }
}

const updateTask = async (req, res) => {

    try {
        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true,
        })
        res.json(task)
    } catch (error) {
        res.status(404).json({ msg: "Not Found" });
    }
   
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    getTask,
    deleteTask,
    updateTask
}