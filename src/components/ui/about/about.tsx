'use client';
import {PropsWithChildren} from "react";

const About = ({children}: PropsWithChildren) => {
    return (
        <div className="flex justify-center items-center h-[900px]">
            <div
                className="bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl rounded-lg w-[1100px] h-screen flex justify-center pr-10 pl-10 pt-6">
                <div className="flex flex-col items-start mt-5">
                    <div className="text-center">
                        <h1 className="sm:text-xl md:text-2xl lg:text-3xl text-white font-semibold mb-4">About Me</h1>
                        <p
                            className={"text-base sm:text-xl md:text-xl lg:text-xl font-normal text-justify mt-6 text-slate-500"}>
                            During my first year at <span className="text-sky-500">FST Settat</span>, I stumbled upon
                            software development while pursuing a
                            completely different path in biology, geology, and chemistry. It was during a secondary
                            course on databases and basic web development like HTML and CSS that I became intrigued by
                            the world of programming. Motivated by this newfound passion, I made the bold decision to
                            switch gears and pursue a software engineering program. This led me to enroll at the
                            <span className="text-sky-500"> Moroccan School of Engineering (EMSI)</span> in Marrakech,
                            where I embarked on a journey to delve
                            deeper into the realm of software engineering.</p>
                        <p className={"text-base sm:text-xl md:text-xl lg:text-xl font-normal text-justify mt-6 text-slate-500"}>

                            Throughout my five years at EMSI, I delved into various programming languages and tools
                            through hands-on projects. Each project not only deepened my enjoyment of programming but
                            also expanded my knowledge base. It felt like I was carving my own path in the technology
                            landscape, continually improving my coding skills with each endeavor.
                        </p>
                        <p className={"text-base sm:text-xl md:text-xl lg:text-xl font-normal text-justify mt-6 text-slate-500"}>
                            Along this journey, I encountered numerous challenges that served as opportunities for
                            growth and learning. From
                            <span className="text-pink-700"> fixing tricky problems in code </span>,
                            <span className="text-pink-700">crafting aesthetically pleasing designs</span>, or
                            <span className="text-pink-700"> tackling project architecture </span>.
                            Overcoming these
                            challenges not
                            only
                            boosted
                            my confidence but also fueled my
                            passion for coding.
                        </p>
                        <p className={"text-base sm:text-xl md:text-xl lg:text-xl font-normal text-justify mt-6 text-slate-500"}>

                            As I approach the end of my journey at EMSI, I am grateful for the experiences that have
                            shaped me into the programmer I am today. Each line of code I&apos;ve written signifies not
                            only
                            a technical accomplishment but also reflects my enthusiasm for innovation and my dedication
                            to mastering my craft.
                        </p>
                        <p className={"text-base sm:text-xl md:text-xl lg:text-xl font-normal text-justify mt-6 text-slate-500"}>

                            Looking forward, I am excited to begin my professional journey in software engineering. I
                            eagerly anticipate the chance to explore new technologies, tackle fresh challenges, and make
                            meaningful contributions to the ever-evolving tech landscape. Already, I have taken my
                            initial steps into this professional world by completing my final year project at <span
                            className="text-sky-500">Norsys Afrique</span>,
                            and I look forward to continuing to grow and learn in this field.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default About;
