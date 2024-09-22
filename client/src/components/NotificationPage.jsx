
const TABLE_HEADS = [
    {
        name: 'Message',
        style: ' w-6/12'
    },
    {
        name: 'Category',
        style: ' w-3/12'
    },
    {
        name: 'Date & Time',
        style: ' w-3/12 '
    }
]

const TABLE_BODY = [
    {
        id: 1,
        message: "Registration closing soon for MTech application",
        category: "Industry",
        date_and_time: "3/4/2013"
    },
    {
        id: 2,
        message: "Registration for MTech now open!",
        category: "Project Status",
        date_and_time: "1/16/2014"
    },
    {
        id: 3,
        message: "Registration for MTech now open!",
        category: "Academic",
        date_and_time: "2/13/2018"
    },
    {
        id: 4,
        message: "Last chance to register for MTech!",
        category: "Academic",
        date_and_time: "5/24/2003"
    },
    {
        id: 5,
        message: "Registration closing soon for MTech application",
        category: "Idea Status",
        date_and_time: "9/1/2020"
    },
    {
        id: 6,
        message: "Registration closing soon for MTech application",
        category: "Industry",
        date_and_time: "3/30/2009"
    },
    {
        id: 7,
        message: "MTech registration deadline approaching",
        category: "Project Status",
        date_and_time: "11/21/2006"
    },
    {
        id: 8,
        message: "MTech registration deadline approaching",
        category: "Project Status",
        date_and_time: "11/2/2019"
    },
    {
        id: 9,
        message: "Last chance to register for MTech!",
        category: "Idea Status",
        date_and_time: "10/29/2019"
    },
    {
        id: 10,
        message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia sed aut autem voluptatem deserunt repellat dolor tenetur quaerat reiciendis ex, dolore, voluptatibus, adipisci rerum rem quasi sint laboriosam blanditiis natus?",
        category: "Industry",
        date_and_time: "3/18/2019"
    }
]

export const NotificationPage = () => {

    return (
        <section className=" px-4 sm:px-8 py-5 w-full bg-primary h-[calc(100vh-72px)] overflow-y-auto">
            <div className=" flex flex-col md:flex-row justify-between gap-4">
                <div className=" w-fit font-bold text-[#2B1018]">
                    <h1 className=" text-4xl md:text-6xl ">ALERTS</h1>
                    <h2 className=" whitespace-nowrap text-base sm:text-lg mt-4">STAY UPDATED</h2>
                </div>
                {/* <StatisticsBox /> */}
                <div className=" w-full flex justify-around gap-2 text-base sm:text-xl font-bold text-white">

                    <div className=" relative w-full p-2 min-h-20 max-w-60 flex justify-center items-center bg-[#CEA712] rounded">
                        <span>INTERNSHIPS</span>
                    </div>
                    <div className=" relative w-full p-2 min-h-20 max-w-60 flex justify-center items-center bg-[#94351C] rounded">
                        <span>HIRING</span>
                    </div>
                    <div className=" relative w-full p-2 min-h-20 max-w-60 flex justify-center items-center bg-[#334155] rounded">
                        <span>PROJECTS</span>
                    </div>
                </div>
            </div>

            <div className=" w-full">
                <table className=" w-full rounded-md text-left border-separate border-spacing-y-4">
                    <thead className=" text-lg ">
                        {TABLE_HEADS.map((eachHead, index) => (
                            <th
                                key={eachHead.name + index}
                                className={` px-4 py-2 sm:px-6 sm:py-4 shadow-sm ${eachHead.style}`}
                            >
                                {eachHead.name}
                            </th>
                        ))}
                    </thead>
                    <tbody>
                        {TABLE_BODY.map( (eachAlert) => (
                            <tr key={eachAlert.id + eachAlert.category} className=" shadow-sm">
                                <td className=" px-4 py-2 sm:px-6 sm:py-4 ">
                                    {eachAlert.message}
                                </td>
                                <td className=" px-4 py-2 sm:px-6 sm:py-4 ">
                                    {eachAlert.category}
                                </td>
                                <td className=" px-4 py-2 sm:px-6 sm:py-4 ">
                                    {eachAlert.date_and_time}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    );
}