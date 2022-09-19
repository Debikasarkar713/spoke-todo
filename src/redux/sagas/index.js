import { all } from "redux-saga/effects";
import { watchTasksAsync } from "./task";

// missing () prevented api call
export function* rootSaga() {
  yield all([watchTasksAsync()]);
}
