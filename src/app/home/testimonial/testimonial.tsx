'use client';
import {PropsWithChildren, useState} from "react";
import {CardStack} from "@/components/ui/card-stack/card-stack";
import {HoverBorderGradient} from "@/components/ui/button/hover-border-gradiant-button";
import {TestimonialForm} from "@/components/ui/form/testimonial-form";
import {ComponentProps} from "@/types/ComponentProps";

const Testimonial = ({children, id}: PropsWithChildren<ComponentProps>) => {
    const [showForm, setShowForm] = useState(false);

    const cardData = [
        {
            id: 1,
            name: "Person Z",
            designation: "Software Engineer",
            content: "Waiting for comments to be approved"
        },
        {
            id: 2,
            name: "Person Y",
            designation: "Software Engineer",
            content: "Waiting for comments to be approved"
        }, {
            id: 3,
            name: "Person X",
            designation: "Software Engineer",
            content: "Waiting for comments to be approved"
        },
    ];

    const handleLeaveCommentClick = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className="flex justify-center items-center flex-col md:flex-row m-5">
            {showForm && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="p-8 rounded-md shadow-md">
                        <TestimonialForm onClose={handleCloseForm}/>
                    </div>
                </div>
            )}
            <div className="w-full md:w-1/2 h-full flex justify-center items-center">
                <div className="text-center">
                    <h1 className="w-full sm:text-base md:text-base lg:text-xl text-white font-semibold mb-4 text-center">
                        Perspectives from Former Teammates, Instructors, Mentors and Supervisors
                    </h1>
                    <p className="w-full text-base sm:text-sm md:text-base lg:text-base font-normal mb-4 text-slate-500 text-center">
                        Did we work together? Leave a comment too!
                    </p>
                    <div className="w-full mb-14 flex justify-center">
                        <HoverBorderGradient onClick={handleLeaveCommentClick}>
                            Leave a comment
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col items-center justify-center">
                <CardStack items={cardData}/>
                <p className="text-center text-base text-neutral-500">Give the card a little extra time by simply
                    hovering over it! 😉</p>
            </div>
        </div>
    );
}
export default Testimonial