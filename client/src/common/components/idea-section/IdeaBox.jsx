import { statusColor } from "../../constants/statusColor";


export const IdeaBox = ({ tagNumber, title, description, status}) => {

    return (
        <div className=" w-full relative pb-10 px-3  bg-[#F8FAFC] sm:max-w-60 sm:min-w-96 shadow-none hover:shadow-md duration-300 rounded-md" >
            <div className=" flex justify-between">
                {tagNumber && <span className=" text-xl opacity-60">#1</span>}
                <div className={` px-3 py-1 mt-2 text-xs font-medium flex justify-center items-center rounded-full bg-opacity-20 ${statusColor[status].color}`}>
                    {status.slice(0,1).toUpperCase() + status.slice(1)}
                </div>
            </div>
            <div className=" flex flex-col gap-6">
                {title && <div className=" py-4 text-xl font-semibold border-b border-black ">
                    <h2>Title</h2>
                </div>}
                {description && <p className=" line-clamp-2">
                    {description}
                </p>}
            </div>
            <div className=" absolute bottom-2 left-3 text-sm">
                More info
            </div>
        </div>
    );
}