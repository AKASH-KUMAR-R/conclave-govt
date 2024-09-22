import { useNavigate } from "react-router-dom";
import { StatisticsBox } from "./StatisticsBox";
import { TbBell } from "react-icons/tb";


export const HeadSection = () => {
    
    const navigate = useNavigate();

    const navigateToNotifig = () => {
        navigate('/notifications');
    }

    return (
        <section className=" w-full flex flex-col md:flex-row gap-4 justify-between">
            <div className=" px-6 py-4 w-full flex flex-col gap-4 text-white bg-gradient-to-r from-indigo-400 to-indigo-500 rounded">
                <h2 className=" text-xl font-bold">WELCOME BACK!</h2>
                <p className="">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    unde corrupti placeat tenetur perferendis quam?
                </p>
                <button className=" px-4 py-2 w-fit rounded-md font-semibold bg-[#C86DFF]">
                    Check Your Alerts
                </button>
            </div>
            <div className=" flex flex-col gap-4">
                <StatisticsBox />
                <div className=" flex-grow p-4 hidden md:flex justify-between items-center bg-white shadow-sm rounded-md">
                    <span className=" font-semibold">Notifications</span>
                    <i className=" cursor-pointer" onClick={navigateToNotifig}> <TbBell size={28} /></i>
                </div>
            </div>
        </section>
    );
}
