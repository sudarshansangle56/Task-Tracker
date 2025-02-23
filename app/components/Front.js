"use client";
import React, { useState, useEffect } from "react";

function Front() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const [taskId, setTaskId] = useState(1);
  const [doneTask, setDoneTask] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setMainTask(storedTasks);
      setTaskId(storedTasks[storedTasks.length - 1].id + 1); // Set next taskId
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(mainTask));
  }, [mainTask]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title.trim() || !desc.trim()) return; // Prevent empty tasks

    const newTask = { id: taskId, title, desc };
    setMainTask([...mainTask, newTask]);
    setTaskId(taskId + 1);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (id) => {
    setMainTask(mainTask.filter((task) => task.id !== id));
  };
  const deleteHandlerC = (id)=>{
    setDoneTask(doneTask.filter((task)=> task.id !==id));
  }

  const handleDone = (id, title, desc) => {
    alert(`Your task No ${id} has been done`);
    setDoneTask([...doneTask, { id, title, desc }]);
    setMainTask(mainTask.filter((task) => task.id !== id));
  };

  return (
    <div className="overflow-hidden">
      <form onSubmit={submitHandler} className="p-4">
        <input
          className="border-2 drop-shadow-xl rounded-lg border-[#e1dbdb] m-2 p-1"
          type="text"
          placeholder="Enter task name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border-2 drop-shadow-xl rounded-lg border-[#e1dbdb] m-2 p-1"
          type="text"
          placeholder="Enter description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          className="bg-black drop-shadow-xl rounded text-white w-20 border-2 border-black text-[15px]"
          type="submit"
        >
          Submit
        </button>
      </form>

      <hr />

      <div className=" rounded-lg bg-[#c4d2de44] flex flex-col items-center justify-center">
        <div className="pt-2 flex gap-2 flex-row text-[25px]">
          <div className="bg-[#f21919] mt-[11px] rounded-xl h-5 w-5"></div>
          <h3>Pending-Tasks</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex flex-col h-full w-full">
            {mainTask.length > 0 ? (
              <ul className="flex gap-7 p-7 flex-wrap items-center justify-center">
                {mainTask.map((task) => (
                  <div
                    key={task.id}
                    className="bg-[#b0b0b089] drop-shadow-xl flex flex-col items-center justify-center rounded-md min-h-[200px] w-[270px]"
                  >
                    <h3>Task No: {task.id}</h3>
                    <h3>{new Date().toLocaleDateString()}</h3>
                    <span className="font-bold">Title: {task.title}</span>
                    <span>Description: {task.desc}</span>
                    <div className="sm:gap-3">
                      <button
                        className="bg-[#e23535] h-6 text-[13px] border-2 w-[60px] text-white border-[#e23535] rounded"
                        onClick={() => deleteHandler(task.id)}
                      >
                        Delete
                      </button>
                      <button
                        onClick={() =>
                          handleDone(task.id, task.title, task.desc)
                        }
                        className="bg-teal-600 ml-3 hover:bg-teal-700 h-6 text-[13px] border-2 w-[60px] text-white border-none rounded"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <h2 className="text-white">No Task Available</h2>
            )}
          </div>
        </div>
      </div>
      <div className=" bg-[#c4d2de44] p-4 min-h-[300px] mt-4 mb-4 w-full">
        <div className="pt-2 flex gap-2 w-full items-center justify-center flex-row text-[25px]">
          <div className="bg-[#42a72b]  mt-[8px] rounded-xl h-5 w-5"></div>
          <h3>Completed-Tasks</h3>
        </div>
        {doneTask.length > 0 ? (
          <div className="grid gap-4">
            {doneTask.map((task) => (
              <div
                key={task.id}
                className="bg-[#b0b0b089] drop-shadow-xl flex flex-col items-center justify-center rounded-md min-h-[200px] w-[250px]"
              >
                <h3>Task No: {task.id}</h3>
                <h3>{new Date().toLocaleDateString()}</h3>
                <span className="font-bold">Title: {task.title}</span>
                <span>Description: {task.desc}</span>
                <button
                  className="bg-[#e23535] h-6 text-[13px] border-2 w-[60px] text-white border-[#e23535] rounded"
                  onClick={() => deleteHandlerC(task.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h3 className="text-gray-600">No completed tasks</h3>
        )}
      </div>
    </div>
  );
}

export default Front;
