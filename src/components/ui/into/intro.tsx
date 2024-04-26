'use client';
import React, {PropsWithChildren, useState, useEffect} from "react";
import Image from "next/image";
import avatar from "/public/images/avatar.png";
import {Button} from "@/components/ui/button/moving-border";

const Intro = ({children}: PropsWithChildren) => {
    return (
        <>
            <div className="flex">
                <div className="flex-1 items-center justify-start">
                    <div className="flex flex-col items-start justify-center h-[750px] ">
                        <>
                            <div
                                className="text-base sm:text-xl md:text-2xl flex justify-center items-center lg:text-2xl font-semibold text-center mt-6 text-sky-500 italic">
                                <div className="h-2 w-6 border-b border-sky-500 italic mr-0.5 "></div>
                                <p> Hello ! </p>
                            </div>
                            <div
                                className={"text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mt-6 text-neutral-400"}>
                                <p> I&apos;m Ihssane Botazit</p>
                            </div>
                            <div
                                className={"text-base sm:text-xl md:text-xl lg:text-xl font-normal text-justify mt-6 text-slate-500"}>
                                <p>I&apos;m a <span className="text-sky-500">software engineering intern </span>deeply
                                    passionate about <span className="text-sky-500">full-stack development</span>,
                                    particularly in <span className="text-pink-700"> Java</span>,<span
                                        className="text-pink-700"> React</span>, and <span
                                        className="text-pink-700">Angular</span>. I&apos;m driven by the
                                    excitement
                                    of building robust applications that seamlessly integrate frontend and backend
                                    technologies. Additionally, I&apos;m enthusiastic about exploring the potential
                                    of<span className="text-sky-500"> blockchain technology </span> to
                                    revolutionize various industries. Let&apos;s collaborate and create impactful
                                    solutions together!</p>
                            </div>
                            <div
                                className="text-base sm:text-xl md:text-xl lg:text-xl font-normal text-justify mt-14 text-slate-500">
                                <Button>
                                    Download resume
                                </Button>
                            </div>
                        </>
                    </div>
                </div>
                <div className="flex  items-center justify-center">
                    <div className="animate-float">
                        <Image src={avatar} alt="Avatar" width={500} height={500}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
