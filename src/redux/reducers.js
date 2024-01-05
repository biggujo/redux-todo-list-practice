import { createReducer } from "@reduxjs/toolkit";
import {
  addTask, deleteTask, setStatusFilter, toggleCompletedTask,
} from "./actions.js";
import { statusFilters } from "./constants.js";

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

export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
  .addCase(addTask, (state, action) => {
    state.push(action.payload);
  })
  .addCase(deleteTask, (state, action) => {
    const idx = state.findIndex(({ id }) => id === action.payload.id);
    state.splice(idx, 1);
  })
  .addCase(toggleCompletedTask, (state, action) => {
    const idx = state.findIndex(({ id }) => id === action.payload.id);
    state[idx].completed = !state[idx].completed;
  });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder
  .addCase(setStatusFilter, (state, action) => {
    state.status = action.payload.status;
  });
});
