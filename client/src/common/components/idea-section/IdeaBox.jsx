import { statusColor } from "../../constants/statusColor";


export const IdeaBox = ({ tagNumber, title, description, status}) => {

    return (
        <div className="sm:min-w-72 relative pt-4 pb-10 px-3 w-full max-w-60 custom-shadow rounded-md" >
            <div className=" flex justify-between">
                {tagNumber && <span className=" text-xl opacity-60">#1</span>}
                <div className={` px-4 py-1 text-xs font-medium flex justify-center items-center rounded-full bg-opacity-20 ${statusColor[status].color}`}>
                    {status.slice(0,1).toUpperCase() + status.slice(1)}
                </div>
            </div>
            <div className=" flex flex-col gap-6">
                {title && <div className=" py-4 text-xl font-semibold border-b border-black ">
                    <h2>Title</h2>
                </div>}
                {description && <p className=" line-clamp-4">
                    {description}
                </p>}
            </div>
            <div className=" absolute bottom-2 left-3 text-sm">
                More info
            </div>
        </div>
    );
}