import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PersonalPage from "./pages/PersonalPage";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./components/layout/Layout";
import LoginPage from "./pages/LoginPage";
import {AuthProvider} from "./hoc/AuthProvider";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={
                        <RequireAuth>
                            <HomePage/>
                        </RequireAuth>
                    }/>
                    <Route path="personal" element={
                        <RequireAuth>
                            <PersonalPage/>
                        </RequireAuth>
                    }/>
                </Route>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </AuthProvider>
    )
};

export default App;