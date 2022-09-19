import { Layout } from "./styles/Layout";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <Layout>
      <TodoForm />
      <TodoList />
    </Layout>
  );
};

export default App;
