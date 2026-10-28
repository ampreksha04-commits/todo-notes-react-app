import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import NoteForm from './NoteForm.jsx';
import NoteCard from './NoteCard.jsx';

const NotesApp = () => {
  const [notes, setNotes] = useLocalStorage('notes', []);
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState(null);

  const saveNote = ({ title, content, category }) => {
    const time = new Date().toLocaleString();

    if (editingId) {
      setNotes(
        notes.map((note) =>
          note.id === editingId ? { ...note, title, content, category, updatedAt: time } : note
        )
      );
      setEditingId(null);
    } else {
      const newNote = { id: Date.now(), title, content, category, updatedAt: time };
      setNotes([newNote, ...notes]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const noteBeingEdited = notes.find((note) => note.id === editingId);

  const visibleNotes = notes.filter(({ title, content }) =>
    `${title} ${content}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="card">
      <h2>{editingId ? 'Edit note' : 'New note'}</h2>
      <NoteForm
        key={editingId || 'new'}
        initialNote={noteBeingEdited}
        onSave={saveNote}
        onCancel={() => setEditingId(null)}
      />

      <input
        className="search"
        type="search"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {visibleNotes.length === 0 ? (
        <p className="empty">
          {notes.length === 0 ? 'No notes yet. Write your first note above!' : 'No notes match your search.'}
        </p>
      ) : (
        <div className="notes-grid">
          {visibleNotes.map((note) => (
            <NoteCard key={note.id} note={note} onEdit={setEditingId} onDelete={deleteNote} />
          ))}
        </div>
      )}
    </section>
  );
};

export default NotesApp;
