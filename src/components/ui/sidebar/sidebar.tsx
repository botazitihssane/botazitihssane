"use client";
import React from "react";
import {cn} from "@/utils/cn";
import Link from "next/link";
import {TbMail} from "react-icons/tb";

export const SideBar = ({
                            sideItems,
                            className,
                        }: {
    sideItems: {
        link: string;
        icon?: JSX.Element;
    }[];
    className?: string;
}) => {


    return (
        <div className={`flex ${className || ""} lg:flex-col`}>
            {sideItems.map((navItem: any, idx: number) => (
                <Link
                    key={`link=${idx}`}
                    href={navItem.link}
                    className={cn(
                        "relative lg:items-center lg:justify-center items-end justify-items-end hover:text-neutral-300 space-x-1 text-neutral-100 p-2"
                    )}
                >
                    <span className="block sm:block">{navItem.icon}</span>
                </Link>
            ))}
            {/* Render mail icon within the same flex container */}
            <a href="mailto:botazitihssane@outlook.com"
               className="lg:hidden text-indigo-700 dark:text-white flex flex-col items-center p-2">
                <TbMail className="h-6 w-6 text-indigo-700 dark:text-white"/>
            </a>
        </div>

    )
        ;
};
