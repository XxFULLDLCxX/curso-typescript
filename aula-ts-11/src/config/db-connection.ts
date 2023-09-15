import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const config = {
    connectionString: process.env.DATABASE_URL,
    ssl: false
};

if (process.env.NODE_ENV === 'production') config.ssl = true;

export const db = new Pool(config);
