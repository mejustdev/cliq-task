import {useContext} from "react";
import { TodoListContext } from "../context";

import { CheckIcon, MinusCircleIcon } from '@heroicons/react/solid'

const TodoItem = ({todoItem}) => {
  const { removeTodoItem, validateTodoItem } = useContext( TodoListContext);

  return (
    <li
      className={`mt-4 h-12 p-2 flex items-center justify-between border-solid border-2 border-black rounded-xl todoItem ${todoItem.validated ? "bg-gray-300" : ""}`}
      key={todoItem.id}
      >
      {todoItem.label}
      <div className="flex justify-between space-x-2">
          <CheckIcon className="h-5 w-5 text-green-500 cursor-pointer"
        onClick={() => validateTodoItem(todoItem.id)}/>
          <MinusCircleIcon className="h-5 w-5 text-red-500 cursor-pointer"
        onClick={() => removeTodoItem(todoItem.id)}/>
      </div>
    </li>
  );
};

export default TodoItem;