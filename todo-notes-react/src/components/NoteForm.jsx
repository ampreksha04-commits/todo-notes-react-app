import { useState } from 'react';

const categories = ['Personal', 'Work', 'Study', 'Other'];

const NoteForm = ({ initialNote, onSave, onCancel }) => {
  const [title, setTitle] = useState(initialNote?.title ?? '');
  const [content, setContent] = useState(initialNote?.content ?? '');
  const [category, setCategory] = useState(initialNote?.category ?? 'Personal');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() && !content.trim()) return;
    onSave({ title: title.trim() || 'Untitled', content: content.trim(), category });
    setTitle('');
    setContent('');
    setCategory('Personal');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="form-row">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((name) => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
        <button type="submit" className="btn primary">
          {initialNote ? 'Update note' : 'Save note'}
        </button>
        {initialNote && (
          <button type="button" className="btn" onClick={onCancel}>Cancel</button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
