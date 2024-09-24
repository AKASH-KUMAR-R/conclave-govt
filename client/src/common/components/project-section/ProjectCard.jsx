import { FaGithub } from "react-icons/fa6";


export const ProjectCard = ({ headLine, subHead, description, tags, id }) => {

    return (
        <div className=" px-4 py-6 w-full max-w-72 custom-shadow scale-100 hover:scale-105 transition-all rounded-md overflow-hidden">
            <div className=" text-lg opacity-60">
                <span>#{id}</span>
            </div>
            <div className="  flex flex-col ">
                <div className=" py-4 flex justify-between items-center font-semibold">
                    <div>
                    <h2 className=" text-xl">Headline</h2>
                    <h3 className=" text-sm opacity-60">SubHead</h3>
                    </div>
                    
                    <FaGithub size={28} className=" opacity-60 hover:opacity-100 duration-300" />
                </div>
                <div className=" pb-4 border-b border-black">
                    {<p className=" line-clamp-3">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam laudantium tempore magnam corrupti, delectus quibusdam
                    </p>}
                </div>
                <div className=" flex gap-2 mt-4">
                    <div className=" w-fit px-4 py-1 border border-black border-opacity-20 rounded-full text-sm ">
                        <span >Tag 1</span>
                    </div>
                    <div className=" w-fit px-4 py-1 border border-black border-opacity-20 rounded-full text-sm ">
                        <span >Tag 1</span>
                    </div>
                    <div className=" w-fit px-4 py-1 border border-black border-opacity-20 rounded-full text-sm ">
                        <span >Tag 1</span>
                    </div>
                </div>
            </div>
        </div>
    );
}