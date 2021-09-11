const mongoose = require('mongoose')

function Conn(url,user,pass,banco){
mongoose.connect("mongodb+srv://user:thiago2002@cluster0.4gd9q.mongodb.net/to-do-list?retryWrites=true&w=majority",{
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