import React from 'react';
import './Cards.css';

const Card = () => {
    return(
        <>
        <div className="card"> 
            <h1>Title of the task</h1>
            <h1>Date</h1>
            <p>Priority</p>
        </div>
        </>
    );
}

export default Card;