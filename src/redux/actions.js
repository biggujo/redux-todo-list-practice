import { nanoid } from "nanoid";

export const addTask = (givenText) => ({
  type: "tasks/addTask",
  payload: {
    id: nanoid(),
    text: givenText,
    completed: false,
  },
});

export const deleteTask = (taskId) => ({
  type: "tasks/deleteTask",
  payload: taskId,
});

export const toggleCompleted = (taskId) => ({
  type: "tasks/toggleCompleted",
  payload: taskId,
});

export const setStatusFilter = (givenStatus) => ({
  type: "filters/setStatusFilter",
  payload: givenStatus,
});
