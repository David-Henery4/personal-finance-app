import { drizzle } from "drizzle-orm/neon-http";
import { neon, neonConfig } from "@neondatabase/serverless";
import { config } from "dotenv";
import ws from "ws";
import * as schema from "./schema";

neonConfig.webSocketConstructor = ws;
config({ path: ".env" }); // Might need to change path

const sql = neon(process.env.DATABASE_URL!); // Might need a pre-fix (EG: PUBLIC_NEXT or something)
export const db = drizzle({ client: sql, schema });
