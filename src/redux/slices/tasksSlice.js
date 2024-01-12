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

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  extraReducers: (builder) => {
    // Fetch tasks
    builder
    .addCase(fetchTasks.pending, handlePending)
    .addCase(fetchTasks.rejected, handleRejected)
    .addCase(fetchTasks.fulfilled, (state, action) => {
      state.items = action.payload;
    })
    // Add task
    .addCase(addTask.pending, handlePending)
    .addCase(addTask.rejected, handleRejected)
    .addCase(addTask.fulfilled, (state, action) => {
      state.items.push(action.payload);
    })
    // Delete task
    .addCase(deleteTaskById.pending, handlePending)
    .addCase(deleteTaskById.rejected, handleRejected)
    .addCase(deleteTaskById.fulfilled, (state, action) => {
      const index = state.items.findIndex(({ id }) => id === action.payload);
      state.items.splice(index, 1);
    })
    // Toggle task
    .addCase(toggleTaskByTask.pending, handlePending)
    .addCase(toggleTaskByTask.rejected, handleRejected)
    .addCase(toggleTaskByTask.fulfilled, (state, action) => {
      const index = state.items.findIndex(({ id }) => id === action.payload.id);
      state.items[index].completed = !state.items[index].completed;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
