import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Api } from '../api/api';
import './FormEdit.css';

const FormEdit = (props) => {
    const id = props.match.params.id;
    const [fields,setFields] = useState({})
    

    useEffect(() => {
        getTaskById()
    },[])

    const getTaskById = async () => {
        const response = await Api.buildGetById(id)
        const data = await response.json()
        setFields(data);
    }

    const handleFieldsChange = (e) => {
        const auxFields = {...fields}
        auxFields[e.target.name] = e.target.value
        setFields(auxFields);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const dados = {...fields}
        const result = await Api.buildPut(dados,id)
        const response = await result.json()
        console.log(response)
    }
    return(
        <>
        <div className="container">
            <div className="back-btn">
            <Link to='/project'><button><i class="fas fa-arrow-left"></i>BACK</button></Link>
            </div>
            <h1>Edit task</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" id='title' name='title' value={fields.title} onChange={handleFieldsChange}></input>
                <label>Date</label>
                <input type="text" id='date' name='date'value={fields.date} onChange={handleFieldsChange}></input>
                <label>Priority</label>
                <input list="prioritys" id='priority' name='priority' value={fields.priority} onChange={handleFieldsChange}></input>
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

export default FormEdit;