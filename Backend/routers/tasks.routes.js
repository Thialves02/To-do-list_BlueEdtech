const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');

router.post('/add', async(req, res)=> {
    await Task.create(req.body)
    .then(()=> {
        res.status(200).send("Task added successfully!");
    })
    .catch((err)=> {
        res.status(400).send("Something went wrong. Try again later")
        console.log(err)
    });
})
router.get('/',(req, res) => {
    Task.find({})
    .then((task)=> {
        res.status(200).send(task)
    })
    .catch((err)=>{
        res.status(400).send("Something went wrong. Try again later")
        console.log(err)
    })
})
router.put("/update/:id", async (req, res) => {
    await Task.updateOne({_id : req.params.id},req.body)
    .then(()=> {
        res.status(200).send("Task updated successfully!")
    })
    .catch((err)=>{
        res.status(400).send("Something went wrong. Try again later")
        console.log(err)
    })
})
router.delete("/delete/:id",async(req, res) =>{
    await Task.deleteOne({_id: req.params.id})
    .then(() =>{
        res.status(200).send("Task deleted successfully!")
    }) .catch((err) => {
        res.status(400).send("Something went wrong. Try again later")
        console.log(err)
    })
});

module.exports = router;