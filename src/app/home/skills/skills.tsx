import React, {PropsWithChildren} from "react";
import {ComponentProps} from "@/types/ComponentProps";
import {SkillsButton} from "@/components/ui/button/skillsButton";

const Skills = ({children, id}: PropsWithChildren<ComponentProps>) => {
    const skillSets = [
        {
            title: 'Frontend',
            skills: ["JavaScript", "TypeScript", "React", "Angular", "Tailwind", "NextJs", "CSS", "HTML"]
        },
        {title: 'Backend', skills: ["Java", "PHP", "Spring", "Laravel", "Firebase", "Python", "Django"]},
        {title: 'Databases', skills: ["PostgreSQL", "MySQL", "Oracle", "Firebase"]},
        {title: 'Mobile', skills: ["Flutter", "Dart"]},
        {title: 'Blockchain', skills: ["Solidity", "Truffle", "Ethereum"]},
        {title: 'Testing', skills: ["JUnit", "Mockito", "Selenium", "SonarQube"]},
        {title: 'DevOps', skills: ["Jenkins", "Docker"]}
    ];

    return (
        <div id={id} className="flex justify-center items-center m-5">
            <div className="justify-center pr-10  pt-6">
                <div className="flex flex-col items-start mt-5">
                    <div className="text-center">
                        <h1 className="sm:text-base md:text-xl lg:text-xl text-white font-semibold mb-4">Skills</h1>
                        <div className="text-start">
                            {skillSets.map((set, index) => (
                                <div key={index}>
                                    <h2 className=" text-slate-500 text-base font-semibold mb-2">{set.title}</h2>
                                    <div
                                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 w-full mb-5 max-w-7xl mx-auto gap-10">
                                        {set.skills.map((skill, idx) => (
                                            <SkillsButton key={idx} skill={skill}></SkillsButton>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
