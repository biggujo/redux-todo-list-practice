import { useFetchTasksQuery } from "../redux/query/tasksQuery.js";

export const useTaskCount = () => {
  const {
    data: tasks,
    isLoading,
  } = useFetchTasksQuery();

  if (isLoading) {
    return {
      active: 0,
      completed: 0,
    };
  }

  return tasks.reduce((count, { completed }) => {
    if (completed === false) {
      count.active += 1;
    } else {
      count.completed += 1;
    }
    return count;
  }, {
    active: 0,
    completed: 0,
  });
};
