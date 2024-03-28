
import React, {useRef, useState} from 'react';
import './task.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

/**
 * Task component
 * @param props
 * @returns {Element}
 * @constructor
 */
function Task(props) {

    //********************************************************
    //**                       Const                        **
    //********************************************************

    /**
     * Task name
     */
    const [taskName, setTaskName] = useState(props.taskname);

    /**
     * Show calendar
     */
    const [showCalendar, setShowCalendar] = useState(false);

    /**
     * Is editing
     */
    const [isEditing, setIsEditing] = useState(false);

    /**
     * Task Date
     */
    const [taskDate, setTaskDate] = useState(new Date());

    //********************************************************
    //**                       Functions                    **
    //********************************************************

    /**
     * Edit the task
     */
    const handleEdit = () => {
        setIsEditing(true);
    };

    /**
     * Handle input change
     * @param e
     */
    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    /**
     * Handle key press
     * @param e
     */
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
            props.editTask(props.id, taskName);
        }
    };

    /**
     * Delete the task
     */
    const deleteTask = () => {
        props.deleteTask(props.id);
    }

    /**
     * Handle date change
     */
    const handleDateChange = (date) => {
        setTaskDate(date);
    }

    //********************************************************
    //**                       Return                       **
    //********************************************************
    return (
        <div className="Task"> {/* Ajout de la classe Task */}
            <input type="checkbox"/>
            {isEditing ? (
                <input type="text" value={taskName} onChange={handleInputChange} onKeyPress={handleKeyPress} autoFocus/>
            ) : (<span className="Task__name">{props.taskname}</span>)}
            &nbsp;| &nbsp; &nbsp;A faire le : {taskDate.getDate()}/{taskDate.getMonth() + 1}/{taskDate.getFullYear()}
            <button onClick={handleEdit} className="Task__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
            </button>
            <button onClick={deleteTask} className="Task__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg>
            </button>
            <button onClick={() => setShowCalendar(!showCalendar)} className="Task__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-calendar-event" viewBox="0 0 16 16">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/>
                    <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                </svg>
            </button>
            {showCalendar && <Calendar onChange={handleDateChange} onKeyPress={handleKeyPress} value={taskDate}/>}
        </div>
    );
}

export default Task;