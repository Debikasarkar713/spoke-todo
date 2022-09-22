import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { GET_TASKS, DELETE_TASK_BY_ID } from "../redux/types";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";

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
  max-width: 500px;
  width: 50vw;
  margin: 0 auto;
  padding: 50px;
  background-color: #8c9986;
  font-size: 20px;
  color: black;
`;
const CompleteDiv = styled.div`
  display: flex;
  width: 100vw;
  max-height: 100%;
  min-width: 25%;
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
  width: 100%;
`;

const Strike = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;
const ListStyleUl = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const ListStyle = styled.li`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  margin: 0 auto;
  padding: 10px 5px;
  background-color: #eeeee4;
  border-radius: 10px;
  text-align: center;
`;
const Name = styled.span`
  float: left;
`;
const Message = styled.span`
  float: right;
`;
const EditDelete = styled.span`
  florat: right;
`;
const CompleteSpan = styled.span``;
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
                {/* <Draggable> */}
                <ListStyleUl>
                  {/* <li>Task Number: {row.id}</li> */}
                  <ListStyle>
                    <Name>{row.title}</Name>
                    <Message>{row.message}</Message>

                    {/* </ListStyle>
                  <ListStyle> */}
                    <br />
                  </ListStyle>{" "}
                  <EditDelete>
                    <button
                      type="button"
                      onClick={() => dispatch(setTaskSlice(row))}
                    >
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
                  <EditDelete>
                    <label>
                      <input
                        onChange={handleChange}
                        onClick={handleClick(index)}
                        type="checkbox"
                      />
                    </label>

                    {clickedIndex[index] ? (
                      <CompleteSpan>
                        Congratulations, this is complete!
                      </CompleteSpan>
                    ) : (
                      <span>This is incomplete</span>
                    )}
                  </EditDelete>
                </ListStyleUl>
              </div>
            ))}
          </Strike>
        </TaskDiv>
      </CompleteDiv>

      <br />
    </TodoWrapper>
  );
}
