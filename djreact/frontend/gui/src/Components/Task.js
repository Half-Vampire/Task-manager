import React, { Component } from "react";
import Navbar from "./Navbar";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

export default class Task extends Component {
  state = {
    tasks: [],
  };
  render() {
    return (
      <>
        <Navbar />
        <h1
          className="mt-3 text-white text-capitalize text-center"
          style={{ fontSize: "60px" }}
        >
          Task Manager
        </h1>
        <h3 className="mt-3 text-white text-capitalize text-center">
          Manage your tasks efficiently!
        </h3>
        <div className="row justify-content-center">
          <div className="col ">
            <TaskForm />
          </div>
          <div className="col">
            <TaskList />
          </div>
        </div>
      </>
    );
  }
}
