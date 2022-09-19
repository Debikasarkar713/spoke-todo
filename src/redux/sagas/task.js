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
} from "./types";
import { put, takeEvery } from "redux-saga/effects";

export function* getTasksSaga() {
  const tasks = yield getTasksAPI();
  yield put(getTasksSlice(tasks));
}

export function* getTaskByIdSaga(id) {
  yield getTasksByIdAPI(id);
  yield put(setTaskSlice(id));
}

export function* createTaskSaga(task) {
  yield createTasksAPI(task);
  yield put(addTasksSlice(task));
}

export function* updateTaskSaga(task) {
  yield updateTasksAPI(task);
  yield put(editTasksSlice(task));
}

export function* deleteTaskByIdSaga(id) {
  yield deleteTasksAPI(id);
  yield put(deleteTasksSlice(id));
}

export function* watchTasksAsync() {
  yield takeEvery(GET_TASKS, getTasksSaga());
  yield takeEvery(GET_TASK_BY_ID, getTaskByIdSaga());
  yield takeEvery(CREATE_TASK, createTaskSaga());
  yield takeEvery(UPDATE_TASK_BY_ID, updateTaskSaga());
  yield takeEvery(DELETE_TASK_BY_ID, deleteTaskByIdSaga());
}
