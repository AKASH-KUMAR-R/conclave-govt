// import Image from '/image.jpg';

export const EventCard = ({isReverse = false}) => {

    console.log(Image);
    return (
        <div className={` flex flex-col  ${isReverse ? ' sm:flex-row-reverse sm:text-right' : ' sm:flex-row'} items-center rounded-md`}>
            {/* <img 
            src={''}
            className={` w-full sm:min-w-[300px] sm:max-w-[400px] h-60 bg-[#D9D9D9] object-cover border rounded-sm`}
            >
            </img> */}
            <div className=" max-w-xl px-6 py-8  bg-[#0041E8] bg-opacity-20 flex flex-col gap-4 rounded">
                <h2 className=" text-2xl font-bold ">Event 1</h2>
                <p className={` line-clamp-3`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae adipisci distinctio, a aut voluptates at similique quaerat cumque repudiandae ut id ab, iusto tempore possimus eius unde libero nesciunt? Id.</p>
            </div>
        </div>
    );
}