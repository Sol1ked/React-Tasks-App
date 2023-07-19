import React from 'react';
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="
            w-full h-screen
            flex items-center justify-center
            flex-col gap-3
        ">
            <h1 className="text-2xl text-white">Страница не найдена</h1>
            <Link to="/" className="text-[#5a5a5a] underline">Вернуться на главную</Link>
        </div>
    );
};

export default ErrorPage;