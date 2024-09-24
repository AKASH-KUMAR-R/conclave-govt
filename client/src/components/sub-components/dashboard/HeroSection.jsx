import { useNavigate } from "react-router-dom";
import { StatisticsBox } from "./StatisticsBox";
import { TbBell } from "react-icons/tb";
import { UserBanner } from "../../../assets/UserBanner";
export const HeadSection = () => {

    const navigate = useNavigate();

    const navigateToNotifig = () => {
        navigate('/notifications');
    }

    return (
        <section className=" w-11/12 flex flex-col md:flex-row gap-4 justify-between">
            <div className=" min-h-60 relative px-6 py-4 w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-white bg-gradient-to-b from-[#8e9eff] to-[#0041e8] rounded">
                <div className=" flex flex-col justify-center gap-4">
                    <h2 className=" text-xl font-bold">WELCOME BACK!</h2>
                    <p className=" line-clamp-3">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        unde corrupti placeat tenetur perferendis quam?
                    </p>
                    {/* <button className=" px-4 py-2 w-fit rounded-md font-semibold bg-[#C86DFF]">
                        Check Your Alerts
                    </button> */}
                </div>
                <div className=" relative right-0 -top-8">
                <UserBanner />
                </div>
                
                
            </div>
            <div className=" w-full md:w-4/12  flex flex-col gap-4">
                <StatisticsBox />
                <div className=" flex-grow p-4 hidden md:flex justify-between items-center bg-white shadow-sm rounded-md">
                    <span className=" text-xl font-semibold">Notifications</span>
                    <i className=" cursor-pointer" onClick={navigateToNotifig}> <TbBell size={28} /></i>
                </div>
            </div>
        </section>
    );
}
