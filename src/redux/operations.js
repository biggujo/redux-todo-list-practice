import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api.js";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks",
  async (_, thunkAPI) => {
    try {
      const response = await api.fetchTasks();
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addTask = createAsyncThunk("tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = await api.addTask(text);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteTaskById = createAsyncThunk("tasks/deleteTaskById",
  async (id, thunkAPI) => {
    try {
      await api.deleteTaskById(id);
      return id;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const toggleTaskByTask = createAsyncThunk("tasks/toggleTaskById",
  async (task, thunkAPI) => {
    try {
      const response = await api.toggleTaskByTask(task);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  },
);
