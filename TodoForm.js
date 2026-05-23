import React, { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Neue Aufgabe eingeben"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button className="todo-add-button" type="submit">
        Hinzufügen
      </button>
    </form>
  );
}

export default TodoForm;
