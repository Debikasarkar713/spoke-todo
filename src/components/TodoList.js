import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { GET_TASKS, DELETE_TASK_BY_ID } from "../redux/types";
import styled from "styled-components";

const TodoWrapper = styled.section`
  display: flex;
  border: 1px solid red;
  font-size: 20px;
`;
const CompleteDiv = styled.div`
  display: block;
  border: 1px solid green;
  padding: 20px;
`;

const TaskDiv = styled.div`
  display: block;
  border: 1px dotted purple;
  padding: 10px;
`;

export default function TodoList() {
  const rows = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch({ type: GET_TASKS }), []);
  return (
    <TodoWrapper>
      <CompleteDiv>
        INCOMPLETE TASKS
        <TaskDiv>
          <ul>
            {rows.map((row) => (
              <div key={row.id}>
                <ul>
                  <li>Task Number: {row.id}</li>
                  <li>Title: {row.title}</li>
                  <li>Details: {row.message}</li>
                </ul>

                <button onClick={() => dispatch(setTaskSlice(row))}>
                  EDIT
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: DELETE_TASK_BY_ID, id: row.id })
                  }
                >
                  DELETE
                </button>
                <div>
                  <label>
                    <input type="checkbox" />
                    Complete
                  </label>
                </div>
              </div>
            ))}
          </ul>
        </TaskDiv>
      </CompleteDiv>
      <CompleteDiv>COMPLETED TASKS</CompleteDiv>
      <br />
    </TodoWrapper>
  );
}
