import { statusFilters } from "./constants.js";
import { combineReducers } from "redux";

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const filtersInitialState = {
  status: statusFilters.all,
};

const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case "tasks/deleteTaskById/pending":
      return {
        ...state,
        isLoading: true,
      };
    case "tasks/deleteTaskById/fulfilled":
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload),
      };
    case "tasks/deleteTaskById/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "tasks/addTask/pending":
      return {
        ...state,
        isLoading: true,
      };
    case "tasks/addTask/fulfilled":
      return {
        ...state,
        items: [
          ...state.items,
          action.payload,
        ],
      };
    case "tasks/addTask/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "tasks/toggleCompletedByTask/pending":
      return {
        ...state,
        isLoading: true,
      };
    case "tasks/toggleCompletedByTask/fulfilled":
      const toggledTask = action.payload;

      return {
        ...state,
        items: state.items.map((task) => {
          if (task.id === toggledTask.id) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        }),
        isLoading: false,
      };
    case "tasks/toggleCompletedByTask/rejected":
      return {
        ...state,
        error: action.payload,
      };
    case "tasks/fetchTasks/pending":
      return {
        ...state,
        isLoading: true,
      };
    case "tasks/fetchTasks/fulfilled":
      return {
        ...state,
        items: action.payload,
        isLoading: false,
      };
    case "tasks/fetchTasks/rejected":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case "tasks/addTask":
      const newTask = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          newTask,
        ],
      };
    case "tasks/deleteTask":
      const deleteId = action.payload;
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== deleteId),
      };
    case "tasks/toggleCompleted":
      const toggleId = action.payload;

      return {
        ...state,
        items: state.items.map((task) => {
          if (task.id === toggleId) {
            return {
              ...task,
              completed: !task.completed,
            };
          }

          return task;
        }),
      };
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
