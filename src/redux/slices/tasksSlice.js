import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addTask, deleteTaskById, fetchTasks, toggleTaskByTask,
} from "../operations.js";

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleFulfilled = (state) => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const getActionsByType = (type) => [
  fetchTasks[type],
  addTask[type],
  deleteTaskById[type],
  toggleTaskByTask[type],
];

const handleFetchTasksFulfilled = (state, action) => {
  state.items = action.payload;
};

const handleAddTaskFulfilled = (state, action) => {
  state.items.push(action.payload);
};

const handleDeleteTaskByIdFulfilled = (state, action) => {
  const index = state.items.findIndex(({ id }) => id === action.payload);
  state.items.splice(index, 1);
};

const handleToggleTaskByTaskFulfilled = (state, action) => {
  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items[index].completed = !state.items[index].completed;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchTasks.fulfilled, handleFetchTasksFulfilled)
    .addCase(addTask.fulfilled, handleAddTaskFulfilled)
    .addCase(deleteTaskById.fulfilled, handleDeleteTaskByIdFulfilled)
    .addCase(toggleTaskByTask.fulfilled, handleToggleTaskByTaskFulfilled)
    .addMatcher(isAnyOf(...getActionsByType('pending')), handlePending)
    .addMatcher(isAnyOf(...getActionsByType('fulfilled')), handleFulfilled)
    .addMatcher(isAnyOf(...getActionsByType('rejected')), handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
