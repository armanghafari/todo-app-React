import React from "react";
import { TiDelete } from "react-icons/ti";
function TaskItems({ task, deleteTask, handleChangeStatus }) {
  return (
    <li className=" w-full flex py-5 px-2.5 border-b">
      <input
        type="checkbox"
        className=" w-7 mr-1"
        checked={task.status}
        onChange={() => handleChangeStatus(task.id)}
      ></input>
      <h2 className=" w-full"> {task.title}</h2>
      <button
        className=" w-7 text-2xl text-red-600"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        <TiDelete />
      </button>
    </li>
  );
}

export default TaskItems;
