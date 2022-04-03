import {ADD_TODO_ITEM,REMOVE_TODO_ITEM,VALIDATE_TODO_ITEM} from './constants';

export function todo (state, action) {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return {
        todoList: [
          {
            id: new Date().valueOf(),
            label: action.todoItemLabel,
            validated: false
          },
          ...state.todoList,
        ]
      };
    case REMOVE_TODO_ITEM: {
      const filteredTodoItem = state.todoList.filter(
        (todoItem) => todoItem.id !== action.todoItemId
      );
      return { todoList: filteredTodoItem };
    }
    case VALIDATE_TODO_ITEM: {
      const validateTodoList = state.todoList.map((todoItem) =>
        todoItem.id === action.todoItemId
          ? { ...todoItem, validated: !todoItem.validated }
          : todoItem
      );
      return { todoList: validateTodoList };
    }
    default:
      return state;
  }
};