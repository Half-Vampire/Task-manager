import React, { Component } from "react";
import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../redux/action/auth";

class Navbar extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand ml-5">
                <img src={Logo} alt="Logo img" width="36px" height="30px"></img>
              </Link>
              <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-1 ml-auto">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link active">
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      onClick={this.props.logout}
                      className="nav-link btn btn-info btn-sm text-light ml-3"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    } else {
      return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand ml-5">
                <img src={Logo} alt="Logo img" width="36px" height="30px"></img>
              </Link>
              <div className="" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-1 ml-auto">
                  <li className="nav-item">
                    <Link to="/login" className="nav-link active">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signup" className="nav-link active">
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
