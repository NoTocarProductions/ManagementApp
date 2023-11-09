import React, { useState } from "react";

export default function ProjectDetails({ project }) {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const taskInputHandler = (e) => {
        setTask(e.target.value);
    }

    const taskSubmitHandler = (e) => {
      e.preventDefault();
      setTask(task);
      taskList.length === 0 ?
        (setTaskList((prevTasksList) => {
            return [...prevTasksList, task]
          })) : setTaskList(task) ;
          console.log(taskList);
    }
  return (
    <>
    <div className="mt-24 text-left w-2/3">
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
      <button>Delete</button>
    
      
      <p className="text-stone-600 whitespace-pre-wrap">{project.date}</p>
      <p className="text-stone-800 my-4">{project.description}</p>
      </header>
    <div>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <form onSubmit={taskSubmitHandler}>
        <input className="w-64 px-2 py-1 rounded-sm bg-stone-200" type="text" value={task} onChange={taskInputHandler}></input>
        <button type="submit">Add Task</button>
        </form>
        <ul>
            <li></li>
        </ul>
    </div>
   </div> </>
  );
}