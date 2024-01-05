import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addTask = createAction("tasks/addTask", (text) => ({
  payload: {
    id: nanoid(),
    text,
    completed: false,
  },
}));

export const deleteTask = createAction("tasks/deleteTask", (id) => ({
  payload: {
    id,
  },
}));

export const toggleCompletedTask = createAction("tasks/toggleCompletedTask",
  (id) => ({
    payload: {
      id,
    },
  }),
);

export const setStatusFilter = createAction(
  "filters/setStatus",
  (givenStatus) => ({
    payload: {
      status: givenStatus,
    },
  }),
);
