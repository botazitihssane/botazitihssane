'use client';
import {PropsWithChildren, useState} from "react";
import {CardStack} from "@/components/ui/card-stack/card-stack";
import {HoverBorderGradient} from "@/components/ui/button/hover-border-gradiant-button";
import {TestimonialForm} from "@/components/ui/form/testimonial-form";

const Testimonial = ({children}: PropsWithChildren) => {
    const [showForm, setShowForm] = useState(false);

    const cardData = [
        {
            id: 1,
            name: "John Doe 20",
            designation: "Software Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing hhhhhhhhhhhhhhhggggggggggggggggggggjj",
        },
        {
            id: 2,
            name: "John Doe 20",
            designation: "Software Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing hhhhhhhhhhhhhhhggggggggggggggggggggjj",
        }, {
            id: 3,
            name: "John Doe 20",
            designation: "Software Engineer",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing hhhhhhhhhhhhhhhggggggggggggggggggggjj",
        },
    ];

    const handleLeaveCommentClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className="flex justify-center items-center h-[300px]">
            {showForm && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="p-8 rounded-md shadow-md">
                        <TestimonialForm onClose={handleCloseForm}/>
                    </div>
                </div>
            )}
            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="text-center">
                    <h1 className="w-full sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-4 text-center">
                        Perspectives from Former Teammates, Instructors, Mentors and Supervisors
                    </h1>
                    <p className="w-full text-base sm:text-xl md:text-xl lg:text-xl font-normal mb-4 text-slate-500 text-center">
                        Did we work together? Leave a comment too!
                    </p>
                    <div className="w-full mb-4 flex justify-center">
                        <HoverBorderGradient onClick={handleLeaveCommentClick}>
                            Leave a comment
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <CardStack items={cardData}/>
                <p className="text-center text-base text-neutral-500">Give the card a little extra time by simply
                    hovering over it! 😉</p>
            </div>
        </div>
    );
}
export default Testimonial