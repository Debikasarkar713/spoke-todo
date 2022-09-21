import React, { useState } from "react";
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

const Strike = styled.ul`
  text-decoration: ${(props) => (props.checked ? "line-through" : "")};
`;

export default function TodoList() {
  const [clickedIndex, setClickedIndex] = useState({});
  const rows = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  React.useEffect(() => dispatch({ type: GET_TASKS }), []);

  const handleClick = (index) => () => {
    setClickedIndex((state) => ({
      ...state,
      [index]: !state[index],
    }));
  };
  const handleChange = () => {
    console.log("test");
  };

  return (
    <TodoWrapper>
      <CompleteDiv>
        INCOMPLETE TASKS
        <TaskDiv
        // style={{
        //   position: "relative",
        //   top: boxPosition.x,
        //   left: boxPosition.y,
        // }}
        >
          <ul>
            {rows.map((row, index) => (
              <div key={index} id={row.id}>
                <Strike>
                  {/* <li>Task Number: {row.id}</li> */}
                  <li>Title: {row.title}</li>
                  <li>Details: {row.message}</li>
                </Strike>
                {clickedIndex[index] ? <span>done</span> : ""}
                <br />
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
                    <input
                      onChange={handleChange}
                      onClick={handleClick(index)}
                      type="checkbox"
                    />
                    Complete
                  </label>
                </div>
              </div>
            ))}
          </ul>
        </TaskDiv>
      </CompleteDiv>

      <br />
    </TodoWrapper>
  );
}
