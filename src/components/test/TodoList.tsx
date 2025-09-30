"use client";

import React, { useState } from "react";

interface ITodo {
  id: string;
  todo: string;
}

const TodoList = () => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAddTodo = () => {
    const newTodo = input.trim();
    if (!newTodo) return;

    const values = todoList.map((item) => item.todo.toLowerCase());
    if (values.includes(newTodo.toLowerCase())) {
      setError(`${newTodo} already exists...`);
      return;
    }

    setTodoList((prev) => [...prev, { id: String(Date.now()), todo: input }]);
    setInput("");
    setError("");
  };

  const handleDelete = (id: string) => {
    setTodoList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className='text-black'>
      <input
        type='text'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError("");
        }}
      />
      <button type='button' onClick={handleAddTodo} disabled={!input.trim()}>
        Add todo
      </button>
      <ul>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.todo}
              <span className='ml-5' onClick={() => handleDelete(item.id)}>
                Delete
              </span>
            </li>
          );
        })}
      </ul>
      <p className='text-red-500'>{error}</p>
    </div>
  );
};

export default TodoList;
