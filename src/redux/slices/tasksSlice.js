import { createSlice } from "@reduxjs/toolkit";
import api from "../../utils/api.js";

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchTasks = () => async (dispatch) => {
  try {
    dispatch(fetchTasksPending());

    const response = await api.fetchTasks();

    dispatch(fetchTasksResolved(response.data));
  } catch (e) {
    dispatch(fetchTasksRejected(e.message));
  }
};

export const addTask = (text) => async (dispatch) => {
  try {
    dispatch(addTaskPending());

    const response = await api.addTask(text);

    dispatch(addTaskResolved(response.data));
  } catch (e) {
    dispatch(addTaskRejected(e.message));
  }
};

export const deleteTaskById = (id) => async (dispatch) => {
  try {
    dispatch(deleteTaskPending());

    await api.deleteTaskById(id);

    dispatch(deleteTaskResolved(id));
  } catch (e) {
    dispatch(deleteTaskRejected(e.message));
  }
};

export const toggleTaskById = (task) => async (dispatch) => {
  try {
    dispatch(toggleCompletedTaskByIdPending());

    const response = await api.toggleTaskByTask(task);

    dispatch(toggleCompletedTaskByIdResolved(response.data));
  } catch (e) {
    dispatch(toggleCompletedTaskByIdRejected(e.message));
  }
};

const loadingSetter = (state, _) => {
  state.isLoading = true;
};

const errorSetter = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    fetchTasksPending: loadingSetter,
    fetchTasksResolved: {
      reducer: (state, action) => {
        state.isLoading = false;
        state.items = action.payload.items;
      },
      prepare: (items) => ({
        payload: {
          items,
        },
      }),
    },
    fetchTasksRejected: errorSetter,
    addTaskPending: loadingSetter,
    addTaskResolved: {
      reducer: (state, action) => {
        state.items.push(action.payload.task);
      },
      prepare: (task) => ({
        payload: {
          task,
        },
      }),
    },
    addTaskRejected: errorSetter,
    deleteTaskPending: loadingSetter,
    deleteTaskResolved: {
      reducer: (state, action) => {
        const index = state.items.findIndex(({ id }) => id === action.payload.id);
        state.items.splice(index, 1);
      },
      prepare: (id) => ({
        payload: {
          id,
        },
      }),
    },
    deleteTaskRejected: errorSetter,
    toggleCompletedTaskByIdPending: loadingSetter,
    toggleCompletedTaskByIdResolved: {
      reducer: (state, action) => {
        const index = state.items.findIndex(({ id }) => id === action.payload.task.id);

        state.items[index] = action.payload.task;
      },
      prepare: (task) => ({
        payload: {
          task,
        },
      }),
    },
    toggleCompletedTaskByIdRejected: errorSetter,
  },
});

export const {
  fetchTasksPending,
  fetchTasksResolved,
  fetchTasksRejected,
  addTaskPending,
  addTaskResolved,
  addTaskRejected,
  deleteTaskPending,
  deleteTaskResolved,
  deleteTaskRejected,
  toggleCompletedTaskByIdPending,
  toggleCompletedTaskByIdResolved,
  toggleCompletedTaskByIdRejected,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
