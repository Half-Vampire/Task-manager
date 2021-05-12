import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks, deleteTask } from "../redux/action/tasks";
import Navbar from "./Navbar";

class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTasks();
  }

  state = {
    num: "0",
  };

  render() {
    const val = this.state.num;
    return (
      <>
        <div className="card mt-5 ml-auto mr-auto" style={{ width: "75%" }}>
          <table className="table table-striped">
            <thead>
              <tr className="">
                <th>Title</th>
                <th>Description</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.tasks.map((task) => (
                <tr key={task.id} className="">
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <button className="btn btn-primary btn-md mr-3">
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-md"
                      onClick={this.props.deleteTask.bind(this, task.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps, { getTasks, deleteTask })(TaskList);
