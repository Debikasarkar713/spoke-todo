import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTaskSlice } from "../redux/slice/task";
import { GET_TASKS, DELETE_TASK_BY_ID } from "../redux/types";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import media from "../styles/media";

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
  height: 100%;
  max-width: 600px;
  width: 50vw;
  margin: 0 auto;
  padding: 50px;
  background-color: #8c9986;
  font-size: 10px;
  color: black;

  ${media.tablet`
    font-size: 14px;
  `}
  ${media.desktop`
    font-size: 18px;
  `}
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
  text-align: center;
  justify-content: center;
  top: 10px;
  font-size: 10px;

  ${media.tablet`
    font-size: 14px;
  `}
  ${media.desktop`
    font-size: 18px;
    top: 50px
  `}

  @media (max-height: 650px) {
    display: none;
  }
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
  list-style: none; ;
`;

const ListStyle = styled.li`
  display: block;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-height: 50px;
  margin: 10px 0;
  background-color: #eeeee4;
  border-radius: 10px;
  text-align: center;

  ${media.tablet`
    height: 50px;
    padding-top: 25px;
  `}
`;

const Name = styled.span`
  font-size: 12px;
  text-decoration: underline;

  ${media.tablet`
    position: absolute;
    left: 22px;
    float: none;
    font-size: 20px;
    text-decoration: none;
    vertical-align: middle;
  `}
`;

const Message = styled.span`
  display: block;
  font-size: 12px;
  text-align: center;
  word-wrap: break-all;
  overflow-y: scroll;
  height: 20px;
  margin-top: 2px;

  ${media.tablet`
    float: right;
    height: 80%;
    width: 60%;
    margin-top: auto;
    padding-right: 10px;
    vertical-align: middle;
    font-size: 20px;
    
  `}
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EditDelete = styled.span``;
const CompleteWrap = styled.span``;

export const ButtonStyles = styled.button`
  all: unset;
  cursor: pointer;
  margin: 0px 5px;

  :focus {
    outline: #c59faa 5px auto;
  }
`;

const CompleteSpan = styled.span`
  color: white;
`;

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
                  <ButtonWrap>
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
                    <CompleteWrap>
                      {clickedIndex[index] ? (
                        <CompleteSpan>
                          Congratulations,this is complete!
                        </CompleteSpan>
                      ) : (
                        <span>Incomplete</span>
                      )}
                      <label>
                        <input onClick={handleClick(index)} type="checkbox" />
                      </label>
                    </CompleteWrap>
                  </ButtonWrap>
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
