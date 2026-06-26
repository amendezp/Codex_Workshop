import { NextResponse } from "next/server";
import { getDb, hasDbConfig } from "@/lib/db";

export async function POST(request: Request) {
  const { email, completedItems, completedSteps, completedTracks } =
    await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  if (!hasDbConfig()) {
    return NextResponse.json({ success: true, mode: "local-only" });
  }

  try {
    const sql = getDb();

    await sql`
      UPDATE users
      SET
        completed_items = ${completedItems as string[]}::text[],
        completed_steps = ${completedSteps as string[]}::text[],
        completed_tracks = ${completedTracks as string[]}::text[],
        last_synced_at = NOW()
      WHERE email = ${email}
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Progress Sync Error]", error);
    // Silent failure — localStorage is the primary store
    return NextResponse.json({ success: false });
  }
}
