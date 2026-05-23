import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initialTodos = [
      { id: 1, title: "React Projekt aufsetzen", completed: true },
      { id: 2, title: "Todo Features implementieren", completed: false }
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (title) => {
    const value = title.trim();
    if (!value) {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    };

    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1 className="todo-title">React Todo App</h1>
        <p className="todo-subtitle">Einfach planen, abhaken und erledigen.</p>
        <TodoForm onAddTodo={addTodo} />
        <TodoList todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
