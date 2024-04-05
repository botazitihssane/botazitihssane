"use client";
import React from "react";
import {FloatingNav} from "./floating-navbar";
import {
    TbUser,
    TbSquareRoundedLetterA,
    TbPyramid,
    TbDevicesCode,
    TbCode,
    TbCertificate,
    TbBlockquote
} from "react-icons/tb";

export function FloatingNavbar() {
    const navItems = [
        {
            name: "About",
            link: "/",
            icon: <TbSquareRoundedLetterA className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Resume",
            link: "/",
            icon: <TbUser className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Projects",
            link: "/about",
            icon: <TbDevicesCode className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Testimonial",
            link: "/about",
            icon: <TbBlockquote className="h-4 w-4 text-neutral-500 dark:text-white"/>,
        },
        {
            name: "Contact",
            link: "/contact",
            icon: (
                <TbPyramid className="h-4 w-4 text-neutral-500 dark:text-white"/>
            ),
        },
    ];
    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems}/>
        </div>
    );
}

