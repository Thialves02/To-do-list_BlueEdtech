import React, { useEffect, useState } from "react"
import './View.css';
import {Api} from "../../src/api/api"

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
    return(
        <>
        <h1>{task.title}</h1>
        <h1>{task.date}</h1>
        <h1>{task.priority}</h1>
        </>
    );
}

export default View;