const mongoose = require('mongoose')

function Conn(url,user,pass,banco){
mongoose.connect("mongodb://localhost:27017/todolist",{
    user: user,
    pass: pass,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).then(()=>{
        console.log("MongoDB connected")
    }).catch((err) => {
        console.error(err);
    })   
}

module.exports = Conn;