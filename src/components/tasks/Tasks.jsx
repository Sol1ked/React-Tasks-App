import React from 'react';
import Icon from "../icons/icon/icon";
import {RiDeleteBin2Line, RiPencilLine, RiSaveLine} from "react-icons/ri";
import AppInput from "../input/AppInput";
import {AiOutlinePlus} from "react-icons/ai";

const Tasks = ({
                   tasks,
                   editingTaskId,
                   handleSaveTask,
                   handleEditTaskTitle,
                   handleInputChange,
                   handleEditTaskPrice,
                   handleRemoveTask
               }) => {
    return (
        <div className="p-2 w-full flex-auto overflow-y-auto">
            {tasks.length ? <div>
                {tasks.map((task) => (
                    <div key={task.id} className="flex items-center text-white p-2 gap-x-2">
                        <span>id.{task.id}</span>
                        <Icon>
                            {editingTaskId === task.id ? (<RiSaveLine
                                size={25}
                                color="#696969"
                                onClick={handleSaveTask}
                            />) : (<RiPencilLine
                                size={25}
                                color="#696969"
                                onClick={() => handleEditTaskTitle(task.id)}
                            />)}
                        </Icon>
                        <AppInput
                            defaultValue={task.title}
                            width="full"
                            disabled={editingTaskId !== task.id}
                            onChange={(e) => handleInputChange(e, task.id, 'title')}
                        />
                        <Icon>
                            {editingTaskId === task.id ? (<AiOutlinePlus
                                size={25}
                                color="#696969"
                                onClick={() => handleEditTaskPrice(task.id)}
                            />) : (<AiOutlinePlus size={25} onClick={() => handleEditTaskPrice(task.id)}/>)}
                        </Icon>
                        <AppInput
                            defaultValue={task.price}
                            disabled={editingTaskId !== task.id}
                            onChange={(e) => handleInputChange(e, task.id, 'price')}
                        />
                        <Icon>
                            <RiDeleteBin2Line
                                color="#B22222"
                                size={25}
                                onClick={() => handleRemoveTask(task)}
                            />
                        </Icon>
                    </div>))}
            </div> : <h1 className="text-center text-xl text-[#5a5a5a]">Список задач пуст</h1>}
        </div>
    );
};

export default Tasks;