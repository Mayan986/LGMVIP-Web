import React from "react";
import { FaTrash } from "react-icons/fa";

const TodosList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <>
      {todos.completed ? (
        <li className="bg-gray-500 flex justify-between items-center p-2 m-2 capitalize">
          <div className="flex justify-between text-xl">
            <input
              type="checkbox"
              className="mr-2"
              checked="checked"
              onChange={() => toggleComplete(todos)}
            />
            <p
              onClick={() => toggleComplete(todos)}
              className="text-white line-through"
            >
              {todos.text}
            </p>
          </div>
          <button onClick={() => deleteTodo(todos.id)}>{<FaTrash />}</button>
        </li>
      ) : (
        <li className="bg-gray-300 flex justify-between items-center p-2 m-2 capitalize">
          <div className="flex justify-between text-xl">
            <input
              type="checkbox"
              className="mr-2"
              checked=""
              onChange={() => toggleComplete(todos)}
            />
            <p className="text-white" onClick={() => toggleComplete(todos)}>
              {todos.text}
            </p>
          </div>
          <button onClick={() => deleteTodo(todos.id)}>{<FaTrash />}</button>
        </li>
      )}
    </>
  );
};

export default TodosList;
