import React from 'react';
import {AiOutlinePlus} from "react-icons/ai";

const AppButton = ({children, disabled, ...props}) => {
    return (
        <button
            disabled={disabled}
            {...props}
            className="
            text-white border-2 border-[#333333]
            py-1 px-2 rounded hover:bg-[#333333] hover:duration-300 duration-300
            disabled:text-[#5a5a5a]
        ">
            {children}
        </button>
    );
};

export default AppButton;