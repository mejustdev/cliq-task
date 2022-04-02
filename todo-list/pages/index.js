import {Provider} from '../context'
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import Layout from '../components/Layout';

export default function App() {
  return (
    <Provider>
      <Layout>
        <AddTodo />
        <TodoList />
      </Layout>
    </Provider>
  );
}