import React from "react";

import Button from "./Button";
import { useParams } from "react-router-dom";
import './TaskInfo.css';
import { useNavigate } from "react-router-dom";
import { CgPen } from 'react-icons/cg';
import { useState } from "react";

const TaskInfo = ({tasks, handleInputData}) => {
    
    const params = useParams();

    const navigate = useNavigate();

    const handleBackButtonClick = () => {
        navigate(-1);
    }

    const [editable, setEditable]=useState(false);

    const t = tasks.find(task => {return task.id === params.taskId});

    const [newInfo, setNewInfo]=useState(t.info);

    const [shownInfo]=useState(t.info);

    const handleEditButtonClick = () => {
        setEditable(editable => !editable);
    };

    const handleInfoInput = (e) => {
        setNewInfo(newInfo => e);
    };

    const handleUpdate = () => {
        handleEditButtonClick();
        console.log(editable);
        if(!editable === false){
            handleInputData(t.id, newInfo, editable);
        }
    };

    return(
        <>
            <div className="back-button-container" onClick={handleBackButtonClick}>
                <Button>Voltar</Button>
            </div>
            <div className="task-info-buttons-container" >
                <h2 className="h2">{t.title}</h2>
                <div className="edit-button-container" onClick={handleUpdate}>
                    <CgPen className="cgpen" style={editable ? {color:"red", backgroundColor: "black", padding: "3px"}: {color: "white"}}/>
                </div>
            </div>
            <div className="task-details-container" 
            contentEditable={editable} /*onInput={e => handleInputData(t.id, e.currentTarget.textContent)}*/ 
            onInput={e => handleInfoInput(e.currentTarget.textContent)}
            style={editable ? {background: "white", color: "black"} : {background: "rgb(27, 21, 21)", color: "white"}}> 
                <p>
                    {console.log(shownInfo)}
                    {shownInfo}
                </p>
            </div>
        </>
    );
}

export default TaskInfo;