import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/tasks";

export const getTasksAPI = async () => axios.get("/tasks");

export const getTasksByIdAPI = async (id) => axios.get(`/tasks/${id}`);

export const createTasksAPI = async (task) => axios.post(`/tasks`, task);

export const updateTasksAPI = async (task) =>
  axios.post(`/tasks/${task.id}`, task);

export const deleteTasksAPI = async (task) => axios.delete(`/tasks/${task.id}`);
