import { BiMenu } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom"
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { PiGearFine } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";

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
    // }
]

export const Header = ({toggleFunction}) => {
    
    const location = useLocation();

    const pathName = location.pathname.split('/')[1];

    return(
        <section className=" px-4 py-5 w-full h-fit bg-[#F1F3F7] flex  sm:justify-around">
            
            <div className=" flex gap-2 w-1/2">
                <span><BiMenu size={34} className=" block sm:hidden" onClick={toggleFunction} /></span>
                <div className=" px-4 text-2xl font-bold text-secondary border-r-2 border-black border-opacity-20">
                    CONCLAVE
                </div>
                <h2 className=" font-bold text-xl">{pathName.slice( 0, 1).toUpperCase() + pathName.slice(1)}</h2>
            </div>
            
            <div className=" w-1/2  items-center justify-around text-lg opacity-80 hidden sm:flex gap-4">

                <div className=" hidden lg:flex items-center gap-4">
                {ITEMS.map((eachItem) => (
                    <Link to={eachItem.link}>{eachItem.name}</Link>
                ))}
                </div>
                <div className=" flex gap-4">
                    <FaRegCircleUser size={32} />
                    <span className=" text-lg font-semibold">Hi, Student</span>
                </div>
                
            </div>
        </section>
    )
}