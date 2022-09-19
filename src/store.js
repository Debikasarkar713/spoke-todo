import { configureStore } from "@reduxjs/toolkit";
import task from "./redux/slice/task";
import tasks from "./redux/slice/tasks";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./redux/sagas";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    task,
    tasks,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);
export default store;
