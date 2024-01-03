import { statusFilters } from "./constants.js";
import { combineReducers } from "redux";

const tasksInitialState = [
  {
    id: 0,
    text: "Learn HTML and CSS",
    completed: true,
  },
  {
    id: 1,
    text: "Get good at JavaScript",
    completed: true,
  },
  {
    id: 2,
    text: "Master React",
    completed: false,
  },
  {
    id: 3,
    text: "Discover Redux",
    completed: false,
  },
  {
    id: 4,
    text: "Build amazing apps",
    completed: false,
  },
];

const filtersInitialState = {
  status: statusFilters.all,
};

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      const newTask = action.payload;
      return [
        ...state,
        newTask,
      ];
    case "tasks/deleteTask":
      const deleteId = action.payload;
      return state.filter(({ id }) => id !== deleteId);
    case "tasks/toggleCompleted":
      const toggleId = action.payload;
      
      return state.map((task) => {
        if (task.id === toggleId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      });
    default:
      return state;
  }
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case "filters/setStatusFilter":
      const newFilterValue = action.payload;
      return {
        ...state,
        status: newFilterValue,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});
