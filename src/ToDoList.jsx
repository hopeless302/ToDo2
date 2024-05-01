import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


//I am making the ToDoList component a functional component

export default function ToDoList() {
    const [todo, setTodo] = useState([]);
    const [newtod, setNewtod] = useState("");
    const handleclick = () => {
        setTodo((prev) => {
            return [...prev, { id: uuidv4(), task: newtod }];
        });
        setNewtod("");
    };
    const handleDelete = (id) => {
        setTodo((prev) => {
            return prev.filter((task) => task.id !== id);
        });
    }
  return (
    <>
    <div className="flex flex-col items-center h-full w-full mt-16 ">
      <h1 className="text-lg text-cyan-50">My To Do List: </h1>
      <div className="flex w-screen justify-center items-center">
      <input
        type="text"
        placeholder="Add Task"
        value={newtod}
        className="shadow appearance-none border rounded-s-lg w-5/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setNewtod(e.target.value)}
      />
      <button onClick={handleclick} className=" button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-e-lg ">
        Add Task
      </button>
      </div>
      <hr className="mt-8 border border-white-400 w-1/2" />
<h1 className="text-cyan-50">Tasks Todo: </h1>
<ul className="text-cyan-50">
  {todo.map((task) => {
    return (
      <li key={task.id}>
        {task.task}
        <button 
          className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
      </li>
    );
  })}
</ul>
    </div>
    </>
  );
}
