"use client";
import React, {useState} from "react";
import {cn} from "@/utils/cn";
import {Label} from "@/components/ui/form/label";
import {Input} from "@/components/ui/form/input";
import {FaTimes} from 'react-icons/fa';
import {submitTestimonial} from "@/lib/actions";


interface TestimonialFormProps {
    onClose: () => void;
}

export function TestimonialForm({onClose}: TestimonialFormProps) {
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ success: boolean, message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        const formData = new FormData(e.currentTarget)
        const result = await submitTestimonial(formData);

        setSubmitMessage(result);
        setSubmitting(false);
    };
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black">
            <div className="flex justify-end">
                <FaTimes className="text-white cursor-pointer" onClick={onClose}/>
            </div>
            <h2 className="font-bold text-xl text-neutral-200">
                Share your testimonial
            </h2>
            <p className="text-sm max-w-sm mt-2 text-neutral-300">
                We value your opinion! Please take a moment to share your thoughts.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="fullname">Full Name</Label>
                    <Input id="fullname" name="fullname" placeholder="Full name" type="text" required/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" placeholder="Email address" type="text" required/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="position">Position</Label>
                    <Input id="position" name="position" placeholder="Your position when we collaborated" type="text"
                           required/>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" type="select" name="role" required>
                        <option value="">Select your role</option>
                        <option value="Mentor">Mentor</option>
                        <option value="Lead Dev">Lead Dev</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Co-worker">Co-worker</option>
                        <option value="Teacher">Teacher</option>
                    </Input>
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="testimonial">Testimonial</Label>
                    <Input id="testimonial" name="testimonial" placeholder="Share your experience" type="textarea"
                           textareaClassName="h-40"
                           maxLength={200} required/>
                </LabelInputContainer>
                <button
                    className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit" disabled={submitting}
                >
                    {submitting ? 'Sharing ...' : 'Share your testimonial →'}
                    <BottomGradient/>
                </button>
                {submitMessage && (
                    <div className={`text-center mt-4 ${submitMessage.success ? 'text-green-400' : 'text-red-400'}`}>
                        <p>{submitMessage.message}</p>
                        {submitMessage.success && (
                            <p className="mt-2"><a href="/" className="text-sky-400 hover:text-sky-600 underline">Continue
                                browsing the
                                website</a></p>
                        )}
                    </div>
                )}
            </form>
        </div>
    )
        ;
}

const BottomGradient = () => {
    return (
        <>
            <span
                className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"/>
            <span
                className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"/>
        </>
    );
};


const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
