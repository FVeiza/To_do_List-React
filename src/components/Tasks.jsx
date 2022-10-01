import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion, handlePinClick}) => {
    return (
        <>
            {tasks.map( (task) => (
            <Task 
                key={task.id}
                task={task} 
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion}
                handlePinClick={handlePinClick}
            />
            ))}
        </>
    );

};

export default Tasks;