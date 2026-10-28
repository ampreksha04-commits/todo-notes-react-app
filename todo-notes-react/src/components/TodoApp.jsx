import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import TodoForm from './TodoForm.jsx';
import TodoFilter from './TodoFilter.jsx';
import TodoItem from './TodoItem.jsx';

const TodoApp = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('All');

  const addTodo = (text, dueDate) => {
    const newTodo = { id: Date.now(), text, dueDate, completed: false };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const editTodo = (id, newText) =>
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));

  const visibleTodos = todos.filter(({ completed }) => {
    if (filter === 'Completed') return completed;
    if (filter === 'Pending') return !completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <section className="card">
      <h2>My Tasks</h2>
      <TodoForm onAdd={addTodo} />
      <TodoFilter current={filter} onChange={setFilter} />
      <p className="summary">
        {completedCount} of {todos.length} tasks completed
      </p>

      {visibleTodos.length === 0 ? (
        <p className="empty">No tasks to show. Add one above!</p>
      ) : (
        <ul className="list">
          {visibleTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TodoApp;
