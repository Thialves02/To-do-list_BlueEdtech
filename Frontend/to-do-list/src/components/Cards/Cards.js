import React from 'react';
import './Cards.css';

const Card = (props) => {
    console.log(props)
    const task = props.task;
    return(
        <>
        <div className="card"> 
            <h1>{task.title}</h1>
            <h1>{task.date}</h1>
            <p>{task.priority}</p>
            <p>{task.creationDate}</p>
        </div>
        </>
    );
}

export default Card;