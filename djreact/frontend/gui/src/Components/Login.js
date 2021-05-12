import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";
import "../all.css";
import { LOGIN_FAIL } from "../redux/action/actionTypes";
import PropTypes from "prop-types";
import { login } from "../redux/action/auth";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/tasks"></Redirect>;
    }
    return (
      <>
        <Navbar />
        <div className="row justify-content-center">
          <div className="col-5">
            <h1 className="text-white text-center mt-5 mb-2">Task Manager</h1>
            <h4 className="text-white text-center mb-2">
              Login to your registered ID
            </h4>
            <div className="card mt-5">
              <h5 className="card-header text-center">Login</h5>
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
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
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
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
