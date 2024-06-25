import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http'
if(!process.env.DATABASE_URL) {
    throw new Error('database url not found')
}

const sql = neon(process.env.DATABASE_URL);

export const db = drizzle(sql);


// src/lib/db/index.ts
// import { neon } from '@neondatabase/serverless';
// import { drizzle, NeonHttpDatabase } from 'drizzle-orm/neon-http';
// import * as schema from '@/lib/db/schema';

// if (!process.env.DATABASE_URL) {
//   throw new Error('database url not found');
// }
// const sql = neon(process.env.DATABASE_URL);
