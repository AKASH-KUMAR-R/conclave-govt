

export const IconButton = ({ className, onClick, children, ...props}) => {

    return (
        <button
            onClick={onClick}
            className={` min-w-fit p-2 flex justify-center items-center gap-2 border border-black border-opacity-20 ${className} `}
            {...props}
        >
            {children}
        </button>
    );
}