
"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { auth, currentUser } from "@clerk/nextjs/server";

export async function syncUser() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user) {
    return { error: "User not authenticated" };
  }

  const supabase = await createAdminClient();
  console.log("=-=-=-=user details=-=-=-=-")
  console.log(user)
  console.log("=-=-=-=user ID=-=-=-=-")
  console.log(userId)
  // Lazy Sync: Check if user exists, if not, create them
  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (!existingUser) {
    const { error } = await supabase.from("users").insert({
      user_id: user.id,
      email: user.emailAddresses[0].emailAddress,
      name: `${user.firstName} ${user.lastName}`.trim(),
    });

    if (error) {
      console.error("Error syncing user to Supabase:", error);
      return { error: error.message };
    }
  }

  return { success: true };
}
