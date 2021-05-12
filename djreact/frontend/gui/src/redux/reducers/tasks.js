import * as actionType from "../action/actionTypes";

const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };
    case actionType.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case actionType.CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};
