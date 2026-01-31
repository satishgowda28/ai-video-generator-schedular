
import { syncUser } from "@/actions/user";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    redirect("/sign-in");
  }

  // Sync user to Supabase
  await syncUser();

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Example Stats - Placeholder for future implementation */}
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Total Videos</h3>
            <div className="text-2xl font-bold">12</div>
        </div>
        <div className="p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h3 className="text-sm font-medium text-muted-foreground">Scheduled</h3>
            <div className="text-2xl font-bold">4</div>
        </div>
      </div>
      
      <div className="p-6 border rounded-lg shadow-sm bg-card">
        <h2 className="text-xl font-semibold mb-4">Your Account Details</h2>
        <ul className="space-y-2 text-sm">
            <li><strong>User ID:</strong> {userId}</li>
            <li><strong>Name:</strong> {user.firstName} {user.lastName}</li>
            <li><strong>Email:</strong> {user.emailAddresses[0].emailAddress}</li>
        </ul>
      </div>
    </div>
  );
}
