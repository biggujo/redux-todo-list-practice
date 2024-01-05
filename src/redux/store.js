import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasksSlice.js";
import { filtersReducer } from "./slices/filtersSlice.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
