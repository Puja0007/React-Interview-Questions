// Presentation Component
import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
