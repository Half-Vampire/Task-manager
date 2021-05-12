import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Task from "./Components/Task";
import Register from "./Components/Register";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivateRoute from "./Components/PrivateRoute";
import { loadUser } from "./redux/action/auth";

export default class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Register />
            </Route>
            <PrivateRoute exact path="/tasks" component={Task} />
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
