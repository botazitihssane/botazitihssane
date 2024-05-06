'use client';
import {PropsWithChildren} from "react";
import {ComponentProps} from "@/types/ComponentProps";
import {InfiniteMovingCards} from "@/components/ui/moving-cards/infinite-moving-cards";

const Certificates = ({children, id}: PropsWithChildren<ComponentProps>) => {
    const certificates = [
        {
            image: "/certificates/Android_App_Development.png",
            link: "https://www.coursera.org/account/accomplishments/specialization/AHKR76GFEX7P",
            title: "Android App Development",
            details: "Coursera - Vanderbilt University"
        },
        {
            image: "/certificates/Building_Scalable_Java_Microservices_with_SpringBoot_and_Spring_Cloud.png",
            link: "https://www.coursera.org/account/accomplishments/verify/C4HHDPHSXGPJ",
            title: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
            details: "Coursera - Google Cloud"

        },
        {
            image: "/certificates/Developping_Back_End_Apps_with_Node.js_and_Express.png",
            link: "https://www.coursera.org/account/accomplishments/verify/B2MGXK9QNPYZ",
            title: "Developing Back-end Apps with Node.js and Express",
            details: "Coursera - IBM"
        },
        {
            image: "/certificates/DevOps_Cloud_Agile_Fondations.png",
            link: "https://www.coursera.org/account/accomplishments/specialization/ZSXZUKK2TCCE",
            title: "DevOps, Cloud, Agile Fondations",
            details: "Coursera - IBM"
        },
        {
            image: "/certificates/Front_End_Web_Development_with_React.png",
            link: "https://www.coursera.org/account/accomplishments/verify/JBHRHPER6CU9",
            title: "Front-end web development with React",
            details: "Coursera - The HONG KONG University of science and technology"
        },
        {
            image: "/certificates/Introduction_Cloud_Computing.png",
            link: "https://www.coursera.org/account/accomplishments/verify/DEUMS4R4N47P",
            title: "Introduction to Cloud Computing",
            details: "Coursera - IBM"
        },
        {
            image: "/certificates/Machine_Learning_with_Python.png",
            link: "https://www.coursera.org/account/accomplishments/verify/7L5RBP3K7KQU",
            title: "Machine learning with Python",
            details: "Coursera - IBM"
        },
        {
            image: "/certificates/Honoris_21st_Century_Soft_Skills_Certificate.png",
            link: "https://certificate.bcdiploma.com/check/4FE0CA7C5E9184DCD98880E90B2230EED2846CD971115239E5F54027D6CEFC3Cei9IcTIyY2VJWjZEd3dlUlN6MGhyUG5BWU4wbGc3Y2p4TTBiMzF1cVAyOWdpS012",
            title: "Honoris 21st Century Soft Skills Certificate",
            details: "Honoris Online Academy"
        },
    ];
    return (
        <div id={id} className="flex justify-center items-center">
            <div className="max-w-6xl w-full px-4">
                <div className="flex flex-col items-center">
                    <div className="text-center w-full mt-5">
                        <h1 className="sm:text-base md:text-xl lg:text-xl text-white font-semibold mb-4">
                            Certificate Portfolio
                        </h1>
                        <p className="text-center text-sm text-neutral-500 mb-4">
                            Click on a certificate to see full details 😉
                        </p>
                    </div>
                    <InfiniteMovingCards items={certificates}/>
                </div>
            </div>
        </div>
    )
        ;
}
export default Certificates;
