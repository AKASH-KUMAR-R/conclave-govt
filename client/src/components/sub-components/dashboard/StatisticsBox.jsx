
const ITEMS = [
    {
        heading: 'Ideas',
        count: 20,
        color: ' text-green-300'
    },
    {
        heading: 'Products',
        count: 12,
        color: ' text-amber-500'
    }
]

export const StatisticsBox = ({className}) => {

    return (
        <div className={` px-2 py-2 w-full flex flex-grow justify-around items-center bg-white shadow-sm rounded-md  ${className} `}>
            {ITEMS.map( (eachItem, index) => (
                <div className={` w-full min-w-24 font-semibold flex flex-col items-center border-black border-opacity-20 ${index !== ITEMS.length - 1 ? 'border-r' : ''}`}>
                    <span className=" text-sm opacity-80">{eachItem.heading}</span>
                    <p className={` text-3xl ${eachItem.color ? eachItem.color : ''}`}>{eachItem.count}</p>
                </div>
            ))}
        </div>
    );
}