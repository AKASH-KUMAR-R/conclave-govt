import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IconButton } from "../../../common/components/buttons/IconButton";
import { RequirementCard } from "../../../common/components/requirement-section/RequirementCard";
import { PiPlus } from "react-icons/pi";
import { RequirementForm } from "../../../common/components/requirement-section/RequirementForm";
import { useState } from "react";


export const RequirementSection = ({ changeSection }) => {

    const [showForm, setShowForm] = useState(false);

    const triggerForm = () => {
        setShowForm(prev => !prev);
    }

    return (
        <>
            <section className=" sticky py-4 w-full flex justify-between border-b border-black border-opacity-20">
                <div className=" w-full flex items-center gap-4">
                    <IconButton
                        className=' rounded-full'
                        onClick={() => changeSection('dashboard')}
                    >
                        <IoArrowBackCircleOutline size={28} />
                        <span className=" mb-0.5 font-semibold hidden sm:block">Go Back</span>
                    </IconButton>
                    <span className=" text-2xl sm:text-3xl font-semibold">Requirements</span>
                </div>
                <IconButton
                    className=' rounded-full bg-purple-400  '
                    onClick={triggerForm}
                >
                    <PiPlus size={28} strokeWidth={2} />
                    <span className=" mb-0.5  font-semibold hidden sm:block">Add New</span>
                </IconButton>
            </section>
            {showForm && <section className=" pt-6">
                <h1 className=" text-xl font-semibold">Requirement Creation Form</h1>
                <RequirementForm closeForm={triggerForm} />
            </section>}
            <section className=" px-2 py-4 flex flex-wrap justify-around gap-6">

                <RequirementCard />
                <RequirementCard />
                <RequirementCard />
                <RequirementCard />
                {/* <AddEvent /> */}
            </section>

        </>

    );
}