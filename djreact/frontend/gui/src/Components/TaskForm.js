import React, { Component } from "react";
import { connect } from "react-redux";
import tasks from "../redux/reducers/tasks";
import { createTask } from "../redux/action/tasks";
import PropTypes from "prop-types";

class TaskForm extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
  };

  state = {
    title: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.title, this.state.description);
    const task = {
      title: this.state.title,
      description: this.state.description,
    };
    this.props.createTask(task);
  };
  render() {
    return (
      <>
        <div className="card mt-5 ml-auto mr-auto" style={{ width: "75%" }}>
          <h5 className="card-header text-center">Add Tasks</h5>
          <div className="card-body">
            <form className="mt-2" onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Add Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Title"
                  id="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                  id="description"
                  placeholder="Enter Description!"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-md float-right"
              >
                Add Task
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default connect(null, { createTask })(TaskForm);
