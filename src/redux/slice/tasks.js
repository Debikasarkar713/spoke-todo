import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
  name: "tasks",
  initialState: [
    {
      id: "",
      title: "",
      message: "",
    },
  ],
  reducers: {
    getTasksSlice: (state, action) => {
      state = action.payload;
      return state;
    },
    addTasksSlice: (state, action) => {
      state.push(action.payload);
      return state;
    },
    editTasksSlice: (state, action) => {
      state = state.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return state;
    },
    deleteTasksSlice: (state, action) => {
      state = state.filter((i) => i.id !== action.payload);
      return state;
    },
  },
});

export const {
  getTasksSlice,
  addTasksSlice,
  editTasksSlice,
  deleteTasksSlice,
} = tasks.actions;

export default tasks.reducer;
