import { useState } from "react";
import { HeadSection } from "../components/sub-components/dashboard/HeroSection";
import { IdeaSection } from "../components/sub-components/dashboard/IdeaSection";
import { ProjectSection } from "../components/sub-components/dashboard/ProjectSection";
import { EventSection } from "../components/sub-components/dashboard/EventSection";
import OptionCard from "../components/OptionCard";

const ITEMS = [
    {
        name: 'Ideas',
    },
    {
        name: 'Product Showcase',
    },
    {
        name: 'Upcoming Events',
    },
    {
        name: 'Ideas +',
    },
    {
        name: 'Profile',
    },

]
export const Dashboard = () => {

    const [ sectionName, setSectionName] = useState('dashboard');

    const changeSection = (name) => {
        setSectionName(name);
    }

    return (
        <main className=" w-full bg-primary h-[calc(100vh-78px)] overflow-y-auto">
            <section className=" px-2  sm:px-6 py-4 ">
                {sectionName === 'dashboard' && <HeadSection />
}
                {sectionName === 'dashboard' && <section className=" mt-16 py-4 flex flex-wrap justify-center items-center gap-6">
                    {ITEMS.slice(0,3).map( (eachItem) => (
                        <OptionCard onClick={() => changeSection(eachItem.name)} title={eachItem.name} />
                    ))}
                </section>}
                 {/* <div
                        //     className=" cursor-pointer w-72 aspect-video shadow-md shadow-secondary-500 border-b-4  rounded-sm flex justify-center items-center"
                        //     onClick={() => changeSection(eachItem.name)}
                        // >
                        //     <span className=" font-semibold text-2xl opacity-80">{eachItem.name}</span>
                        // </div> */}
                {sectionName === 'dashboard' && <section className=" sm:mt-16 py-4 flex flex-wrap justify-center items-center gap-6">
                    {ITEMS.slice(3).map( (eachItem) => (
                        
                        <OptionCard title={eachItem.name} />
                ))}
                </section>}
                

                {sectionName === 'Ideas' && <IdeaSection  changeSection={changeSection} />}
                {sectionName === 'Product Showcase' && <ProjectSection changeSection={changeSection} />}
                {sectionName === 'Upcoming Events' && <EventSection />}
            </section>
        </main>
    );
}