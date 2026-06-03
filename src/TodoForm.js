import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input.trim(),
      completed: false,
    });

    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="todo-input">
        Neue Aufgabe
      </label>
      <input
        id="todo-input"
        type="text"
        placeholder="Neue Aufgabe hinzufügen"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      />
      <button className="todo-button" type="submit">
        Hinzufügen
      </button>
    </form>
  );
}

export default TodoForm;
