import React from "react";

const Todo = ({ todo, onToggle, onRemove }) => {
  return (
    <li className={todo.completed ? "todo-item todo-item-complete" : "todo-item"}>
      <button
        className="todo-check"
        type="button"
        aria-label={todo.completed ? "Aufgabe als offen markieren" : "Aufgabe erledigen"}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed ? "✓" : ""}
      </button>
      <p>{todo.text}</p>
      <button
        className="todo-remove"
        type="button"
        aria-label="Aufgabe entfernen"
        onClick={() => onRemove(todo.id)}
      >
        ×
      </button>
    </li>
  );
};

export default Todo;
