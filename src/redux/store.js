import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./slices/filtersSlice.js";
import { tasksApi } from "./query/tasksQuery.js";

export const store = configureStore({
  reducer: {
    // tasks: tasksReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [
      ...getDefaultMiddleware(),
      tasksApi.middleware,
    ];
  },
});
