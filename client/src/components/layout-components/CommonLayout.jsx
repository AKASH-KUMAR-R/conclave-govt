import { Header } from "./Header";
import { SideNavBar } from "../SideNavBar";
import { useState } from "react";


export const CommonLayout = ({ children }) => {

    const [showNavBar, setShowNavBar] = useState(false);


    const toggleFunction = () => {
        setShowNavBar(prev => !prev);
    }

    return (
        <main className=" flex ">
            <SideNavBar
                show={showNavBar}
                toggleFunction={toggleFunction} 
            />
            <section className=" w-full">
                <Header
                    toggleFunction={toggleFunction} 
                />
                {children}
            </section>

        </main>
    );
}