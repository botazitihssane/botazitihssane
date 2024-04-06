"use client";
import React from "react";
import {FloatingNav} from "./floating-navbar";
import {
    TbDevicesCode,
    TbBlockquote, TbFileCv, TbUserCode
} from "react-icons/tb";

export function FloatingNavbar() {
    const navItems = [
        {
            name: "About",
            link: "/",
            icon: <TbUserCode  className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Resume",
            link: "/",
            icon: <TbFileCv className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Projects",
            link: "/",
            icon: <TbDevicesCode className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Testimonial",
            link: "/",
            icon: <TbBlockquote className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },

    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems}/>
        </div>
    );
}

