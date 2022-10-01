/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import "./App.css";
import React, {useState, useEffect} from "react";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskInfo from "./components/TaskInfo";
import axios from "axios";

const App = () => {
  
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "First Task",
      completed: false,
      pinned: false,
      info: 'first task'
    }
    ]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const {data} = await axios.get(
  //       'https://jsonplaceholder.cypress.io/todos?_limit=10'
  //     );  
  //     setTasks(data);    
  //   };

  //   fetchTasks();
  // }, []);

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...tasks, 
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        info: ''
      }
    ];

    setTasks(newTask);
  };

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed, pinned: false}

      return task;
    })

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  const handlePinClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, pinned: !task.pinned}

      return task;
    })

    setTasks(newTasks);
  }

  const handleInputData = (taskId, e, control) => {
    console.log(e);
    if(e === ''){
      e = '  ';
    }

    const newTasks = tasks.map(task => {
      if(task.id === taskId && control === true) return {...task, info: e}

      return task;
    })

    setTasks(newTasks);
  };

  return (
    <BrowserRouter> 
      <div className="container">
        <h1 style={{color: 'white', fontWeight: 'bold', fontFamily: 'serif', textShadow: '4px 4px #000000'}}>
          Tasks List
        </h1>
          
          <Routes>
            <Route path="/" element={<>
                    <AddTask handleTaskAddition={handleTaskAddition} />
                    <Tasks 
                    tasks={tasks} 
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                    handlePinClick={handlePinClick}
                    />
                  </>}
            />  
            <Route path="/:taskId" element={<TaskInfo tasks={tasks} handleInputData={handleInputData}/>} />
          </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
