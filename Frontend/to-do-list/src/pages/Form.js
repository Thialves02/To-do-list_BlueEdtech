import React from 'react';
import './Form.css';
import {Link} from 'react-router-dom'
import {Api} from "../../src/api/api"


const Form = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const date = event.target.date.value;
        const priority = event.target.priority.value;
        const Task = {
            title:title,
            date:date,
            priority:priority,
        }
        const response = await Api.buildPost(Task);
        console.log(Task);
        const data = await response.json() 
        console.log(data);

    }
    

    return(
        <>
        <div className="container">
            <div className="back-btn">
            <Link to='/project'><button><i class="fas fa-arrow-left"></i>BACK</button></Link>
            </div>
            <h1>Add task</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" id='title' name='title'></input>
                <label>Date</label>
                <input type="text" id='date' name='date'></input>
                <label>Priority</label>
                <input list="prioritys" id='priority' name='priority'></input>
                <datalist id="prioritys">
                    <option value="High"/>
                    <option value="Medium"/>
                    <option value="Low"/>
                </datalist>
                <button type="submit">SEND</button>
            </form>
        </div>
        </>
    );
}

export default Form;