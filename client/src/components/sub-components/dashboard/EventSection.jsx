import { EventCard } from "../../../common/components/event-section/EventCard";


export const EventSection = () => {

    return (
        <section className=" w-full px-4">
            <div className=" w-full font-bold">
                <h1 className=" text-2xl sm:text-4xl md:text-6xl text-[#2B1018]">UPCOMING EVENTS</h1>
                <span className=" text-base sm:text-lg mt-4 text-[#2B1018]">DON'T MISS OUT ON THE UPCOMING EVENTS</span>
            </div>

            <div className="  sm:px-8 mt-10 flex flex-col gap-4">
                <EventCard />
                <EventCard />
                <EventCard  />
                <EventCard />
            </div>
        </section>
    );
}