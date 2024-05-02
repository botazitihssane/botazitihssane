'use client';
import {PropsWithChildren} from "react";
import {HoverEffect} from "@/components/ui/card/card-hover-effect";

const Projects = ({children}: PropsWithChildren) => {
    const projectItems = [
        {
            title: "Eval",
            description: "An interactive coding game designed for corporations to assess candidates suitability for specific positions and coding skills. The platform offers a diverse range of question formats and provides detailed reports on candidate results for both candidates and recruiters.",
            tools: [
                "Typescript",
                "React",
                "Java",
                "Spring",
                "Figma",
                "Docker",
                "Jenkins",
                "Keycloak",
                "PostgreSQL"
            ]
        },
        {
            title: "eWallet",
            description: "A versatile web platform empowering users to manage their finances effectively. Seamlessly budget expenses, allocate savings, and track monthly goals, all enhanced with sophisticated data modeling capabilities.",
            tools: [
                "Typescript",
                "Angular",
                "Java",
                "Spring",
                "MySQL"
            ]
        },
        {
            title: "CivilChain",
            description: "An innovative application leveraging web3 technology to securely store civil status contracts on the blockchain network through smart contracts. It facilitates also the efficient management of the Ministry of the Interior's administrative structure.",
            tools: [
                "Solidity",
                "Ethereum",
                "Truffle",
                "Ganache",
                "Smart contract",
                "Java",
                "Spring",
                "JavaScript",
                "React",
                "MySQL"
            ]
        },
        {
            title: "DocConnect",
            description: "A virtual healthcare platform enabling online video appointments between patients and doctors. Born out of the pandemic's necessity, it provides a safe and efficient way for healthcare professionals to connect with their patients remotely.",
            tools: [
                "Laravel",
                "PHP",
                "Blade",
                "MySQL"
            ]
        },
        {
            title: "Workout Buddy",
            description: "A fitness application designed to help you track your daily food intake, count calories, schedule workouts, and plan your path to achieving your fitness goals. This app provides personalized workout plans, meal recommendations, and sleep schedules tailored to your specific objectives.",
            tools: [
                "Flutter",
                "Dart",
                "Firebase",
            ]
        },
        {
            title: "Portfolio",
            description: "A window into my journey, projects, skills, and testimonials, the site you're currently exploring.",
            tools: [
                "NextJs",
                "Typescript"
            ]
        },
    ];

    return (
        <div className="flex justify-center items-start h-[950px]">
            <div
                className="w-full items-center">
                <div className="flex flex-col items-start">
                    <div className="text-center w-full mt-5">
                        <h1 className="sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-4 ">My
                            projects</h1>
                    </div>
                    <HoverEffect items={projectItems}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
