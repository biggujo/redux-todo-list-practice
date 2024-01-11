import axios from "axios";

axios.defaults.baseURL = "http://localhost:7655";

const fetchTasks = async () => {
  const response = await axios.get("/tasks");
  return response;
};

const toggleTaskByTask = async (task) => {
  const response = await axios.patch(`/tasks/${task.id}`, {
    ...task,
    completed: !task.completed,
  });

  return response;
};

const addTask = async (text) => {
  const response = await axios.post("/tasks", {
    text,
    completed: false,
  });

  return response;
};

const deleteTaskById = async (id) => {
  const response = await axios.delete(`/tasks/${id}`);

  return response;
};

export default {
  fetchTasks,
  toggleTaskByTask,
  addTask,
  deleteTaskById,
};
