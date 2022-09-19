import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CREATE_TASK, UPDATE_TASK_BY_ID } from "../redux/sagas/types";
import { setTaskSlice } from "../redux/slice/task";
import { editTasksSlice, addTasksSlice } from "../redux/slice/tasks";

const TodoForm = () => {
  const task = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const handleChange = (prop) => (e) => {
    dispatch(setTaskSlice({ ...task, [prop]: e.target.value }));
  };
  const handleSubmit = () => {
    task.id === 0
      ? dispatch({ type: CREATE_TASK, task: { ...task, id: nanoid(8) } })
      : dispatch({ type: UPDATE_TASK_BY_ID, task });
    dispatch(
      setTaskSlice({
        id: 0,
        title: "",
        message: "",
      })
    );
  };
  return (
    <form>
      <label>
        Task Number:
        <input type="text" value={task.id} />
      </label>
      <label>
        Title:
        <input
          onChange={handleChange("title")}
          placeholder="title"
          type="text"
          value={task.title}
          name="title"
        />
      </label>
      <label>
        Task:
        <input
          onChange={handleChange("message")}
          placeholder="enter here"
          type="text"
          value={task.message}
          name="message"
        />
      </label>
      <input type="button" onClick={() => handleSubmit()} value="Submit" />
    </form>
  );
};
export default TodoForm;
