import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_TASK, UPDATE_TASK_BY_ID } from "../redux/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { ButtonStyles } from "./TodoList";

const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin: 30px;
`;

const SubmitForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

const InputContainer = styled.div`
  flex-direction: row;
`;

const FormInput = styled.input`
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  background: #8c9986;
  color: white;
  border-radius: 20px;
  box-shadow: none;
  max-width: 100%;
  height: 30px;
  width: 300px;
`;

const TodoForm = () => {
  const [disable, setDisable] = useState(true);
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
    <FormWrapper>
      <SubmitForm>
        <InputContainer>
          <label>
            Title/Task Number:
            <FormInput
              onChange={handleChange("title")}
              placeholder="title"
              type="text"
              value={task.title}
              name="title"
              required
            />
          </label>
          <label>
            Task:
            <FormInput
              onChange={handleChange("message")}
              placeholder="enter here"
              type="text"
              value={task.message}
              name="message"
              required
            />
          </label>
          <ButtonStyles
            type="button"
            onClick={() => handleSubmit()}
            value="Submit"
          >
            <FontAwesomeIcon
              icon={faPlus}
              style={{
                fontSize: 20,
                color: "white",
                padding: "10px;",
              }}
            />
          </ButtonStyles>
        </InputContainer>
      </SubmitForm>
    </FormWrapper>
  );
};
export default TodoForm;
