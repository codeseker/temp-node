const mongoose = require('mongoose');


// scheams will be used for documents in mongoDb collection
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "PLease provide the name"],
        trim: true,
        maxlength: [20, 'Name cannot exceed the length of 20 characters'],
        minlength: [3, "Name cannot be less than 3 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)