// src/App.js
import React from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';

function App() {
  return (
    <div>
      <h1>To-Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
