import { Client } from 'pg';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const migrateDatabase = async () => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
    });

    try {
        await client.connect();
        console.log('Connected to the database.');

        const sql = readFileSync(resolve(__dirname, '../db/migrations.sql')).toString();
        await client.query(sql);
        console.log('Database migration completed successfully.');
    } catch (error) {
        console.error('Error during migration:', error);
    } finally {
        await client.end();
        console.log('Database connection closed.');
    }
};

migrateDatabase();