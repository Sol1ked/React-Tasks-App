import React from 'react';

const AppInput = ({width, error, ...props}) => {
    return (
        <input
            {...props}
            type="text"
            className={`
                rounded p-0.5 border-2 
                outline-none p-1 border-[#2c2c2c] 
                text-white w-${width}
                bg-[#1f1f22] 
                placeholder:text-[#5a5a5a]   
                focus:border-2 focus:border-white    
                ${error ? 'border-2 border-red-600 placeholder:text-red-600 focus:placeholder:text-white' : ''}    
           `}/>
    );
};

export default AppInput;