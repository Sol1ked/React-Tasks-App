import React from 'react';
import AppInput from "../components/input/AppInput";
import AppButton from "../components/button/AppButton";
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";

const LoginPage = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {signIn} = useAuth()
    const fromPage = location.state?.from?.pathname || '/'

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const user = {
            name: form.name.value,
            surname: form.surname.value
        }
        localStorage.setItem('user', JSON.stringify(user))
        signIn(user, () => navigate(fromPage, {replace: true}))
    }


    return (
        <div className="
            w-full h-screen
            flex items-center justify-center
        ">
            <div className="p-4 w-[400px] border-2 border-[#2c2c2c] rounded">
                <form autoComplete="off" onSubmit={e => handleSubmit(e)} className="flex flex-col gap-4">
                    <h1 className="text-center text-2xl text-white">Авторизация</h1>
                    <AppInput type="text" name="surname"/>
                    <AppInput type="text" name="name"/>
                    <AppButton>
                        Войти
                    </AppButton>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;