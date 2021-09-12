const express = require('express');
const router = express.Router();
const Task = require('../models/tasks');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

router.post("/add", async (req, res) => {
    // if(Controller(req.header.key)){
        await Task.create(req.body)
        .then(() => {
            res.status(200).send("Musica adicionada com sucesso");
        }).catch((err) => {
            res.status(400).send("Algo errado com a musica, tente novamente");
            console.error(err);
        })
    // }else{
    //     res.status(403).end();
    // }
});
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
router.get('/findById/:id', async (req, res) => {
    await Task.findOne({_id : req.params.id})
    .then((task) => {
        res.status(200).send(task);
    })
    .catch((err) => {
        res.status(400).send("Something went wrong. Try again later");
        console.log(err);
    })
});
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