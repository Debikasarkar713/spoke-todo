import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { GET_TASKS, DELETE_TASK_BY_ID } from "../redux/types";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const TypeIn = keyframes`
from { width: 0 }
to { width: 100% }
`;
const CursorIn = keyframes`
from, to { border-color: transparent }
50% { border-color: orange; }
`;

const TodoWrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: #8c9986;
  font-size: 20px;
  color: black;
  padding: 100px;
`;
const CompleteDiv = styled.div`
  display: flex;
  max-height: 100%;
  min-width: 25%;
  overflow: hidden;
  // border: 1px solid green;
  // background-color: #eeeee4;
  // border-radius: 25px;
  // padding: 20px;
  // text-align: center;
`;

const TitleDiv = styled.div`
  position: absolute;
  top: 29px;
  display: inline-block;
  position: absolute;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h2`
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: ${TypeIn} 3.5s steps(40, end), ${CursorIn} 0.75s step-end infinite;
`;

const TaskDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  // height: 50vh;
  border-bottom: 1px solid black;
`;

const Strike = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const Strike2 = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 500px;
`;

const ListStyle = styled.li`
  display: block;
  padding: 0.75rem 1rem;
  border: solid 1px rgba(0, 0, 0, 0.25);
  margin-bottom: 0.5rem;
  border: 1px solid green;
  background-color: #eeeee4;
  border-radius: 25px;
  padding: 20px;
  text-align: center;
`;
const Name = styled.span`
  float: left;
`;
const Message = styled.span`
  float: right;
`;
const EditDelete = styled(Message)``;

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
      <TitleDiv>
        <Title>What do I need to get done?</Title>
      </TitleDiv>
      <CompleteDiv>
        <TaskDiv>
          <Strike>
            {rows.map((row, index) => (
              <div key={index} id={row.id}>
                <Strike2>
                  {/* <li>Task Number: {row.id}</li> */}
                  <ListStyle>
                    <Name>{row.title}</Name>
                    <Message>{row.message}</Message>

                    {/* </ListStyle>
                  <ListStyle> */}
                    <br />
                  </ListStyle>{" "}
                  <EditDelete>
                    <button onClick={() => dispatch(setTaskSlice(row))}>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{
                          fontSize: 15,
                          color: "black",
                        }}
                      />
                    </button>
                    <button
                      onClick={() =>
                        dispatch({ type: DELETE_TASK_BY_ID, id: row.id })
                      }
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                          fontSize: 15,
                          color: "black",
                        }}
                      />
                    </button>
                  </EditDelete>
                </Strike2>
                <div>
                  <br />
                  {/* <button onClick={() => dispatch(setTaskSlice(row))}>
                    EDIT
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: DELETE_TASK_BY_ID, id: row.id })
                    }
                  >
                    DELETE
                  </button> */}
                </div>
                {/* <div>
                  <label>
                    <input
                      onChange={handleChange}
                      onClick={handleClick(index)}
                      type="checkbox"
                    />
                  </label>
                  <p>
                    {clickedIndex[index] ? (
                      <span>done</span>
                    ) : (
                      <span>This is incomplete</span>
                    )}
                  </p>
                </div> */}
              </div>
            ))}
          </Strike>
        </TaskDiv>
      </CompleteDiv>

      <br />
    </TodoWrapper>
  );
}
