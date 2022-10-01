import React, {useState} from "react";
import "./Task.css";
import {CgClose, CgInfo, CgPinAlt} from 'react-icons/cg';
import {useNavigate} from 'react-router-dom';

const Task = ({task, handleTaskClick, handleTaskDeletion, handlePinClick}) => {

    const navigate = useNavigate();

    const handleTaskInfoClick = () => {
        navigate(`/${task.id}`);
    };

    return(
        <div className="task-container" 
        style={task.completed ? {border: '3px solid rgb(51, 255, 0)', transition: 'all 0.5s ease', color: 'rgb(9, 230, 9)'} : {color: 'white'} | 
        task.pinned ? {border: '3px solid red', transition: 'all 0.5s ease', color: 'red'} : {transition: 'all 0.5s ease', color: 'white'}}>
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container"  >
                <button className="task-pin-button" onClick={() => handlePinClick(task.id)}>
                    <CgPinAlt />
                </button>
                <button className="task-info-button" onClick={handleTaskInfoClick}>
                    <CgInfo />
                </button>
                
                <button className="remove-task-button" onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose />
                </button>
            </div>
        </div> 
    );
}

export default Task;