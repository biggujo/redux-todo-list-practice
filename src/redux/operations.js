import {
  addTaskFulfilled,
  addTaskPending,
  addTaskRejected,
  deleteTaskByIdFulfilled,
  deleteTaskByIdPending,
  deleteTaskByIdRejected,
  fetchTasksFulfilled,
  fetchTasksPending,
  fetchTasksRejected,
  toggleCompletedByTaskFulfilled,
  toggleCompletedByTaskPending,
  toggleCompletedByTaskRejected,
} from "./actions.js";
import api from "../utils/api.js";

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchTasksPending());

    const tasksResponse = await api.fetchTasks();

    console.log(tasksResponse);

    dispatch(fetchTasksFulfilled(tasksResponse.data));
  } catch (e) {
    dispatch(fetchTasksRejected(e.message));
  }
};

export const toggleTask = (task) => async (dispatch) => {
  try {
    dispatch(toggleCompletedByTaskPending());

    const taskResponse = await api.toggleTaskByTask(task);

    dispatch(toggleCompletedByTaskFulfilled(taskResponse.data));
  } catch (e) {
    dispatch(toggleCompletedByTaskRejected(e.message));
  }
};

export const addTask = (text) => async (dispatch) => {
  try {
    dispatch(addTaskPending());

    const addedTaskResponse = await api.addTask(text);

    dispatch(addTaskFulfilled(addedTaskResponse.data));
  } catch (e) {
    dispatch(addTaskRejected(e.message));
  }
};

export const deleteTaskById = (id) => async (dispatch) => {
  try {
    dispatch(deleteTaskByIdPending());

    const deletedTaskResponse = await api.deleteTaskById(id);

    dispatch(deleteTaskByIdFulfilled(id));
  } catch (e) {
    dispatch(deleteTaskByIdRejected(e.message));
  }
};
