import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_TASK, UPDATE_TASK_BY_ID } from "../redux/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { ButtonStyles } from "./TodoList";
import media from "../styles/media";

const FormWrapper = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  height: 100%;
  bottom: 10px;
  margin: 20px 0;

  ${media.mobileSmall`
    bottom: 90px;
  `}
`;

const SubmitForm = styled.form`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

const InputContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  height: 22px;
  outline: none;
  margin: 0;
  box-sizing: border-box;
`;

const InputLabel = styled.label`
  display: block;
  text-align: center;
  font-size: 20px;
`;

const FormInput = styled.input`
  background: #8c9986;
  color: white;
  border-radius: 10px;
  box-shadow: none;
  padding: 10px 80px;
  text-align: center;
  margin-bottom: 10px;

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
  ::placeholder {
    text-align: center;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

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
    <FormWrapper>
      <SubmitForm>
        <InputContainer>
          <InputLabel>
            Title/Task Number
            <FormInput
              onChange={handleChange("title")}
              placeholder="ex. Monday or 1,2."
              type="text"
              value={task.title}
              name="title"
              required
            />
          </InputLabel>
          <InputLabel>
            Task
            <FormInput
              onChange={handleChange("message")}
              placeholder="Get this done"
              type="text"
              value={task.message}
              name="message"
              required
            />
          </InputLabel>
          <ButtonDiv>
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
                  padding: "10px",
                }}
              />
            </ButtonStyles>
          </ButtonDiv>
        </InputContainer>
      </SubmitForm>
    </FormWrapper>
  );
};
export default TodoForm;
