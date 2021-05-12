import React, { Component } from "react";
import Navbar from "./Navbar";
import "../all.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../redux/action/auth";

class Register extends Component {
  state = {
    username: "",
    password1: "",
    password2: "",
    email: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password1, password2, email } = this.state;

    this.props.register(username, password1, email);
  };

  render() {
    // console.log(this.props.auth.isAuthenticated);
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/tasks" />;
    }
    return (
      <>
        <Navbar />
        <div className="row justify-content-center">
          <div className="col-4">
            <h1 className="text-white text-center mt-5 mb-2">Task Manager</h1>
            <h4 className="text-white text-center mb-2">
              Register Yourself and start Working Today
            </h4>
            <div className="card mt-5">
              <h5 className="card-header text-center">Register</h5>
              <div className="card-body">
                <form className="mt-2" onSubmit={this.handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Username"
                      id="username"
                      name="username"
                      value={this.state.username}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Password"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    ></input>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      id="password"
                      name="password1"
                      value={this.state.password1}
                      onChange={this.handleChange}
                    ></input>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password2" className="form-label">
                      Re-Enter Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Re-enter Password"
                      id="password2"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
