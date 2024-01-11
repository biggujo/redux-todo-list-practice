import { nanoid } from "nanoid";

export const fetchTasksPending = () => ({
  type: "tasks/fetchTasks/pending",
});

export const fetchTasksFulfilled = (tasks) => ({
  type: "tasks/fetchTasks/fulfilled",
  payload: tasks,
});

export const fetchTasksRejected = (error) => ({
  type: "tasks/fetchTasks/rejected",
  payload: error,
});

export const toggleCompletedByTaskPending = () => ({
  type: "tasks/toggleCompletedByTask/pending",
});

export const toggleCompletedByTaskFulfilled = (tasks) => ({
  type: "tasks/toggleCompletedByTask/fulfilled",
  payload: tasks,
});

export const toggleCompletedByTaskRejected = (error) => ({
  type: "tasks/toggleCompletedByTask/rejected",
  payload: error,
});

export const addTaskPending = () => ({
  type: "tasks/addTask/pending",
});

export const addTaskFulfilled = (task) => ({
  type: "tasks/addTask/fulfilled",
  payload: task,
});

export const addTaskRejected = (error) => ({
  type: "tasks/addTask/rejected",
  payload: error,
});

export const deleteTaskByIdPending = () => ({
  type: "tasks/deleteTaskById/pending",
});

export const deleteTaskByIdFulfilled = (id) => ({
  type: "tasks/deleteTaskById/fulfilled",
  payload: id,
});

export const deleteTaskByIdRejected = (error) => ({
  type: "tasks/deleteTaskById/rejected",
  payload: error,
});

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
