import axios from "axios";
import * as actionType from "./actionTypes";

//GET TASKS
export const getTasks = () => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;
  config.headers["Authorization"] = `Token ${token}`;
  axios
    .get("http://127.0.0.1:8000/api/tasks/", config)
    .then((res) => {
      dispatch({
        type: actionType.GET_TASKS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteTask = (id) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;
  config.headers["Authorization"] = `Token ${token}`;
  axios
    .delete(`http://127.0.0.1:8000/api/tasks/${id}/`, config)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: actionType.DELETE_TASK,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const createTask = (task) => (dispatch, getState) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const token = getState().auth.token;
  config.headers["Authorization"] = `Token ${token}`;
  axios
    .post("http://127.0.0.1:8000/api/tasks/", task, config)
    .then((res) => {
      // console.log(res);
      dispatch({
        type: actionType.CREATE_TASK,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
