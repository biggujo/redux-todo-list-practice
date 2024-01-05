import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer, tasksReducer } from "./reducers.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
