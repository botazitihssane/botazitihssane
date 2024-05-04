import {cn} from "@/utils/cn";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import Link from "next/link";

export const HoverEffect = ({
                                items,
                                className,
                            }: {
    items: {
        title: string;
        description: string;
        tools: string[];
        link?: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <Link
                    href={item?.link || ''}
                    key={item?.link}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800 block rounded-lg"
                                layoutId="hoverBackground"
                                initial={{opacity: 0}}
                                animate={{
                                    opacity: 1,
                                    transition: {duration: 0.15},
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: {duration: 0.15, delay: 0.2},
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                        <CardTools>{item.tools}</CardTools>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export const Card = ({
                         className,
                         children,
                     }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "h-full w-[440px] p-4 overflow-hidden bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl rounded-lg group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};
export const CardTitle = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 text-2xl", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
                                    className,
                                    children,
                                }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <p
            className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-base font-normal text-justify",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardTools = ({
                              className,
                              children,
                          }: {
    className?: string;
    children: string[];
}) => {
    return (
        <div
            className={cn("mt-8 tracking-wide leading-relaxed text-base font-semibold text-justify text-pink-700 flex flex-wrap", className)}>
            {children.map((tool, index) => (
                <span key={index} className="mr-4 mb-0.5">{tool}</span>
            ))}
        </div>
    );
};
