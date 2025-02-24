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
  const deleteHandlerC = (id) => {
    setDoneTask(doneTask.filter((task) => task.id !== id));
  };

  const handleDone = (id, title, desc) => {
    alert(`Your task No ${id} has been done`);
    setDoneTask([...doneTask, { id, title, desc }]);
    setMainTask(mainTask.filter((task) => task.id !== id));
  };

  return (
    <div className="overflow-hidden bg-white w-full rounded-lg mr-2">
      <form onSubmit={submitHandler} className="p-4">
        <h1 className="pt-4 pl-4 text-[27px] font-semibold">My Todo</h1>
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
          className="bg-[#202D48] drop-shadow-xl rounded text-white w-20 border-2 border-black text-[15px]"
          type="submit"
        >
          Submit
        </button>
      </form>
      <hr />
      <div className="sm:flex sm:justify-evenly sm:flex-row">
        <div className=" rounded-lg  min-h-[200px] min-w-[50%] flex flex-col items-center justify-center">
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
                      className="bg-[#202d4816] border-[2px] border-[#737b8e5b] drop-shadow-xl flex justify-center flex-col pl-2 pt-2 rounded-md min-h-[185px] w-[250px]"
                    >
                      <div className="flex gap-2"> 
                      <h3>Task No: {task.id}</h3>
                      <h3> Date:{new Date().toLocaleDateString()}</h3>
                      </div>
                      <span className="font-semibold mt-1 text-[22px]">Title: {task.title}</span>
                      <span className="">Description: {task.desc}</span>
                      <div className="sm:gap-3 mt-1 mb-1">
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
                <h2 className="text-gray-600">No Task Available</h2>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  justify-center sm:justify-normal pl-3 pt-2 pr-3 min-w-[50%] rounded-lg min-h-[220px]">
          <div className="flex gap-2 mb-7 w-full items-center justify-center flex-row text-[25px]">
            <div className="bg-[#42a72b]  mt-[8px] rounded-xl h-5 w-5"></div>
            <h3>Completed-Tasks</h3>
          </div>
          {doneTask.length > 0 ? (
            <div className="flex w-full flex-wrap  items-center  justify-center mb-5 gap-7">
              {doneTask.map((task) => (
                <div
                  key={task.id}
                  className="bg-[#202d4816] border-[2px] border-[#737b8e5b] drop-shadow-xl flex  flex-col pl-2 justify-center rounded-md min-h-[185px] w-[250px]"
                >
                      <div className="flex gap-2"> 
                      <h3>Task No: {task.id}</h3>
                      <h3> Date:{new Date().toLocaleDateString()}</h3>
                      </div>
                  <span className="font-semibold text-[22px] mt-1">Title: {task.title}</span>
                  <span className="">Description: {task.desc}</span>
                  <button
                    className="bg-[#e23535] mt-1 h-6 text-[13px] border-2 w-[60px] text-white border-[#e23535] rounded"
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
    </div>
  );
}

export default Front;
