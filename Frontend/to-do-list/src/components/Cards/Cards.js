import React from 'react';
import './Cards.css';
import {Link} from 'react-router-dom';

const Card = (props) => {
    
    const task = props.task;
    return(
        <>
        <Link to={`/view/${task._id}`}>
        <div className="card"> 
            <h1>{task.title}</h1>
            <h1>{task.date}</h1>
            <p>{task.priority}</p>
            <p>{task.creationDate}</p>
        </div>
        </Link>
        </>
    );
}

export default Card;