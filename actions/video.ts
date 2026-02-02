"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { VideoCreationData } from "@/types";
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

export async function getSeriesById(seriesId: string) {
  const { userId } = await auth();

  if (!userId) {
    return { error: "Unauthorized" };
  }

  const supabase = await createAdminClient();

  const { data, error } = await supabase
    .from("videos")
    .select("*")
    .eq("id", seriesId)
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching series:", error);
    return { error: error.message };
  }

  return { data };
}

export async function updateSeries(seriesId: string, data: Partial<VideoCreationData>) {
    const { userId } = await auth();

    if (!userId) {
        return { error: "Unauthorized" };
    }

    const supabase = await createAdminClient();

    // Map frontend data to DB columns
    const updateData: any = {};
    if (data.niche) updateData.niche = data.niche;
    if (data.language) updateData.language = data.language;
    if (data.voice) updateData.voice = data.voice;
    if (data.music) updateData.music = data.music;
    if (data.videoStyle) updateData.video_style = data.videoStyle;
    if (data.captionStyle) updateData.caption_style = data.captionStyle;
    if (data.seriesName) updateData.series_name = data.seriesName;
    if (data.duration) updateData.duration = data.duration;
    if (data.platform) updateData.platform = Array.isArray(data.platform) ? data.platform.join(',') : data.platform;
    if (data.scheduleTime) updateData.schedule_time = new Date(data.scheduleTime).toISOString();

    const { error } = await supabase
        .from("videos")
        .update(updateData)
        .eq("id", seriesId)
        .eq("user_id", userId);

    if (error) {
        console.error("Error updating series:", error);
        return { error: error.message };
    }

    revalidatePath("/dashboard");
    return { success: true };
}
