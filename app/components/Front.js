"use client";
import React, { useState } from "react";
function Front() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [taskId, setTaskId] = useState(1); // Unique counter for tasks

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return; // Prevent empty tasks

    setMainTask([...mainTask, { id: taskId, title, desc }]);
    setTaskId(taskId + 1); // Increment ID counter
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (id) => {
    setMainTask(mainTask.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div className="h-11 w-full text-center p-2 text-xl bg-black text-white">
        <h2>TO DO LIST</h2>
      </div>

      <form onSubmit={submitHandler} className="p-4">
        <input
          className="border-2 border-black m-2 p-1"
          type="text"
          placeholder="Enter task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-2 border-black m-2 p-1"
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="bg-black font-bold rounded text-white w-20 border-2 border-black text-xl"
          type="submit"
        >
          Submit
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        {mainTask.length > 0 ? (
          <ul>
            {mainTask.map((task) => (
              <li
                key={task.id}
                className="flex justify-between bg-white p-2 my-2 border border-gray-300 rounded"
              >
                <span className="font-bold">{task.title}</span>
                <span>{task.desc}</span>
                <button
                  className="bg-red-500 border-2 w-20 text-white border-black rounded"
                  onClick={() => deleteHandler(task.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <h2>No Task Available</h2>
        )}
      </div>
    </div>
  );
}

export default Front;
