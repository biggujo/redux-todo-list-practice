import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

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

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },
    deleteTask: {
      reducer(state, action) {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        state.splice(index, 1);
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
    toggleCompletedTask: {
      reducer(state, action) {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        state[index].completed = !state[index].completed;
      },
      prepare(id) {
        return {
          payload: {
            id,
          },
        };
      },
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleCompletedTask,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
