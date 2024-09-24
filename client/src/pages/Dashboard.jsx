import { useEffect, useState } from "react";
import { HeadSection } from "../components/sub-components/dashboard/HeroSection";
import { IdeaSection } from "../components/sub-components/dashboard/IdeaSection";
import { ProjectSection } from "../components/sub-components/dashboard/ProjectSection";
import { EventSection } from "../components/sub-components/dashboard/EventSection";
import { OptionCard } from "../components/OptionCard";
import { useNavigate } from "react-router-dom";
import { RequirementSection } from "../components/sub-components/dashboard/RequirementSection";

const ITEMS = [
    {
        name: 'Ideas',
        type: 'state',
        roles: ['STUDENT']
    },
    {
        name: 'Product Showcase',
        type: 'state',
        roles: ['STUDENT']
    },
    {
        name: 'Upcoming Events',
        type: 'state',
        roles: ['STUDENT', 'INDUSTRY']
    },
    {
        name: 'Ideas +',
        type: 'state',
        roles: ['STUDENT']
    },
    {
        name: 'Profile',
        type: 'nav',
        link: '/profile',
        roles: ['STUDENT', 'INDUSTRY']
    },
    {
        name: 'Requirements',
        type: 'state',
        roles: ['INDUSTRY']
    }

]

export const Dashboard = () => {

    const [sectionName, setSectionName] = useState('dashboard');
    const [dashboardData, setDashboardData] = useState(null);

    const navigate = useNavigate();

    const changeSection = (name) => {
        setSectionName(name);
    }

    const userMode = "INDUSTRY";

    // useEffect( () => {

    // }, []);

    return (
        <main className=" w-full bg-primary h-[calc(100vh-78px)] overflow-y-auto">
            <section className=" px-2  sm:px-6 py-4 ">
                {sectionName === 'dashboard' && <HeadSection />
                }
                {sectionName === 'dashboard' && <section className=" mt-16 py-4 flex flex-wrap justify-center items-center gap-6">
                    {ITEMS.slice(0, 3).map((eachItem) => (
                        <>
                            {eachItem.roles.includes(userMode) && <OptionCard onClick={eachItem.type === 'state' ? () => changeSection(eachItem.name) : () => navigate(eachItem.link)} title={eachItem.name} />}
                        </>

                    ))}
                </section>}
                {sectionName === 'dashboard' && <section className=" sm:mt-16 py-4 flex flex-wrap justify-center items-center gap-6">
                    {ITEMS.slice(3).map((eachItem) => (
                    <>
                        {eachItem.roles.includes(userMode) && <OptionCard onClick={eachItem.type === 'state' ? () => changeSection(eachItem.name) : () => navigate(eachItem.link)} title={eachItem.name} />}
                    </>))}
                </section>}


                {sectionName === 'Ideas' && <IdeaSection changeSection={changeSection} />}
                {sectionName === 'Product Showcase' && <ProjectSection changeSection={changeSection} />}
                {sectionName === 'Upcoming Events' && <EventSection changeSection={changeSection} />}
                {sectionName === 'Requirements' && <RequirementSection changeSection={changeSection} />}
            </section>
        </main>
    );
}


// <div
//     className=" cursor-pointer w-72 aspect-video shadow-md shadow-secondary-500 border-b-4  rounded-sm flex justify-center items-center"
//     onClick={() => changeSection(eachItem.name)}
// >
//     <span className=" font-semibold text-2xl opacity-80">{eachItem.name}</span>
// </div> 