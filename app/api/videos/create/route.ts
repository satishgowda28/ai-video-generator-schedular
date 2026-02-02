import { createAdminClient } from "@/lib/supabase/server";
import { VideoCreationData } from "@/types";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const data = body as VideoCreationData;

    // Basic validation
    if (!data.niche) {
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const supabase = await createAdminClient();

    const { data: video, error } = await supabase
      .from("videos")
      .insert({
        user_id: userId,
        niche: data.niche,
        language: data.language,
        voice: data.voice,
        music: data.music,
        video_style: data.videoStyle,
        caption_style: data.captionStyle,
        series_name: data.seriesName,
        duration: data.duration,
        platform: data.platform,
        schedule_time: data.scheduleTime || null,
        status: "pending",
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, video });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
