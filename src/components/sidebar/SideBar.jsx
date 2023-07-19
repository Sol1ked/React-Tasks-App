import React from 'react';
import {BiLogoPython} from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";

const SideBar = () => {
        const menuItems = [
            {title: "basket", link: "/"},
            {title: "user", link: "/personal"},
        ]

        const {signOut} = useAuth()
        const navigate = useNavigate()

        return (
            <div className={`
                w-14 h-screen
                bg-[#1f1f22] 
                p-2 pt-5 border-r-[#2c2c2c] 
                border-r relative flex flex-col
            `}>
                <div className="flex justify-center items-center flex-0">
                    <Link to="/">
                        <BiLogoPython
                            size={35}
                            className=" text-white cursor-pointer duration-500"
                        />
                    </Link>
                </div>
                <div className=" flex items-start gap-x-4 flex-auto justify-start">
                    <ul className=" pt-4">
                        {menuItems.map((menu, index) => <Link
                            to={menu.link}
                            key={index}
                            className="
                      text-white text-sm
                      cursor-pointer rounded-md
                    ">
                            <div className="
                      hover:bg-[#333333] hover:duration-500
                p-2
                rounded
                flex items-center
                duration-500
                ">
                                <box-icon
                                    name={`${menu.title}`}
                                    color='#ffffff'
                                ></box-icon>
                            </div>
                        </Link>)
                        }
                    </ul>
                </div>
                <div className="
                    hover:bg-[#333333] hover:duration-500
                    flex flex-0
                    p-2 rounded
                    justify-center items-center
                    pb-1.5 cursor-pointer"
                     onClick={() => signOut(() => navigate('/', {replace: true}), localStorage.removeItem('user'))}
                >
                    <box-icon
                        name="exit"
                        color='#ffffff'
                    ></box-icon>
                </div>
            </div>
        );
    }
;

export default SideBar;