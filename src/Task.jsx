// src/components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './taskSlice';

function Task({ task }) {
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEditTask = () => {
    const newDescription = prompt('Edit task', task.description);
    if (newDescription) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {task.description}
      </span>
      <button onClick={handleEditTask}>Edit</button>
    </div>
  );
}

export default Task;