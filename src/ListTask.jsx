// src/components/ListTask.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
  const tasks = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('not')}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;