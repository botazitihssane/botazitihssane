const { db } = require('@vercel/postgres');

async function seedTestimonials(client) {
    try {
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS testimonials (
                id SERIAL PRIMARY KEY,
                fullname VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                position VARCHAR(255),
                role VARCHAR(255),
                testimonial TEXT NOT NULL,
                show BOOLEAN DEFAULT false
            );
        `;

        console.log(`Created "testimonials" table`);

        return {
            createTable
        };
    } catch (error) {
        console.error('Error seeding testimonials:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedTestimonials(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});