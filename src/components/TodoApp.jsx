import React, { useEffect, useState } from "react";
import Addtaskform from "../components/AddTaskForm";
import TodoDetails from "../components/TodoDetail";
import InfoTodo from "../components/InfoTodo";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [filteredTask, setFilteredTask] = useState([]);
  const [filter, setFilter] = useState("all");
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let loadTask = localStorage.getItem("tasks")
    if(loadTask){
      loadTask = JSON.parse(loadTask)
    }else{
      loadTask = []
    }
    setTasks(loadTask);
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTask(tasks);
    } else if (filter === "completed") {
      const newCompletedTask = tasks.filter((task) => task.status);
      setFilteredTask(newCompletedTask);
    } else if (filter === "active") {
      const newCompletedTask = tasks.filter((task) => !task.status);
      setFilteredTask(newCompletedTask);
    }
  }, [filter, tasks, refresh]);

  const addTask = (titleTask) => {
    const newTask = [
      ...tasks,
      {
        title: titleTask,
        status: false,
        id: uuidv4(),
      },
    ];
    setTasks(newTask);
    localStorage.setItem("tasks", JSON.stringify(newTask));
  };
  const deleteTask = (taskId) => {
    let newTasksList = tasks;
    delete newTasksList[tasks.findIndex((task) => task.id === taskId)];
    newTasksList = newTasksList.filter((item) => item);
    setTasks(newTasksList);
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
  };
  const handleChangeStatus = (taskId) => {
    let newTasksList = tasks;
    const tasksIndex = tasks.findIndex((task) => task.id === taskId);
    newTasksList[tasksIndex].status = !newTasksList[tasksIndex].status;
    setTasks(newTasksList);
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
    setRefresh(refresh + 1);
  };

  return (
    <div className=" max-w-[550px] min-w-80 my-0 mx-auto">
      <Addtaskform addTask={addTask} />
      <TodoDetails
        tasks={filteredTask}
        deleteTask={deleteTask}
        handleChangeStatus={handleChangeStatus}
      />
      <InfoTodo tasks={filteredTask} handleFilterr={setFilter} />
    </div>
  );
}

export default TodoApp;
