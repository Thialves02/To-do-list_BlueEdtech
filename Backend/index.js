const express = require('express');
const cors = require('cors');

/* const corsOptions ={
    origin:'http://localhost:3001',
    optionSucessStatus:200,
} */



const app = express();
app.use(express.json());
app.use(cors())

const Conn = require('./models/conn/conn');
const db_url = process.env.DB_URL
const db_user = process.env.DB_USER
const db_pass = process.env.DB_PASS
const db_data = process.env.DB_DATA

Conn(db_url,db_user,db_pass,db_data);

const port = 3001;

const task = require('./routers/tasks.routes')
app.use('/tasks',task);

app.listen(process.env.PORT || port,()=>{
    console.info(`Server running on the port ${port}`);
})