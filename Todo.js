import React from "react";

function Todo({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span className={todo.completed ? "todo-text done" : "todo-text"}>
          {todo.title}
        </span>
      </label>
      <button className="todo-delete-button" onClick={() => onDeleteTodo(todo.id)} type="button">
        Löschen
      </button>
    </li>
  );
}

export default Todo;
