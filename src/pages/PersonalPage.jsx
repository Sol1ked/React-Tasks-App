import React, {useState} from 'react';
import AppButton from "../components/button/AppButton";
import {Link} from "react-router-dom";

const PersonalPage = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <div className="flex">
            <div className="flex items-start flex-col gap-4 p-16">
                <h1 className="text-2xl text-white">Личный кабинет:</h1>
                <div className="flex gap-4">
                    <p className="text-white text-xl">Имя: <span>{user.surname}</span></p>
                    <p className="text-white text-xl">Фамилия: <span>{user.name}</span></p>
                </div>
                <Link to="/">
                    <AppButton>Понятно</AppButton>
                </Link>
            </div>
        </div>
    );
};

export default PersonalPage;