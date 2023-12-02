import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from '../../../migrations/schema';
import { log } from 'console';
import {} from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

dotenv.config({
  path: '.env',
});

if (!process.env.DATABASE_URL) {
  console.log(' 😢 No DB URL');
}

const client = postgres(process.env.DATABASE_URL as string);
const db = drizzle(client, { schema });
const migrateDb = async () => {
  try {
    log(' 🟠  Migrating client');

    await migrate;
  } catch (error) {
    log(' 🟢  Successfully Migrated');
  }

  console.log(' 🔴 Migrating client');
};

migrateDb();
export default db;
