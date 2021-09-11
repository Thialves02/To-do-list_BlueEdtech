import React, {useState}from 'react';
import './Form.css';
import {Link} from 'react-router-dom'



const Form = () => {


    return(
        <>
        <div className="container">
            <div className="back-btn">
            <Link to='/project'><button><i class="fas fa-arrow-left"></i>BACK</button></Link>
            </div>
            <h1>Add task</h1>
            <form>
                <label>Title</label>
                <input type="text" ></input>
                <label>Date</label>
                <input type="text"  ></input>
                <label>Priority</label>
                <input list="prioritys"  ></input>
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