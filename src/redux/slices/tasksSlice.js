import { createSlice } from "@reduxjs/toolkit";
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

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFetchTasksFulfilled = (state, action) => {
  state.isLoading = false;

  state.items = action.payload;

  state.error = null;
};

const handleAddTaskFulfilled = (state, action) => {
  state.isLoading = false;

  state.items.push(action.payload);

  state.error = null;
};

const handleDeleteTaskByIdFulfilled = (state, action) => {
  state.isLoading = false;

  const index = state.items.findIndex(({ id }) => id === action.payload);
  state.items.splice(index, 1);

  state.error = null;
};

const handleToggleTaskByTaskFulfilled = (state, action) => {
  state.isLoading = false;

  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items[index].completed = !state.items[index].completed;

  state.error = null;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  extraReducers: (builder) => {
    // Fetch tasks
    builder
    .addCase(fetchTasks.pending, handlePending)
    .addCase(fetchTasks.rejected, handleRejected)
    .addCase(fetchTasks.fulfilled, handleFetchTasksFulfilled)
    // Add task
    .addCase(addTask.pending, handlePending)
    .addCase(addTask.rejected, handleRejected)
    .addCase(addTask.fulfilled, handleAddTaskFulfilled)
    // Delete task
    .addCase(deleteTaskById.pending, handlePending)
    .addCase(deleteTaskById.rejected, handleRejected)
    .addCase(deleteTaskById.fulfilled, handleDeleteTaskByIdFulfilled)
    // Toggle task
    .addCase(toggleTaskByTask.pending, handlePending)
    .addCase(toggleTaskByTask.rejected, handleRejected)
    .addCase(toggleTaskByTask.fulfilled, handleToggleTaskByTaskFulfilled);
  },
});

export const tasksReducer = tasksSlice.reducer;
