import React, { useState } from "react";

const Addtaskform = ({addTask}) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    if (event) event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = (event)=>{
    if (event) event.preventDefault();
    if(!value || value===''){
      return
    }
    addTask(value);
    setValue("")
  }

  return (
    <div className=" w-full mb-5">
      <form className=" flex" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          value={value}
          placeholder="what need to be done ?"
          className=" outline-none w-full h-12 text-xl py-1 px-2 bg-zinc-400 placeholder:text-white rounded-l"
        ></input>
        <button
          type="submit"
          className=" h-12 text-xl bg-zinc-400 p-1 rounded-r"
        >
          add
        </button>
      </form>
    </div>
  );
};

export default Addtaskform;
