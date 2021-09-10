import React from 'react';
import Card from '../components/Cards/Cards';
import './Project.css'

const Project = () =>{
    return(
        <>
        <div className="container">
            <h1>Projeto 1</h1>
            <div className="progress">
                <h2>To Do</h2>
                <h2>In progress</h2>
                <h2>Done</h2>
            </div>
            <div className="progress">
                <button><i class="fas fa-plus"></i>New task</button>
                <button><i class="fas fa-plus"></i>New task</button>
                <button><i class="fas fa-plus"></i>New task</button>
            </div>
            
            <Card/>
        </div>
        </>
    );
}

export default Project