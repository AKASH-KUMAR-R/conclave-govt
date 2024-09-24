// import Image from '/image.jpg';

export const EventCard = ({ name, date, description}) => {

    return (
        <div className=" w-full max-w-3xl flex gap-4 custom-shadow rounded-xl overflow-hidden">
            <div className=" min-w-28 flex flex-col justify-center items-center bg-secondary-500 ">
                <h1 className=" text-xl font-semibold">Event 1</h1>
                <span className=" text-base font-semibold opacity-80">April, 08</span>
            </div>
            <div className=" p-4">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem minus nulla nesciunt optio! Voluptates minus expedita voluptate id veniam aliquid a dolore, in nobis neque suscipit alias nisi velit explicabo!
                </p>
            </div>
        </div>
    );
}