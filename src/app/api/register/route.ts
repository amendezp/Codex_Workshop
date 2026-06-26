import { NextResponse } from "next/server";
import { getDb, hasDbConfig } from "@/lib/db";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  if (!hasDbConfig()) {
    return NextResponse.json({
      success: true,
      progress: null,
      mode: "local-only",
    });
  }

  try {
    const sql = getDb();

    // Upsert: insert if new, update last_synced_at if returning
    const rows = await sql`
      INSERT INTO users (email)
      VALUES (${email})
      ON CONFLICT (email) DO UPDATE SET last_synced_at = NOW()
      RETURNING completed_items, completed_steps, completed_tracks
    `;

    const user = rows[0];
    return NextResponse.json({
      success: true,
      progress: {
        completedItems: user.completed_items || [],
        completedSteps: user.completed_steps || [],
        completedTracks: user.completed_tracks || [],
      },
    });
  } catch (error) {
    console.error("[Register Error]", error);
    // Graceful fallback — registration works locally even if DB is down
    return NextResponse.json({
      success: true,
      progress: null,
    });
  }
}
