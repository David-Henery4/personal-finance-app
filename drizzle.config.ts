import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" }); // Might need to change path

export default defineConfig({
  schema: "./libs/db/schema.ts",
  out: "./libs/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
