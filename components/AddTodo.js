import {useState,useContext} from "react";
import { TodoListContext} from "../context";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const { addTodoItem } = useContext(TodoListContext);

  const onSubmit = (event) => {
    event.preventDefault();
    try {
      addTodoItem(inputValue);
      setInputValue("");
    } catch (e) {
      console.log(`${e.message}`);
    }
  }

  return (
    <form className="sm:flex sm:max-w-md" onSubmit={onSubmit}>
      <input
        type="text"
        required
        value={inputValue}
        placeholder={"Type and add task"}
        onChange={(e) => setInputValue(e.target.value)}
        className=" min-w-0 w-full bg-white border rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400 sm:max-w-xs"
      />
      <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className="w-full bg-indigo-500 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTodo;