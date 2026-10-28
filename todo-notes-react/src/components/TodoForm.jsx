import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim(), dueDate);
    setText('');
    setDueDate('');
  };

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit" className="btn primary">Add task</button>
    </form>
  );
};

export default TodoForm;
