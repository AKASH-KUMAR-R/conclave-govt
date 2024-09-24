
const skills = ['Web', 'Design'];

export const RequirementCard = () => {

    return (
        <div className=" max-w-sm px-6 py-4 flex flex-col gap-6 shadow-md rounded-md">
            <div>
                <h1 className=" text-xl font-semibold">Headline</h1>
            </div>
            <p className=" line-clamp-3 opacity-60 -mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure necessitatibus omnis iusto unde rerum magni possimus sunt illo. Reprehenderit sint similique perspiciatis numquam accusamus nemo quaerat harum eum praesentium?
            </p>
            <div>
                {skills.map( (eachSkill, index) => (
                    <>
                        <span>{eachSkill}</span>
                        { index !== skills.length - 1 && <span> | </span>}
                    </>
                    
                ))}
            </div>
        </div>
    );
}