import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectPostgres = async () => {
  const client = new Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: parseInt(process.env.PG_PORT || '5432', 10),
  });

  try {
    await client.connect();
    console.log('Connected to PostgreSQL');
  } catch (error) {
    console.error('Failed to connect to PostgreSQL', error);
    throw error;
  }

  return client;
};

export default connectPostgres;
