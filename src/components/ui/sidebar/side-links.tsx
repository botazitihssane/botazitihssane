"use client";
import React from "react";
import {
    TbBrandGithubFilled, TbBrandLinkedin, TbMail
} from "react-icons/tb";
import {SideBar} from "@/components/ui/sidebar/sidebar";

export function SideBarLinks() {
    const sideItems = [
        {
            link: "https://github.com/botazitihssane",
            icon: <TbBrandGithubFilled className="h-6 w-6 text-blue-500 dark:text-white"/>,
        },
        {
            link: "https://www.linkedin.com/in/ihssanebotazit/",
            icon: <TbBrandLinkedin className="h-6 w-6 text-blue-500 dark:text-white"/>,
        },
    ];
    return (
        <>
            <div
                className="fixed  w-1/2 lg:w-28 right-0 bottom-0 lg:bottom-24 flex flex-row lg:flex-col justify-end lg:items-center lg:h-5/6">
                <SideBar sideItems={sideItems}/>
            </div>
            <div className="fixed w-28 hidden right-0 bottom-0 lg:flex flex-col justify-end items-center h-1/6">
                <div className="bg-blue-500 h-20 w-px"/>
            </div>
            <div className="fixed hidden lg:w-28  w-1/2  left-0 bottom-0 lg:bottom-64 lg:flex  lg:flex-col lg:justify-end lg:items-center lg:h-5/6">
                <a href="mailto:botazitihssane@outlook.com"
                   className="text-blue-500 dark:text-white flex flex-col items-center">
                    <span
                        className="whitespace-nowrap lg:transform lg:-rotate-90 font-normal antialiased">botazitihssane@outlook.com</span>
                </a>
            </div>

            <div className="fixed w-28 hidden left-0 bottom-0 lg:flex flex-col justify-end items-center h-1/6">
                <div className="bg-blue-500 h-44 w-px"/>
            </div>

        </>

    )
        ;
}

