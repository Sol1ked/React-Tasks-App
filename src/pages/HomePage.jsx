import React, {useEffect, useState} from 'react';
import TasksForm from "../components/tasksform/TasksForm";
import Tasks from "../components/tasks/Tasks";
import TasksBottom from "../components/tasksBottom/tasksBottom";

const HomePage = () => {
    const [tasks, setTasks] = useState([])
    const [error, setError] = useState(false)
    const [task, setTask] = useState({
        title: '', price: ''
    })
    const [totalPrice, setTotalPrice] = useState('')
    const [editingTaskId, setEditingTaskId] = useState(null);
    const handleEditTaskTitle = (taskId) => {
        setEditingTaskId(taskId);
    };
    const handleEditTaskPrice = (taskId) => {
        setEditingTaskId(taskId);
    };
    const handleInputChange = (event, taskId, field) => {
        const {value} = event.target;
        setTasks((prevTasks) => prevTasks.map((task) => task.id === taskId ? {...task, [field]: value} : task));
    };
    const handleSaveTask = () => {
        setEditingTaskId(null);
    };

    function totalSum() {
        let res = (tasks.map(task => Number(task.price)).reduce((prev, curr) => prev + curr, 0))
        setTotalPrice(Math.floor(res))
    }

    useEffect(() => {
        totalSum()
    }, [handleInputChange])

    const addNewPost = () => {
        const newTask = {
            ...task, id: Date.now()
        }
        if (newTask.price !== '' && newTask.title !== '') {
            setTasks([...tasks, newTask])
            setError(false)
        } else {
            setError(true)
        }
    }
    const clearTasks = () => {
        setTasks([])
    }
    const handleRemoveTask = (task) => {
        setTasks([...tasks].filter(t => t.id !== task.id))
    }

    return (
        <div className="flex w-full">
            <div className="flex w-full flex-col h-screen">
                <TasksForm
                    error={error}
                    setTask={setTask}
                    task={task}
                    addNewPost={addNewPost}
                />
                <Tasks
                    tasks={tasks}
                    handleEditTaskTitle={handleEditTaskTitle}
                    handleEditTaskPrice={handleEditTaskPrice}
                    handleSaveTask={handleSaveTask}
                    handleRemoveTask={handleRemoveTask}
                    editingTaskId={editingTaskId}
                    handleInputChange={handleInputChange}
                />
                <TasksBottom
                    totalPrice={totalPrice}
                    clearTasks={clearTasks}
                    tasks={tasks}
                />
            </div>
        </div>);
};

export default HomePage;