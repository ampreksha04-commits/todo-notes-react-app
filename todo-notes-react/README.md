# To-Do App + Notes App (React)

Week 04 Minor Project (Minor Project 04) – built with React.js and Vite.

## Project Overview
One React project that contains two apps, switched using tabs:
1. **To-Do App** – manage daily tasks.
2. **Notes App** – create and manage notes.

Both apps are responsive and save data in the browser using Local Storage.

## Features Implemented
**To-Do App**
- Add, edit, delete tasks
- Mark tasks as completed (status shows Completed / Pending)
- Filter tasks: All, Pending, Completed *(bonus)*
- Due dates *(bonus)*
- Local Storage *(bonus)*

**Notes App**
- Create, edit, delete notes
- Notes shown in a responsive grid
- Search notes *(bonus)*
- Categories: Personal, Work, Study, Other *(bonus)*
- Timestamps *(bonus)*
- Local Storage *(bonus)*

## Technologies Used
- React.js 18 (functional components, JSX, props, `useState`, `useEffect`)
- Custom hook (`useLocalStorage`)
- JavaScript ES6+ (arrow functions, destructuring, spread operator, template literals, `map`, `filter`, `find`)
- CSS3 (flexbox, grid, media queries)
- Vite, Git & GitHub

## Folder Structure
```
src/
  assets/
  components/
    TodoApp.jsx  TodoForm.jsx  TodoFilter.jsx  TodoItem.jsx
    NotesApp.jsx NoteForm.jsx  NoteCard.jsx
  hooks/useLocalStorage.js
  styles/app.css
  App.jsx
  main.jsx
```

## Setup Instructions
1. Install [Node.js](https://nodejs.org/) (v18 or newer)
2. Clone the repo and open the folder in VS Code
3. Install packages:
   ```
   npm install
   ```
4. Start the app:
   ```
   npm run dev
   ```
5. Open the link shown in the terminal (usually http://localhost:5173)

To create a production build: `npm run build`

## Screenshots
*(Add your screenshots here)*
