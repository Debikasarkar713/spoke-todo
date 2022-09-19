import { createSlice } from "@reduxjs/toolkit";

const task = createSlice({
  name: "task",
  initialState: {
    id: 0,
    title: "",
    message: "",
  },
  reducers: {
    setTaskSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setTaskSlice } = task.actions;
export default task.reducer;
