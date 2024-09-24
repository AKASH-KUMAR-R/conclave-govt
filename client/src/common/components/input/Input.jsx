

export const Input = ({ type, className, placeholder, onChange, disable = false, value, required = false, ...props }) => {

    return (
        <>
            {!disable ? <input
                type={type ? type : 'text'}
                placeholder={placeholder ? placeholder : ''}
                className={` w-full px-3 h-12 max-w-xl bg-white focus:outline-none rounded ${className} `}
                value={value}
                required={required}
                onChange={onChange}
                {...props}
            />
                :
                <div
                    className=" w-full px-3 h-12 max-w-xl flex items-center cursor-not-allowed bg-gray-200 focus:outline-none rounded ${className}"
                >
                    {value}
                </div>
            }
        </>


    );
}