import * as actionType from "./actionTypes";
import axios from "axios";

export const loadUser = () => (dispatch) => {
  dispatch({ type: actionType.USER_LOADING });
  //get token from state
  const token = localStorage.getItem("token");
  // console.log(token);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  axios
    .get("http://127.0.0.1:8000/api/auth/user", config)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: actionType.USER_LOADED,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: actionType.AUTH_ERROR,
      });
    });
};

export const login = (username, password) => (dispatch) => {
  // console.log(username, password);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });
  // console.log(body);
  axios
    .post("http://127.0.0.1:8000/api/auth/login", body, config)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: actionType.LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionType.LOGIN_FAIL,
      });
    });
};

export const register = (username, password, email) => (dispatch) => {
  // console.log(username, password, email);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password, email });
  // console.log(body);
  axios
    .post("http://127.0.0.1:8000/api/auth/register", body, config)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: actionType.REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: actionType.REGISTER_FAIL,
      });
    });
};

export const logout = () => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const token = localStorage.getItem("token");
  config.headers["Authorization"] = `Token ${token}`;
  axios
    .post("http://127.0.0.1:8000/api/auth/logout", null, config)
    .then((res) => {
      dispatch({
        type: actionType.LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
