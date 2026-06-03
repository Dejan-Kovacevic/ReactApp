import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const initialTodos = [
  { id: 1, text: "UI final prüfen", completed: false },
  { id: 2, text: "Build ausführen", completed: true },
  { id: 3, text: "Nächste Repository-Updates planen", completed: false },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    setTodos((currentTodos) => [todo, ...currentTodos]);
  };

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-card">
      <div className="todo-summary">
        <div>
          <h3>Heute erledigen</h3>
          <p>
            {completedCount} von {todos.length} Aufgaben erledigt
          </p>
        </div>
        <span>{todos.length}</span>
      </div>
      <TodoForm onSubmit={addTodo} />
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
