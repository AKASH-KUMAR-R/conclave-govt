import { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { PiGearFine } from "react-icons/pi";
import { TbLogout } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { IconButton } from "../common/components/buttons/IconButton";
import { CgClose } from "react-icons/cg";


const ITEMS = [
    {
        name: 'Dashboard',
        link: '/dashboard',
        icon: <IoHomeOutline size={24} />
    },
    {
        name: 'Profile',
        link: '/profile',
        icon: <LuUser2 size={24}/>
    },
    {
        name: 'Notifications',
        link: '/notifications',
        icon: <PiGearFine size={24}/>
    },
    // {
    //     name: 'Lorem',
    //     link: '/lorem',
    //     icon: <PiGearFine size={24}/>
    // },
    // {
    //     name: 'Lorem',
    //     link: '/lorem',
    //     icon: <PiGearFine size={24}/>
    // },
    // {
    //     name: 'Lorem',
    //     link: '/lorem',
    //     icon: <PiGearFine size={24}/>
    // },
    // {
    //     name: 'Lorem',
    //     link: '/lorem',
    //     icon: <PiGearFine size={24}/>
    // }
]

export const SideNavBar = ({ show, toggleFunction}) => {

    const location = useLocation();

    return (
        <section className={` fixed lg:static z-50 w-full h-screen max-w-[260px] bg-white -translate-x-full block sm:hidden lg:-translate-x-0 transition-transform duration-300 ${show ? 'translate-x-0' : ''}`}>

            <div className=" w-full h-[calc(100%-58px)] flex flex-col gap-6">
                <div className=" py-4 flex justify-around items-center bg-[#F1F3F7]">
                    <span className=" text-3xl font-bold text-secondary">CONCLAVE</span>
                    <IconButton
                        onClick={toggleFunction}
                        className=" block lg:hidden "
                    >
                        <CgClose size={24} />
                    </IconButton>
                </div>
                <div className=" flex flex-col gap-4 overflow-y-auto">
                    {ITEMS.map( (eachItem) => (
                        <Link 
                            to={eachItem.link} 
                            onClick={toggleFunction}
                            className={` pl-4 py-4 w-full font-semibold text-base flex gap-4 items-center hover:bg-secondary-500 duration-200 opacity-60 ${location.pathname === eachItem.link ? 'bg-secondary-500' : ''}`}
                        >
                            {eachItem.icon}
                            {eachItem.name}
                        </Link>                            
                    ))}
                </div>
            </div>
            <div className=" absolute w-full bottom-0 left-0 px-4 py-2 border-t border-black flex justify-between items-center">
                    <div className=" flex gap-4">
                        <FaRegCircleUser size={40} />
                        <span className=" text-lg font-semibold">Hi, Student</span>
                    </div>
                    <TbLogout size={30} strokeWidth={1.5} className="  text-red-600" />
                </div>
        </section>
    );
}