const mongoose = require('mongoose');

const tasksModel = new mongoose.Schema({
    title:{type:String, required:true},
    deadline:{type:String, required:true},
    priority:{type:Number, required:true},
    creationDate:{type:Date, default: Date.now}
})

const Task = mongoose.model("tasks",tasksModel)
module.exports = Task;