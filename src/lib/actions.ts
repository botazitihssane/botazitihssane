'use server';

import {sql} from '@vercel/postgres';
import {z} from 'zod';

const TestimonialSchema = z.object({
    fullname: z.string().nonempty(),
    email: z.string().email(),
    role: z.string().nonempty(),
    position: z.string().nonempty(),
    testimonial: z.string().nonempty(),
});

export async function submitTestimonial(formData: FormData) {
    try {

        const testimonialData = TestimonialSchema.parse({
            fullname: formData.get('fullname'),
            email: formData.get('email'),
            position: formData.get('position'),
            role: formData.get('role'),
            testimonial: formData.get('testimonial'),
        });

        await sql`
            INSERT INTO testimonials (fullname, email, position,role, testimonial, show)
            VALUES (${testimonialData.fullname}, ${testimonialData.email}, ${testimonialData.position},${testimonialData.role}, ${testimonialData.testimonial}, false)
        `;

        return {success: true, message: 'Your testimonial was sent successfully 👍 '};
    } catch (error) {
        return {success: false, message: 'Retry sending your testimonial 😕'};
    }
}

export async function fetchTestimonials() {
    try {
        const testimonials = await sql`
            SELECT fullname, email, position, role, testimonial
            FROM testimonials
            WHERE show = true
        `;
        return testimonials;
    } catch (error) {
        throw new Error('Error fetching testimonials: ');
    }
}