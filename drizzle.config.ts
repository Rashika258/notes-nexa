import { Config } from 'drizzle-kit';


import * as dotenv from 'dotenv';
import { log } from 'console';
dotenv.config({
    path:'.env'
})

if(!process.env.DATABASE_URL) {
    log('cannot find DB Url')
}

export default {
    schema:'./src/lib/supabase/schema.ts',
    out:'./migrations',
    driver:'pg',
    dbCredentials:{
        connectionString: process.env.DATABASE_URL || ''
    }
} satisfies Config