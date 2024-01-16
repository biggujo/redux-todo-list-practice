import { statusFilters } from "./constants.js";
import { createSelector } from "@reduxjs/toolkit";

export const selectTasksItems = (state) => state.tasks.items;

export const selectTasksIsLoading = (state) => state.tasks.isLoading;

export const selectTasksError = (state) => state.tasks.error;

export const selectStatus = (state) => state.filters.status;

export const selectVisibleTasks = createSelector([
  selectTasksItems,
  selectStatus,
], (tasks, status) => {
  console.log("selectVisibleTasks");
  switch (status) {
    case statusFilters.all:
      return tasks;
    case statusFilters.active:
      return tasks.filter(({ completed }) => completed === false);
    case statusFilters.completed:
      return tasks.filter(({ completed }) => completed === true);
  }
});

export const selectTaskCount = createSelector([selectTasksItems], (tasks) => {
  console.log("selectTaskCount");
  return tasks.reduce((count, task) => {
    if (task.completed === true) {
      count.completed += 1;
      return count;
    } else {
      count.active += 1;
      return count;
    }
  }, {
    active: 0,
    completed: 0,
  });
});
