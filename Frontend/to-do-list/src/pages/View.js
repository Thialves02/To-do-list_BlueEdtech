import React, { useEffect, useState } from "react"
import './View.css';
import {Api} from "../../src/api/api"
import { Link } from "react-router-dom";

const View = (props) => {
    const id = props.match.params.id;
    const [task,setTask] = useState({})

    useEffect(() =>{
        getTaskById()
    },[])

    const getTaskById = async () => {
        const response = await Api.buildGetById(id)
        const data = await response.json()
        setTask(data);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        const resposta = await Api.buildDelete(id)
        const result = await resposta.json();
        console.log(result)
        props.history.push('/');
    }

    return(
        <>
        <h1>{task.title}</h1>
        <h1>{task.date}</h1>
        <h1>{task.priority}</h1>
        <button onClick={handleDelete}>DELETE</button>
        <Link to={`/edit/${task._id}`} ><button>EDIT</button></Link>
        </>
    );
}

export default View;