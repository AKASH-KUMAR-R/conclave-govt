

export const ProjectCard = ({ headLine, subHead, description, tags }) => {

    return (
        <div className="  pb-6 w-full max-w-72 custom-shadow rounded-md overflow-hidden">
            <div className=" w-full bg-[#D9D9D9] min-h-1 h-40">

            </div>
            <div className=" px-3 flex flex-col ">
                {<div className=" py-4 font-semibold">
                    <h2 className=" text-xl">Headline</h2>
                    <h3 className=" text-sm opacity-60">SubHead</h3>
                </div>}
                <div className=" pb-4 border-b border-black">
                    {<p className=" line-clamp-2">
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