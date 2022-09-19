import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";
//Provider takes in a prop called store, where our state lives
const App = () => {
  return (
    <>
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </>
  );
};

export default App;
