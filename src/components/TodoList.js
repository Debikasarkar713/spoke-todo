import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { GET_TASKS, DELETE_TASK_BY_ID } from "../redux/types";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  border: 1px solid red;
  font-size: 12px;
`;
export default function TodoList() {
  const rows = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch({ type: GET_TASKS }), []);
  return (
    <TodoWrapper>
      <ul>
        {rows.map((row) => (
          <div key={row.id}>
            <ul>
              <li>Task Number: {row.id}</li>
              <li>Title: {row.title}</li>
              <li>Details: {row.message}</li>
            </ul>
            <input type="checkbox" />
            <button onClick={() => dispatch(setTaskSlice(row))}>EDIT</button>
            <button
              onClick={() => dispatch({ type: DELETE_TASK_BY_ID, id: row.id })}
            >
              DELETE
            </button>
          </div>
        ))}
      </ul>
    </TodoWrapper>
  );
}
