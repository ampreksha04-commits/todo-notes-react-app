import { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const { id, text, dueDate, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const saveEdit = () => {
    if (!editText.trim()) return;
    onEdit(id, editText.trim());
    setIsEditing(false);
  };

  return (
    <li className={completed ? 'item done' : 'item'}>
      <input type="checkbox" checked={completed} onChange={() => onToggle(id)} />

      <div className="item-body">
        {isEditing ? (
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
          />
        ) : (
          <>
            <span className="item-text">{text}</span>
            <small>
              {completed ? 'Completed' : 'Pending'}
              {dueDate && ` • Due ${dueDate}`}
            </small>
          </>
        )}
      </div>

      <div className="item-actions">
        {isEditing ? (
          <button className="btn small primary" onClick={saveEdit}>Save</button>
        ) : (
          <button className="btn small" onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button className="btn small danger" onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
