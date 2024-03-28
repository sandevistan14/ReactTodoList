import React, { useState } from 'react';
import './addTaskBar.css';

function AddTaskBar({ addTask }) {
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        if (taskName.trim() !== '') {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <div className="add-task-container">
            <button className="add-task-button" onClick={handleAddTask}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
                </svg>
                Ajouter une tâche
            </button>
            <input
                className="add-task-input"
                placeholder="Votre nouvelle tache"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
        </div>
    );
}

export default AddTaskBar;
