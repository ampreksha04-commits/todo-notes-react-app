import { useState } from 'react';
import TodoApp from './components/TodoApp.jsx';
import NotesApp from './components/NotesApp.jsx';

const App = () => {
  const [activeApp, setActiveApp] = useState('todo');

  return (
    <div className="container">
      <h1>Productivity Hub</h1>

      <div className="tabs">
        <button
          className={activeApp === 'todo' ? 'tab active' : 'tab'}
          onClick={() => setActiveApp('todo')}
        >
          ✅ To-Do App
        </button>
        <button
          className={activeApp === 'notes' ? 'tab active' : 'tab'}
          onClick={() => setActiveApp('notes')}
        >
          📝 Notes App
        </button>
      </div>

      {/* Conditional rendering */}
      {activeApp === 'todo' ? <TodoApp /> : <NotesApp />}
    </div>
  );
};

export default App;
