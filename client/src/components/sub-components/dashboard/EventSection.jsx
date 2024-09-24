import { useLocation } from "react-router-dom";
import { EventCard } from "../../../common/components/event-section/EventCard";
// import IndustryEventCard from "../../../common/components/event-section/IndustryEventCard";

export const EventSection = () => {

    const location = useLocation();

    return (
        <section className=" w-full px-4">
            <div className=" w-full font-bold">
                <h1 className=" text-2xl sm:text-4xl md:text-6xl text-[#2B1018]">UPCOMING EVENTS</h1>
                <span className=" text-base sm:text-lg mt-4 text-[#2B1018]">DON'T MISS OUT ON THE UPCOMING EVENTS</span>
            </div>

            {location.pathname !== '/industry/dashboard' ? <div className="  sm:px-8 mt-10 flex flex-col gap-4">
                <EventCard title='Event 1' description={"sjndncjsdncjksd  kcj dkj k skj "} created_date='20-04-2024' />
                <EventCard title='Event 1' />
                <EventCard title='Event 1' />
                <EventCard title='Event 1' />
            </div> :
                <div className="  sm:px-8 mt-10 flex flex-col gap-4">
                    {/* <IndustryEventCard title='Event 1' description={"sjndncjsdncjksd  kcj dkj k skj "} created_date='20-04-2024' /> */}
                    <EventCard title='Event 1' />
                    <EventCard title='Event 1' />
                    <EventCard title='Event 1' />
                </div>}
        </section>
    );
}