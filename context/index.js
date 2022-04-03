import { useReducer, createContext } from "react";
import { todo } from "./reducers/todo";
import {ADD_TODO_ITEM,REMOVE_TODO_ITEM,VALIDATE_TODO_ITEM} from './reducers/constants';

const initialState = {
  todoList: [],
};

const TodoListContext = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(todo, initialState);
  const value = {
    todoList: state.todoList,
    addTodoItem: (todoItemLabel) => {
      dispatch({ type: ADD_TODO_ITEM, todoItemLabel });
    },
    removeTodoItem: (todoItemId) => {
      dispatch({ type: REMOVE_TODO_ITEM, todoItemId });
    },
    validateTodoItem: (todoItemId) => {
      dispatch({ type: VALIDATE_TODO_ITEM, todoItemId });
    }
  };
  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
};

export { TodoListContext, Provider };