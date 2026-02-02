"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function updateSeriesStatus(seriesId: string, status: 'active' | 'paused') {
  const { userId } = await auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const supabase = await createAdminClient();

  // Verify ownership and update
  const { error } = await supabase
    .from("videos")
    .update({ status })
    .eq("id", seriesId)
    .eq("user_id", userId); // Security check: ensure user owns the series

  if (error) {
    console.error("Error updating series status:", error);
    return { error: error.message };
  }
  
  revalidatePath("/dashboard");
  return { success: true };
}
