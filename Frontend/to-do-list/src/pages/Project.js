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
            <h1>Projeto 1</h1>
            <div className="teste">
            <div className="progress">
                <h2>To Do</h2>
                <Link to="/form"><button><i class="fas fa-plus"></i>New task</button></Link>
                {tasks.map((task,index) => {
                <Card task={task} key={task._id}/>
                })}
            </div>
            <div className="progress">
                <h2>In progress</h2>
                <button><i class="fas fa-plus"></i>New task</button>               
            </div>
            <div className="progress">
                <h2>Done</h2>
                <button><i class="fas fa-plus"></i>New task</button>
            </div>
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