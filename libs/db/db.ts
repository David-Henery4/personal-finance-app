import {drizzle} from "drizzle-orm/neon-http";
import {neon} from "@neondatabase/serverless";
import { config } from "dotenv";

config({path: ".env"}); // Might need to change path

const sql = neon(process.env.DATABASE_URL!) // Might need a pre-fix (EG: PUBLIC_NEXT or something)
export const db = drizzle({client: sql})
