import React from "react";

export function SkillsButton({
                                 skill
                             }: {
    skill: string
}) {
    return (
        <button className="p-[3px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg"/>
            <div
                className="px-8 py-2  bg-black rounded-[6px] text-sm  relative flex items-center justify-center group transition duration-200 text-white hover:bg-transparent">
                {skill}
            </div>
        </button>
    );
}
