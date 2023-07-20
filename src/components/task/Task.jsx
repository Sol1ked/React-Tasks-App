import React from 'react';
import Icon from "../icons/icon/icon";
import {RiDeleteBin2Line, RiPencilLine, RiSaveLine} from "react-icons/ri";
import AppInput from "../input/AppInput";
import {AiOutlinePlus} from "react-icons/ai";

const Task = (props) => {
    console.log(props)
    return (
        <div className="flex items-center text-white p-2 gap-x-2">
            <span>id.{props.index}</span>
            <Icon>
                {props.editingTaskId === props.task.id ? (<RiSaveLine
                    size={25}
                    color="#696969"
                    onClick={props.handleSaveTask}
                />) : (<RiPencilLine
                    size={25}
                    color="#696969"
                    onClick={() => props.handleEditTaskTitle(props.task.id)}
                />)}
            </Icon>
            <AppInput
                defaultValue={props.task.title}
                width="full"
                disabled={props.editingTaskId !== props.task.id}
                onChange={(e) => props.handleInputChange(e, props.task.id, 'title')}
            />
            <Icon>
                {props.editingTaskId === props.task.id ? (<AiOutlinePlus
                    size={25}
                    color="#696969"
                    onClick={() => props.handleEditTaskPrice(props.task.id)}
                />) : (<AiOutlinePlus size={25} onClick={() => props.handleEditTaskPrice(props.task.id)}/>)}
            </Icon>
            <AppInput
                defaultValue={props.task.price}
                disabled={props.editingTaskId !== props.task.id}
                onChange={(e) => props.handleInputChange(e, props.task.id, 'price')}
            />
            <Icon>
                <RiDeleteBin2Line
                    color="#B22222"
                    size={25}
                    onClick={() => props.handleRemoveTask(props.task)}
                />
            </Icon>
        </div>
    );
};

export default Task;