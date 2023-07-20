import React from 'react';
import Task from "../task/Task";

const Tasks = (props) => {
    return (
        <div className="p-2 w-full flex-auto overflow-y-auto">
            {props.tasks.length ? <div>
                {props.tasks.map((task, index) => (
                    <Task
                        key={task.id}
                        task={task}
                        index={index + 1}
                        handleEditTaskTitle={props.handleEditTaskTitle}
                        handleEditTaskPrice={props.handleEditTaskPrice}
                        handleSaveTask={props.handleSaveTask}
                        handleRemoveTask={props.handleRemoveTask}
                        editingTaskId={props.editingTaskId}
                        handleInputChange={props.handleInputChange}
                    />
                ))}
            </div> : <h1 className="text-center text-xl text-[#5a5a5a]">Список задач пуст</h1>}
        </div>
    );
};

export default Tasks;