import React ,{useState, useEffect} from 'react';
import Card from '../../src/components/Cards/Cards';
import './Project.css'
import { Link } from 'react-router-dom';
import { Api } from '../../src/api/api';

const Project = () =>{
    const[tasks,setTask] = useState([]);

    useEffect(()=>{
        getTask();
    },[])

    const url = 'http://localhost:3001/tasks'
    const getTask = async () =>{
        const response = await Api.buildGetRequest();
        const data = await response.json();
        setTask(data);
    }
    return(
        <>
        <div className="container">
            <div className="title">
            <h1>Project 0</h1>
            <Link to="/form"><button><i class="fas fa-plus"></i>New task</button></Link>
            </div>
            <div className="progress">
                
                {tasks.map((task,index) => {
                <Card task={task} key={task._id}/>
                })}
            </div>       
            <div className="list">
                {tasks.map((task, index) => (
                    <Card task={task} key={task._id}/>
                ))}
            </div>
            
            
        </div>
        </>
    );
}

export default Project