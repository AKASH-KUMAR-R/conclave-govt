import { useEffect, useRef } from "react";


export const Section = () => {

    const ref = useRef();

    useEffect( () => {

        if (!ref.current) {
            return;
        }
    }, [])
    return (
        <div ref={ref}>

        </div>
    );
}