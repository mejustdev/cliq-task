import {useContext} from "react";
import { TodoListContext } from "../context";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useContext( TodoListContext);
  return (
    <ul className="mt-4 sm:max-w-md lg:mt-0 space-y-6">
      {todoList.map((todoItem) => (
        <TodoItem todoItem={todoItem}/>
      ))}
    </ul>
  );
};

export default TodoList;