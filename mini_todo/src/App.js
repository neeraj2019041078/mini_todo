import React, { useState } from 'react';

const App = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTodo([...todo, inputValue]);
    setInputValue("");
  };
  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    setTodo(updatedTodo);
  };

  return (
    <>
      <form>
        <input type="text" value={inputValue} onChange={handleChange}  />
        <button onClick={handleClick}>Add</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
