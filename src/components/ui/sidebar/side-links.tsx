"use client";
import React from "react";
import {TbBrandGithubFilled, TbBrandLinkedin} from "react-icons/tb";
import {SideBar} from "@/components/ui/sidebar/sidebar";

export function SideBarLinks() {
    const sideItems = [
        {
            link: "https://github.com/botazitihssane",
            icon: <TbBrandGithubFilled className="h-6 w-6 text-blue-500 "/>,
        },
        {
            link: "https://www.linkedin.com/in/ihssanebotazit/",
            icon: <TbBrandLinkedin className="h-6 w-6 text-blue-500"/>,
        },
    ];
    return (
        <div className="hidden lg:flex lg:flex-col">
            <div
                className="fixed lg:w-28 right-0 bottom-0 lg:bottom-24 flex flex-col justify-end items-center lg:h-5/6 z-10">
                <SideBar sideItems={sideItems}/>
            </div>
            <div
                className="fixed lg:w-28 hidden lg:right-0 lg:bottom-0 lg:flex lg:flex-col lg:justify-end lg:items-center lg:h-1/6">
                <div className="bg-sky-500 h-20 w-px"/>
            </div>
            <div
                className="fixed hidden lg:w-28 w-1/2 left-0 bottom-0 lg:bottom-64 lg:flex lg:flex-col lg:justify-end lg:items-center lg:h-5/6">
                <a href="mailto:botazitihssane@outlook.com"
                   className="text-sky-500 flex flex-col text-base items-center">
                    <span
                        className="whitespace-nowrap lg:transform lg:-rotate-90 font-normal antialiased">botazitihssane@outlook.com</span>
                </a>
            </div>

            <div className="fixed lg:w-28 left-0 bottom-0 lg:flex lg:flex-col lg:justify-end lg:items-center lg:h-5/6">
                <div className="bg-sky-500 h-36 w-px"/>
            </div>

        </div>

    )
        ;
}

