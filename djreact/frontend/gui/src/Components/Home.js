import React, { Component } from "react";
import Navbar from "./Navbar";
import Logo from "./main.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const element = <FontAwesomeIcon icon="check-circle"></FontAwesomeIcon>;

export default class Home extends Component {
  render() {
    const img_style = {
      marginTop: "70px",
      marginBottom: "70px",
      marginLeft: "50px",
      width: "800px",
      height: "auto",
    };
    return (
      <>
        <Navbar />
        <div className="row align-items-start bg-light justify-content-center">
          <div className="col">
            <img src={Logo} alt="The image" style={img_style}></img>
          </div>
          <div className="col mt-auto mb-auto">
            <h1 className="text-center mb-5" style={{ color: "green" }}>
              Organise it all with our Task Manager.
            </h1>
            <ul>
              <li className="mt-2 mb-3">
                <h5>
                  Easily organize and prioritize your tasks and projects so
                  you’ll always know exactly what to work on next.
                </h5>
              </li>
              <li className="mt-2 mb-3">
                <h5>
                  From business ventures to grocery lists, divide and conquer
                  your daily tasks.
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
