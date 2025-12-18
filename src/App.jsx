import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';
import './App.css';

const STORAGE_KEY = 'vibe-todos';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('all');

  // Persist todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="todo-title">Todo List</h1>
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={getFilteredTodos()}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
        {todos.length > 0 && (
          <FilterBar
            currentFilter={filter}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
            activeCount={activeCount}
          />
        )}
      </div>
    </div>
  );
}

export default App;
