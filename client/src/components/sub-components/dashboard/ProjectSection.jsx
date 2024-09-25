import { IoArrowBackCircleOutline, IoFilter } from "react-icons/io5";
import { IconButton } from "../../../common/components/buttons/IconButton";
import { PiPlus } from "react-icons/pi";
import { ProjectCard } from "../../../common/components/project-section/ProjectCard";
import { ProductCreateForm } from "../../../common/components/project-section/ProductCreateForm";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";

export const ProjectSection = ({ changeSection }) => {

    const [showForm, setShowForm] = useState(false);


    const triggerForm = () => {
        setShowForm(prev => !prev);
    }

    return (
        <div className=" px-2 sm:px-14 pt-6">
            <section className=" flex flex-col items-center">
                <section className=" sticky w-full flex gap-4 justify-between items-center">
                    <IconButton
                    className=' px-4 rounded-xl h-fit opacity-60'
                    onClick={() => changeSection('dashboard')}
                >
                    <IoArrowBackCircleOutline size={28} />
                    <span className=" mb-0.5 font-semibold ">Back</span>
                </IconButton>
                    <div className=" mt-2 max-w-sm w-full shadow hidden md:flex  flex-row-reverse rounded-md overflow-hidden">
                        <input
                            placeholder="Search..."
                            className=" px-2 py-3 w-full min-w-64  bg-white flex rounded-xl shadow-sm focus:outline-none"
                        >
                        </input>
                        <div className="flex px-4 justify-end items-center">
                            <CgSearch size={28} color="lightgray" />
                        </div>
                    </div>
                    <IconButton
                        className=' px-6 rounded-xl border-2 border-secondary hover:bg-secondary hover:text-white duration-300  '
                        onClick={triggerForm}
                    >
                        {/* <PiPlus size={26} strokeWidth={2} /> */}
                        <span className=" mb-0.5  font-semibold">Add New</span>
                    </IconButton>
                </section>

                {showForm && <section className=" w-full mt-5 animate-open">
                    <h1 className=" text-xl font-semibold">Product Registration Form</h1>
                    <ProductCreateForm closeHandler={triggerForm} />
                </section>}

                <div className=" max-w-fit py-6 px-2 sm:px-14 flex flex-wrap  gap-8">
                    <ProjectCard id='1' />
                    <ProjectCard id='2' />
                    <ProjectCard id='3' />
                    <ProjectCard id='4' />
                    <ProjectCard id='5' />
                </div>
            </section>
        </div>
    );
}