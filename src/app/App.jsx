import React, {createRef, useEffect, useState} from 'react';
import AddTaskBar from './taskbar/addTaskBar.jsx';
import Task from "./task/task.jsx";

/**
 * App component
 * @returns {Element}
 * @constructor
 */
function App() {

    //********************************************************
    //**                       Const                        **
    //********************************************************

    /**
     * List of tasks
     * @type {React.SetStateAction<{taskname: string, finished: boolean}[]>}
     */
    const [tasks, setTasks] = useState([]);


    /**
     * Input ref
     * @type {React.RefObject<unknown>}
     */
    const input = createRef()

    //********************************************************
    //**                       Functions                    **
    //********************************************************

    /**
     * Add a task to the list
     * @param taskname
     */
    const addTask = (taskname) => {
        const newTask = {taskname: taskname, finished: false, date: new Date(),}
        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    };

    /**
     * Delete a task from the list
     * @param index
     */
    const deleteTask = (index) => {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
        localStorage.setItem('tasks', JSON.stringify(updateTasks));

    };

    /**
     * Edit a task from the list
     * @param index
     * @param newTaskName
     */
    const editTask = (index, newTaskName) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, taskname: newTaskName };
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    //********************************************************
    //**                       UseEffect                    **
    //********************************************************
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            const parsedTasks = JSON.parse(savedTasks);
            parsedTasks.forEach(task => {
                task.date = new Date(task.date);
            });
            setTasks(parsedTasks);
        }}, []);

    //********************************************************
    //**                       Return                       **
    //********************************************************
    return (
        <div className="App"> {/* Ajout de la classe App */}
            <h1>TodoList</h1>
            <AddTaskBar addTask={addTask}/>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    id={index}
                    status={task.finished}
                    taskname={task.taskname}
                    deleteTask={() => deleteTask(index)}
                    editTask={(index, newTaskName) => editTask(index, newTaskName)}
                />
            ))}
        </div>
    );
}

export default App;