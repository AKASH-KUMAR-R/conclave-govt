import { IoArrowBackCircleOutline, IoFilter } from "react-icons/io5";
import { IconButton } from "../../../common/components/buttons/IconButton";
import { IdeaBox } from "../../../common/components/idea-section/IdeaBox";
import { StatisticsBox } from './StatisticsBox';
import { IdeaCreateForm } from "../../../common/components/idea-section/IdeaCreateForm";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";

export const IdeaSection = ({ changeSection }) => {

    const [showForm, setShowForm] = useState(false);

    const triggerForm = () => {
        setShowForm(prev => !prev);
    }

    return (
        <div className=" px-2 sm:px-14">
            <section className=" flex justify-center sm:justify-end items-center">
                <StatisticsBox className=' bg-primary max-w-sm' />
            </section>
            <section className=" mt-2 sticky w-full flex gap-4 justify-between items-center">
                <IconButton
                    className=' px-4 rounded-xl h-fit opacity-60'
                    onClick={() => changeSection('dashboard')}
                >
                    <IoArrowBackCircleOutline size={28} />
                    <span className=" mb-0.5 font-semibold ">Back</span>
                </IconButton>
                <div className=" mt-2 max-w-sm w-full shadow hidden md:flex flex-row-reverse rounded-md overflow-hidden">
                    <input
                        placeholder="Search..."
                        className=" px-2 py-3 w-full min-w-64  bg-white flex rounded-xl shadow-sm  focus:outline-none"
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
                    <span className=" mb-0.5  font-semibold ">Add New</span>
                </IconButton>
            </section>
            <section className=" w-full">

                {showForm && <section className=" pt-6">
                    <h1 className=" ml-2 text-xl font-semibold">Idea Submission Form</h1>
                    <IdeaCreateForm closehandler={triggerForm} />
                </section>}


                <div className=" w-full py-6 sm:px-10 flex flex-wrap gap-x-8 gap-y-6">
                    <IdeaBox status={'submitted'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                    <IdeaBox status={'reviewing'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing  '} />
                    <IdeaBox status={'rejected'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                    <IdeaBox status={'rejected'} title={'name'} tagNumber={'12'} description={'121Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                    <IdeaBox status={'approved'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                </div>
            </section>
        </div>
    );
}