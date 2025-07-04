import React, { useState } from 'react';
import App from './App';
function ToDoList(){
    const[tasks,setTasks]=useState(["Go to gym","Watch a movie","Swimmimg"]);
    const[newTask,setNewTask]=useState(" ");
    function handleInputChange(event){
            setNewTask(event.target.value); 
    }
    function addTask(){
       if(newTask.trim()!==""){
        setTasks(t => [...t,newTask]);
        setNewTask(" ");
       }
    }
    function deleteTask(index){
         const updatedTasks=tasks.filter((_,i) => i!==index);
         setTasks(updatedTasks);

    }
    function moveTaskUp(index){
          if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
          }
    }
    function moveTaskDown(index){
           if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
          }
    }
    return(
    <div className="to-do-list">
        <div className='nav-bar'>
           <h1>Todo App</h1>
        </div>
        
        <h2>Tasks</h2>
        <div>
            <input type="text" placeholder="Add a new task" value={newTask} onChange={handleInputChange} onKeyDown={(e) => e.key === "Enter" && addTask()}/>
            <button className='add-btn' onClick={addTask}>ADD</button>
        </div>
        <ol>
            {tasks.map((task,index) => (
                <li key={index}>
                    <span className='text'>{task}</span>
                     <button className='delete-btn' onClick={()=> deleteTask(index)}>DELETE</button>
                     <button className='move-btn' onClick={()=> moveTaskUp(index)}>UP</button>
                     <button className='move-btn' onClick={()=> moveTaskDown(index)}>DOWN</button>
                </li>
            ))}
        </ol>
    </div>);
}
export default ToDoList;