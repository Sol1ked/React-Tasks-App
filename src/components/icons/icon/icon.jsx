import React from 'react';

const Icon = ({children}) => {
    return (
        <div className="hover:bg-[#333333] hover:duration-300 duration-300 rounded p-2">
            {children}
        </div>
    );
};

export default Icon;