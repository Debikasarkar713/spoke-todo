import {
  getTasksAPI,
  getTasksByIdAPI,
  createTasksAPI,
  updateTasksAPI,
  deleteTasksAPI,
} from "../../apis/index";
import { setTaskSlice } from "../slice/task";
import {
  getTasksSlice,
  addTasksSlice,
  editTasksSlice,
  deleteTasksSlice,
} from "../slice/tasks";
import {
  GET_TASKS,
  GET_TASK_BY_ID,
  CREATE_TASK,
  UPDATE_TASK_BY_ID,
  DELETE_TASK_BY_ID,
} from "../types";
import { put, takeEvery } from "redux-saga/effects";

export function* getTasksSaga() {
  console.log("called");
  const tasks = yield getTasksAPI();
  yield put(getTasksSlice(tasks.data));
}

export function* getTaskByIdSaga(action) {
  yield getTasksByIdAPI(action.id);
  yield put(setTaskSlice(action.id));
}

export function* createTaskSaga(action) {
  yield createTasksAPI(action.task);
  yield put(addTasksSlice(action.task));
}

export function* updateTaskSaga(action) {
  console.log("edit");
  yield updateTasksAPI(action.task);
  yield put(editTasksSlice(action.task));
}

export function* deleteTaskByIdSaga(action) {
  console.log("delete saga");
  yield deleteTasksAPI(action.id);
  yield put(deleteTasksSlice(action.id));
}

export function* watchTasksAsync() {
  yield takeEvery(GET_TASKS, getTasksSaga);
  yield takeEvery(GET_TASK_BY_ID, getTaskByIdSaga);
  yield takeEvery(CREATE_TASK, createTaskSaga);
  yield takeEvery(UPDATE_TASK_BY_ID, updateTaskSaga);
  yield takeEvery(DELETE_TASK_BY_ID, deleteTaskByIdSaga);
}
