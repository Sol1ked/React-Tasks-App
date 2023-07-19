import React from 'react';
import AppButton from "../button/AppButton";

const TasksBottom = ({totalPrice, clearTasks, tasks}) => {
    return (
        <div className="p-2 w-full flex-0 border-t border-t-[#2c2c2c]">
            <div className="flex items-center justify-between">
                <div className="flex text-white gap-x-2">
                    <p>Итого:</p>
                    <span className="font-bold duration-300">{totalPrice} руб.</span>
                </div>
                <AppButton
                    onClick={clearTasks}
                    disabled={tasks.length ? false : true}
                >Очистить всё</AppButton>
            </div>
        </div>
    );
};

export default TasksBottom;