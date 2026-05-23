import React from "react";
import Todo from "./Todo";

function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  if (todos.length === 0) {
    return <p className="todo-empty">Keine Aufgaben vorhanden.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
