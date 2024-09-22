import { useEffect, useState } from "react";


export const CircularProgressBar = ({ progressValue = 0 }) => {

    const [offset, setOffset] = useState(0);

    const circleRadius = 70;
    const circleCircumference = 2 * Math.PI * circleRadius;

    useEffect( () => {

        const newOffset = circleCircumference  * ((100 - progressValue) / 100);
        setOffset(newOffset);

    }, [progressValue]);

    return (
        <svg width="64" height="64" viewBox="0 0 160 160" className=" -rotate-90">
            <circle r="70" cx="80" cy="80" fill="transparent" stroke="#e0e0e0" stroke-width="20px"></circle>
            <circle r="70" cx="80" cy="80" fill="transparent" stroke="#60e6a8" strokeWidth="20px" strokeDasharray={circleCircumference + 'px'} strokeDashoffset={offset + 'px'} className=" transition-all ease-in-out duration-300" strokeLinecap="round"></circle>
        </svg>
    );
}