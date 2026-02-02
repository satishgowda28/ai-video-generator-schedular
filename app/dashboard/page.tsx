import { syncUser } from "@/actions/user";
import { SeriesCard } from "@/components/dashboard/series-card";
import { Button } from "@/components/ui/button";
import { VideoSeries } from "@/types";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Plus } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // Sync user to Supabase
  await syncUser();

  // Construct absolute URL for API call
  // In production, you might want to set a BASE_URL env var, but using headers works for basic setups
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const apiUrl = `${protocol}://${host}/api/videos`;

  // Fetch user series via API
  const res = await fetch(apiUrl, {
    method: "GET",
    headers: {
      cookie: headersList.get("cookie") || "",
    },
    cache: "no-store", // Ensure fresh data
  });

  if (!res.ok) {
     console.error("Failed to fetch videos from API");
     // Handle error appropriately, maybe showing an empty state or error message
     // For now, if API fails, we'll assume empty or redirecting might be too aggressive
     // Let's just default to empty list
  }

  const { videos: seriesList } = res.ok ? await res.json() : { videos: [] };

  // Redirect if no series found
  if (!seriesList || seriesList.length === 0) {
    redirect("/dashboard/create");
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button asChild>
            <Link href="/dashboard/create">
                <Plus className="mr-2 h-4 w-4" /> Create New
            </Link>
          </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {seriesList.map((series: VideoSeries) => (
            <SeriesCard key={series.id} series={series} />
        ))}
      </div>
      
    </div>
  );
}
