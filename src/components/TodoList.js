import React, { useState } from "react";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { GET_TASKS, DELETE_TASK_BY_ID } from "../redux/types";
import styled from "styled-components";

const TodoWrapper = styled.section`
  display: flex;
  border: 1px solid red;
  font-size: 20px;
  justify-content: center;
`;
const CompleteDiv = styled.div`
  width: 100%;
  border: 1px solid green;
  padding: 20px;
`;

const TaskDiv = styled.div`
  display: block;
  justify-content: center;
  width: 50%;
  border: 1px dotted purple;
  padding: 10px;
`;

export default function TodoList() {
  const [checked, setChecked] = useState(false);
  const [boxPosition, setBoxPosition] = useState({ x: 100, y: 0 });
  const rows = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch({ type: GET_TASKS }), []);
  return (
    <TodoWrapper>
      <CompleteDiv>
        INCOMPLETE TASKS
        <TaskDiv
          style={{
            position: "relative",
            top: boxPosition.x,
            left: boxPosition.y,
          }}
        >
          <ul>
            {rows.map((row) => (
              <div key={row.id}>
                <ul>
                  {/* <li>Task Number: {row.id}</li> */}
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
      <CompleteDiv>
        COMPLETED TASKS
        <TaskDiv>insert here</TaskDiv>
      </CompleteDiv>
      <br />
    </TodoWrapper>
  );
}
