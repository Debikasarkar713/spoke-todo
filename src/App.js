import { Layout } from "./styles/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import store from "./store";
//Provider takes in a prop called store, where our state lives
const App = () => {
  return (
    <Layout>
      <Provider store={store}>
        <TodoForm />
        <TodoList />
      </Provider>
    </Layout>
  );
};

export default App;
