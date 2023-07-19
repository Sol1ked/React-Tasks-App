import React from 'react';
import AppInput from "../input/AppInput";
import Icon from "../icons/icon/icon";
import {AiOutlinePlus} from "react-icons/ai";

const TasksForm = ({error, setTask, task, addNewPost}) => {
    return (
        <div className="p-2 flex-0 w-full border-b border-b-[#2c2c2c]">
            <div className="
                         flex items-center text-white gap-x-4 p-2
                    ">
                <AppInput
                    placeholder="Введите название"
                    width="full"
                    onChange={e => setTask({...task, title: e.target.value})}
                    error={error}
                ></AppInput>
                <AppInput
                    placeholder="Введите сумму"
                    onChange={e => setTask({...task, price: e.target.value})}
                    error={error}
                />
                <Icon>
                    <AiOutlinePlus
                        onClick={addNewPost}
                        size={25}
                    ></AiOutlinePlus>
                </Icon>
            </div>
        </div>
    );
};

export default TasksForm;