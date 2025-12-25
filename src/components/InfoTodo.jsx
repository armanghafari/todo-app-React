import React, { useState } from "react";
const InfoTodo = ({ tasks, handleFilterr }) => {
  const [filter, setFilter] = useState("all");
  const handleFilter = (filterName) => {
    setFilter(filterName);
    handleFilterr(filterName)
  };

  return (
    <div className=" w-full flex bg-zinc-400 mt-5 rounded p-1">
      <div className=" w-20 flex items-center">{tasks.length} items</div>
      <div className=" w-full">
        <ul className=" flex items-center justify-end flex-row gap-3">
          <li>
            <button
              className=" bg-zinc-300 p-1 rounded focus:bg-slate-50"
              onClick={() => handleFilter("all")}
            >
              all
            </button>
          </li>
          <li>
            <button
              className=" bg-zinc-300 p-1 rounded focus:bg-slate-50"
              onClick={() => handleFilter("active")}
            >
              active
            </button>
          </li>
          <li>
            <button
              className=" bg-zinc-300 p-1 rounded focus:bg-slate-50"
              onClick={() => handleFilter("completed")}
            >
              completed
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoTodo;
