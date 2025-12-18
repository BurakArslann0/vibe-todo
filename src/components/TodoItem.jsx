import { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    const trimmedValue = editValue.trim();
    if (trimmedValue) {
      onEdit(todo.id, trimmedValue);
      setIsEditing(false);
    } else {
      setEditValue(todo.text);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div className="todo-edit">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            className="todo-edit-input"
            autoFocus
          />
          <div className="todo-edit-actions">
            <button
              type="button"
              onClick={handleSave}
              className="btn-save"
            >
              Save
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo-checkbox"
          />
          <span
            className="todo-text"
            onDoubleClick={() => setIsEditing(true)}
          >
            {todo.text}
          </span>
          <button
            type="button"
            onClick={() => onDelete(todo.id)}
            className="btn-delete"
            aria-label="Delete todo"
          >
            ×
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;

