import { IoArrowBackCircleOutline, IoFilter } from "react-icons/io5";
import { IconButton } from "../../../common/components/buttons/IconButton";
import { PiPlus } from "react-icons/pi";
import { IdeaBox } from "../../../common/components/idea-section/IdeaBox";
import { StatisticsBox } from './StatisticsBox';
import { IdeaCreateForm } from "../../../common/components/idea-section/IdeaCreateForm";
import { useState } from "react";

export const IdeaSection = ({ changeSection }) => {

    const [showForm, setShowForm] = useState(false);

    const triggerForm = () => {
        setShowForm(prev => !prev);
    }

    return (
        <>
            <section className=" flex justify-between">
                <IconButton
                    className=' rounded-full'
                    onClick={() => changeSection('dashboard')}
                >
                    <IoArrowBackCircleOutline size={28} />
                    <span className=" mb-0.5 font-semibold hidden sm:block">Go Back</span>
                </IconButton>

                <StatisticsBox className=' bg-primary max-w-sm' />

            </section>
            <section className=" sticky py-4 w-full flex justify-between border-b border-black border-opacity-20">
                <div className=" w-full flex items-center gap-4">

                    <span className=" text-2xl sm:text-3xl font-semibold">Ideas</span>
                </div>
                <IconButton
                    className=' rounded-xl border border-black hover:bg-secondary hover:text-white duration-300  '
                    onClick={triggerForm}
                >
                    <PiPlus size={26} strokeWidth={2} />
                    <span className=" mb-0.5  font-semibold hidden sm:block ">Add New</span>
                </IconButton>
            </section>
            <section className=" w-full">

                <div className=" pt-4 flex flex-col-reverse md:flex-row  justify-between items-center gap-4">
                    <div className=" max-w-sm bg-gradient-to-r from-[#8E93FF] to-[#6967FF] flex rounded-md overflow-hidden">
                        <input
                            placeholder="Search..."
                            className=" px-2 py-3 w-full min-w-64 bg-white flex rounded-r-lg shadow-sm focus:outline-none"
                        >
                        </input>
                        <div className=" w-full min-w-20 flex justify-center items-center">
                            <IoFilter size={24} color="white" />
                        </div>
                    </div>
                    <div className=" w-full max-w-xs self-center">
                        <StatisticsBox className=' bg-primary' />
                    </div>
                </div>

                {showForm && <section className=" pt-6">
                    <h1 className=" ml-2 text-xl font-semibold">Idea Submission Form</h1>
                    <IdeaCreateForm closehandler={triggerForm} />
                </section>}


                <div className=" w-full py-6 flex flex-wrap justify-around gap-6">
                    <IdeaBox status={'submitted'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                    <IdeaBox status={'reviewing'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing  '} />
                    <IdeaBox status={'rejected'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                    <IdeaBox status={'rejected'} title={'name'} tagNumber={'12'} description={'121Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                    <IdeaBox status={'approved'} title={'name'} tagNumber={'12'} description={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor sed voluptates, totam porro quam magni sint, assumenda laboriosam soluta rerum quisquam voluptatibus quas consequatur quia pariatur temporibus, '} />
                </div>
            </section>
        </>
    );
}