import { createSlice } from "@reduxjs/toolkit";
//using toolkit
// 1. create slice of State(name, initial state, reducers)
// 2. work out what action.payload will look like (here and in tasks.js)
// 3. export actions, reducer and selector
// 4. add slice to store.js (imported in)
// 5. Import selector & actions where needed to access state + call actions
// 6. Dispatch actions with useDispatch
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
