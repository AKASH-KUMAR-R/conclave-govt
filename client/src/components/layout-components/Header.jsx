import { BiMenu } from "react-icons/bi";
import { useLocation } from "react-router-dom"


export const Header = ({toggleFunction}) => {
    
    const location = useLocation();

    const pathName = location.pathname.split('/')[1];

    return(
        <section className=" px-4 py-5 w-full h-fit bg-white flex gap-4">
            <BiMenu size={34} className=" block lg:hidden" onClick={toggleFunction} />
            <h2 className=" font-bold text-2xl">{pathName.slice( 0, 1).toUpperCase() + pathName.slice(1)}</h2>
        </section>
    )
}