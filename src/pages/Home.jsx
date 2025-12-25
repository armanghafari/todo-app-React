import React from "react";
import Header from "../components/header";
import TodoApp from "../components/TodoApp";

function home() {
  return (
    <div className=" w-full">
      <Header />
      <TodoApp />
      <footer
        className="
      text-2xl min-h-24 flex items-center justify-center"
      >
        developed by Arman
      </footer>
    </div>
  );
}

export default home;
