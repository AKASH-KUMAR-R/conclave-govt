import { IoArrowBackCircleOutline, IoFilter } from "react-icons/io5";
import { IconButton } from "../../../common/components/buttons/IconButton";
import { PiPlus } from "react-icons/pi";
import { ProjectCard } from "../../../common/components/project-section/ProjectCard";

export const ProjectSection = ({ changeSection}) => {

    return (
        <>
            <section className=" py-4 w-full flex justify-between border-b border-black border-opacity-20">
                <div className=" w-full flex items-center gap-4">
                    <IconButton
                        className=' rounded-full'
                        onClick={() => changeSection('dashboard')}
                    >
                        <IoArrowBackCircleOutline size={28} />
                        <span className=" mb-0.5 font-semibold hidden sm:block">Go Back</span>
                    </IconButton>
                    <span className=" text-2xl sm:text-3xl font-semibold">Project Showcase</span>
                </div>
                <IconButton
                    className=' rounded-full bg-purple-400'
                >
                    <PiPlus size={28} strokeWidth={2} />
                    <span className=" mb-0.5  font-semibold hidden sm:block">Add New</span>
                </IconButton>
            </section>
            <section className=" w-full ">
                <div className=" mt-4 max-w-sm bg-gradient-to-r from-[#8E93FF] to-[#6967FF] flex rounded-md overflow-hidden">
                    <input
                        placeholder="Search..."
                        className=" px-2 py-3 w-full min-w-64 bg-white flex rounded-r-lg shadow-sm focus:outline-none"
                    >
                    </input>
                    <div className=" min-w-20 flex justify-center items-center">
                        <IoFilter size={24} color="white" />
                    </div>
                </div>

                <div className=" w-full py-6 flex flex-wrap justify-around gap-6">
                    <ProjectCard id='1'/>
                    <ProjectCard id='2'/>
                    <ProjectCard id='3'/>
                    <ProjectCard id='4'/>
                    <ProjectCard id='5'/>
                </div>
            </section>
        </>
    );
}