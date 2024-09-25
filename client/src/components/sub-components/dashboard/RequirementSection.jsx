import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconButton } from "../../../common/components/buttons/IconButton";
import { RequirementCard } from "../../../common/components/requirement-section/RequirementCard";
import { PiPlus } from "react-icons/pi";
import { RequirementForm } from "../../../common/components/requirement-section/RequirementForm";
import { useState } from "react";
import { CgSearch } from "react-icons/cg";


export const RequirementSection = ({ changeSection }) => {

    const [showForm, setShowForm] = useState(false);

    const triggerForm = () => {
        setShowForm(prev => !prev);
    }

    return (
        <div className="">
            <section className=" sticky w-full flex gap-4 justify-between items-center">
            <IconButton
                    className=' px-4 rounded-xl h-fit opacity-60'
                    onClick={() => changeSection('dashboard')}
                >
                    <IoArrowBackCircleOutline size={28} />
                    <span className=" mb-0.5 font-semibold hidden sm:block">Back</span>
                </IconButton>
                <div className=" mt-2 max-w-sm w-full shadow flex  flex-row-reverse rounded-md overflow-hidden">
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
                    <span className=" mb-0.5  font-semibold hidden sm:block ">Add New</span>
                </IconButton>
            </section>
            {showForm && <section className=" pt-6">
                <h1 className=" text-xl font-semibold">Requirement Creation Form</h1>
                <RequirementForm closeForm={triggerForm} />
            </section>}
            <section className=" px-14 pb-4 pt-8 flex flex-wrap  gap-6">

                <RequirementCard />
                <RequirementCard />
                <RequirementCard />
                <RequirementCard />
                {/* <AddEvent /> */}
            </section>

        </div>

    );
}