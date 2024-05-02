'use client';
import {PropsWithChildren} from "react";
import {CardStack} from "@/components/ui/card-stack/card-stack";
import {HoverBorderGradient} from "@/components/ui/button/hover-border-gradiant-button";

const Testimonial = ({children}: PropsWithChildren) => {
    const cardData = [
        {
            id: 1,
            name: "John Doe 20",
            designation: "Software Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: 8,
            name: "John  21",
            designation: "Software Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },{
            id: 9,
            name: "John Doe 23",
            designation: "Software Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },{
            id: 10,
            name: "John Doe 24",
            designation: "Software Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },


        {
            id: 2,
            name: "Jane Smith 2",
            designation: "UX Designer",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 5,
            name: "Jane Smith 3",
            designation: "UX Designer",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 6,
            name: "Jane Smith 4",
            designation: "UX Designer",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 7,
            name: "Jane Smith 5",
            designation: "UX Designer",
            content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];
    return (
        <div className="flex justify-center items-center h-[300px]">
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="text-center">
                    <h1 className="w-full sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-4 text-center">
                        Perspectives from Former Teammates, Instructors, Mentors and Supervisors
                    </h1>
                    <p className="w-full text-base sm:text-xl md:text-xl lg:text-xl font-normal mb-4 text-slate-500 text-center">
                        Did we work together? Leave a comment too!
                    </p>
                    <div className="w-full mb-4 flex justify-center">
                        <HoverBorderGradient>Leave a comment</HoverBorderGradient>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <CardStack items={cardData}/>
                <p className="text-center text-base text-neutral-500">Give the card a little extra time by simply hovering over it! 😉</p>
            </div>
        </div>
    );
}
export default Testimonial