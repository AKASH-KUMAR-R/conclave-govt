

export const IdeaBox = ({ tagNumber, title, description}) => {

    return (
        <div className=" pt-2 pb-10 px-3 w-full max-w-60 custom-shadow rounded-md">
            <div>
                {tagNumber && <span className=" text-xl opacity-60">#1</span>}
            </div>
            <div className=" flex flex-col gap-6">
                {title && <div className=" py-4 text-xl font-semibold border-b border-black ">
                    <h2>Title</h2>
                </div>}
                {description && <p className=" line-clamp-4">
                    {description}
                </p>}
            </div>
        </div>
    );
}