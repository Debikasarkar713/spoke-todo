import { all } from "redux-saga/effects";
import { watchTasksAsync } from "./task";

export function* rootSaga() {
  yield all([watchTasksAsync]);
}
