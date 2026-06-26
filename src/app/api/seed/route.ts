import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  if (searchParams.get("token") !== process.env.ADMIN_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const sql = getDb();

    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        registered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        completed_items TEXT[] DEFAULT '{}',
        completed_steps TEXT[] DEFAULT '{}',
        completed_tracks TEXT[] DEFAULT '{}',
        last_synced_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `;

    await sql`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email)
    `;

    return NextResponse.json({
      success: true,
      message: "Database seeded successfully",
    });
  } catch (error) {
    console.error("[Seed Error]", error);
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    );
  }
}
