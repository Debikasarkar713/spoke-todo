import React, { useState, useEffect } from "react";
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
50% { border-color: white; }
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
  display: inline-block;
  position: absolute;
  top: 60px;
  position: absolute;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h2`
  overflow: hidden;
  border-right: 0.15em solid white;
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
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListStyle = styled.li`
  display: block;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
  margin: 10px 0;
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
  display: block;
  font-size: 14px;
  word-wrap: break-all;
  // overflow: auto;
  overflow-y: scroll;
  height: 60%;
  width: 60%;
  overflow: scroll;
  padding-right: 10px;
`;
const Options = styled.span`
  display: flex;
  position: absolute;
  overflow: auto;
  justify-content: space-between;
`;
const EditDelete = styled.span`
  display: block;
  margin: 0 auto;
`;

export const ButtonStyles = styled.button`
  all: unset;
  cursor: pointer;
  margin: 0px 5px;

  :focus {
    outline: #c59faa 5px auto;
  }
`;

const CompleteSpan = styled.span``;
export default function TodoList() {
  const [clickedIndex, setClickedIndex] = useState({});
  const rows = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  useEffect(() => dispatch({ type: GET_TASKS }), [dispatch]);

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
                <ListStyleUl>
                  <ListStyle>
                    <Name>{row.title}</Name>
                    <Message>{row.message}</Message>

                    <br />
                  </ListStyle>

                  <EditDelete>
                    <ButtonStyles
                      type="button"
                      onClick={() => dispatch(setTaskSlice(row))}
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{
                          fontSize: 20,
                          color: "white",
                        }}
                      />
                    </ButtonStyles>
                    <ButtonStyles
                      onClick={() =>
                        dispatch({ type: DELETE_TASK_BY_ID, id: row.id })
                      }
                    >
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                          fontSize: 20,
                          color: "white",
                        }}
                      />
                    </ButtonStyles>
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
