import React from "react";
import {FloatingNav} from "./floating-navbar";
import {TbBlockquote, TbCertificate, TbDevicesCode, TbToolsOff, TbUserCode} from "react-icons/tb";

import useScrollTo from "@/hooks/useScrollTo";

export function FloatingNavbar() {
    const {scrollTo} = useScrollTo();

    const navItems = [
        {
            name: "About",
            icon: <TbUserCode className="h-4 w-4 text-neutral-500 dark:text-white"/>,
            link: "/#about"
        },
        {
            name: "Skills",
            icon: <TbToolsOff className="h-4 w-4 text-neutral-500 dark:text-white"/>,
            link: "/#skills"
        },
        {
            name: "Projects",
            icon: <TbDevicesCode className="h-4 w-4 text-neutral-500 dark:text-white"/>,
            link: "/#projects"
        },
        {
            name: "Testimonial",
            icon: <TbBlockquote className="h-4 w-4 text-neutral-500 dark:text-white"/>,
            link: "/#testimonial"
        },
        {
            name: "Certificates",
            icon: <TbCertificate className="h-4 w-4 text-neutral-500 dark:text-white"/>,
            link: "/#certificates"
        },
    ];

    return (
        <div className="relative  w-full">
            <FloatingNav navItems={navItems}/>
        </div>
    );
}
