import { neon } from "@neondatabase/serverless";

export function hasDbConfig() {
  return Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);
}

export function getDb() {
  const databaseUrl = process.env.POSTGRES_URL || process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("No database URL found. Set POSTGRES_URL or DATABASE_URL.");
  }
  return neon(databaseUrl);
}
