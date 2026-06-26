import { redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CHECKLIST_ITEMS, TRACKS } from "@/lib/constants";

interface UserRow {
  id: number;
  email: string;
  registered_at: string;
  completed_items: string[];
  completed_steps: string[];
  completed_tracks: string[];
  last_synced_at: string;
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const params = await searchParams;
  if (params.token !== process.env.ADMIN_TOKEN) {
    redirect("/");
  }

  let users: UserRow[] = [];
  let error: string | null = null;

  try {
    const sql = getDb();
    const rows = await sql`
      SELECT * FROM users ORDER BY registered_at DESC
    `;
    users = rows as UserRow[];
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to fetch users";
  }

  // Summary stats
  const totalUsers = users.length;
  const trackCounts = TRACKS.map((track) => ({
    id: track.id,
    title: track.title,
    tag: track.tag,
    count: users.filter((u) => u.completed_tracks?.includes(track.id)).length,
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="mb-2 font-serif text-3xl font-bold tracking-tight">
        Workshop Admin
      </h1>
      <p className="mb-8 text-muted-foreground">
        Registered users and their progress
      </p>

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
          <p className="font-medium text-red-800">Database Error</p>
          <p className="mt-1 text-sm text-red-600">{error}</p>
          <p className="mt-3 text-xs text-red-500">
            Have you run the seed endpoint? Visit{" "}
            <code className="rounded bg-red-100 px-1">/api/seed?token=YOUR_TOKEN</code>{" "}
            to create the database table.
          </p>
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border bg-card p-4 text-center">
              <p className="text-3xl font-bold text-foreground">{totalUsers}</p>
              <p className="text-sm text-muted-foreground">Registered</p>
            </div>
            {trackCounts.map((track) => (
              <div
                key={track.id}
                className="rounded-xl border bg-card p-4 text-center"
              >
                <p className="text-3xl font-bold text-foreground">
                  {track.count}
                </p>
                <p className="text-sm text-muted-foreground">
                  {track.tag || track.title}
                </p>
              </div>
            ))}
          </div>

          {/* Users Table */}
          {users.length === 0 ? (
            <div className="rounded-lg border bg-muted/30 p-12 text-center">
              <p className="text-muted-foreground">
                No users registered yet.
              </p>
            </div>
          ) : (
            <div className="rounded-xl border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Registered</TableHead>
                    <TableHead>Checklist</TableHead>
                    <TableHead>Tracks</TableHead>
                    <TableHead>Steps</TableHead>
                    <TableHead>Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user, i) => (
                    <TableRow key={user.id}>
                      <TableCell className="text-muted-foreground">
                        {i + 1}
                      </TableCell>
                      <TableCell className="font-medium">
                        {user.email}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {formatDate(user.registered_at)}
                      </TableCell>
                      <TableCell>
                        <span className="text-sm">
                          {user.completed_items?.length || 0}/
                          {CHECKLIST_ITEMS.length}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {TRACKS.map((track) => {
                            const completed =
                              user.completed_tracks?.includes(track.id);
                            return (
                              <Badge
                                key={track.id}
                                variant={completed ? "default" : "outline"}
                                className={
                                  completed
                                    ? track.id === "visualization"
                                      ? "bg-blue-600"
                                      : track.id === "mock-interview"
                                        ? "bg-red-800"
                                        : "bg-amber-600"
                                    : "text-muted-foreground"
                                }
                              >
                                {track.tag || track.title}
                              </Badge>
                            );
                          })}
                        </div>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {user.completed_steps?.length || 0}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {user.last_synced_at
                          ? timeAgo(user.last_synced_at)
                          : "—"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </>
      )}
    </div>
  );
}
