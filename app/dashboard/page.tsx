
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
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-xl mb-8">Welcome, {user.firstName}!</p>
      <div className="p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Your Account Details</h2>
        <ul className="space-y-2">
            <li><strong>User ID:</strong> {userId}</li>
            <li><strong>Email:</strong> {user.emailAddresses[0].emailAddress}</li>
        </ul>
      </div>
    </div>
  );
}
