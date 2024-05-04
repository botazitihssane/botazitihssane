"use client";
import * as React from "react";
import {SelectHTMLAttributes, TextareaHTMLAttributes} from "react";
import {cn} from "@/utils/cn";
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: "text" | "textarea" | "select";
    textareaClassName?: string;
    maxLength?: number;
}

const Input = React.forwardRef<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
    InputProps
>(
    ({className, textareaClassName, type, maxLength, ...props}, ref) => {
        const radius = 100; // change this to increase the radius of the hover effect
        const [visible, setVisible] = React.useState(false);
        const [charCount, setCharCount] = React.useState(0);

        let mouseX = useMotionValue(0);
        let mouseY = useMotionValue(0);

        function handleMouseMove({currentTarget, clientX, clientY}: any) {
            let {left, top} = currentTarget.getBoundingClientRect();

            mouseX.set(clientX - left);
            mouseY.set(clientY - top);
        }

        const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const {value} = event.target;
            setCharCount(value.length);
        };

        const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
            const { value } = event.target;
            setCharCount(value.length);
        };

        // Render textarea if type is "textarea", otherwise render input
        return (
            <motion.div
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
                            var(--blue-500),
                            transparent 80%
                        )
                    `,
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => setVisible(false)}
                className="p-[2px] rounded-lg transition duration-300 group/input"
            >
                {type === "textarea" ? (
                    <div className="relative">
                        <textarea
                            className={cn(
                                `flex w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm placeholder-text-neutral-600 focus:outline-none focus:ring-[2px] focus:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
                                textareaClassName
                            )}
                            ref={ref as React.Ref<HTMLTextAreaElement>}
                            onChange={handleChange}
                            maxLength={maxLength}
                            {...props as TextareaHTMLAttributes<HTMLTextAreaElement>}
                        />
                        {maxLength && (
                            <div className="absolute bottom-2 right-2 text-sm text-neutral-500">
                                {charCount}/{maxLength}
                            </div>
                        )}
                    </div>
                ) : type === "select" ? (
                    <select
                        className={cn(
                            `flex w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm placeholder-text-neutral-600 focus:outline-none focus:ring-[2px] focus:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
                            className
                        )}
                        ref={ref as React.Ref<HTMLSelectElement>}
                        onChange={handleChangeSelect} // Use handleChange for select
                        {...props as SelectHTMLAttributes<HTMLSelectElement>}
                    />
                ) : (
                    <input
                        type={type}
                        className={cn(
                            `flex w-full border-none bg-zinc-800 text-white rounded-md px-3 py-2 text-sm placeholder-text-neutral-600 focus:outline-none focus:ring-[2px] focus:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400`,
                            className
                        )}
                        ref={ref as React.Ref<HTMLInputElement>}
                        onChange={handleChange} // Use handleChange for input
                        {...props}
                    />
                )}
            </motion.div>
        );
    }
);

Input.displayName = "Input";
export {Input};
