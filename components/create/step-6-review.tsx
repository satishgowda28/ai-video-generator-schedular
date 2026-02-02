"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { VideoCreationData } from "@/types"
import { Instagram, Mail, Youtube } from "lucide-react"

interface Step6FinalDetailsProps {
  seriesName: string
  duration: "30-50" | "60-70" | ""
  platform: string
  scheduleTime: string
  onUpdate: (field: keyof VideoCreationData, value: any) => void
}

const PLATFORMS = [
  {
    id: "tiktok",
    name: "TikTok",
    icon: (props: any) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    color: "bg-black text-white dark:bg-white dark:text-black",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    color: "bg-red-600 text-white",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white",
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    color: "bg-blue-500 text-white",
  },
]

export function Step6FinalDetails({
  seriesName,
  duration,
  platform,
  scheduleTime,
  onUpdate,
}: Step6FinalDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Final Details</h2>
        <p className="text-sm text-muted-foreground">
          Review details and schedule your video.
        </p>

        <div className="grid gap-6">
            {/* Series Name */}
          <div className="space-y-2">
            <Label htmlFor="seriesName">Series Name</Label>
            <Input
              id="seriesName"
              placeholder="e.g. Daily Tech Tips"
              value={seriesName}
              onChange={(e) => onUpdate("seriesName", e.target.value)}
            />
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label>Video Duration</Label>
            <Select
              value={duration}
              onValueChange={(value) => onUpdate("duration", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="30-50">30-50 Seconds</SelectItem>
                <SelectItem value="60-70">60-70 Seconds</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Platform */}
          <div className="space-y-2">
             <Label>Publish Platform</Label>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {PLATFORMS.map((p) => {
                    const Icon = p.icon
                    const isSelected = platform === p.id
                    return (
                        <div
                            key={p.id}
                            onClick={() => onUpdate("platform", p.id)}
                            className={cn(
                                "cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-2 transition-all hover:opacity-90",
                                isSelected ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-muted bg-card hover:bg-accent",
                            )}
                        >
                            <div className={cn("p-2 rounded-full", p.color)}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">{p.name}</span>
                        </div>
                    )
                })}
             </div>
          </div>

          {/* Schedule Time */}
          <div className="space-y-2">
            <Label htmlFor="scheduleTime">Schedule Publish Time</Label>
             <div className="relative">
                <Input
                    id="scheduleTime"
                    type="datetime-local"
                    value={scheduleTime}
                    onChange={(e) => onUpdate("scheduleTime", e.target.value)}
                    className="w-full"
                />
             </div>
            <p className="text-xs text-muted-foreground flex items-center gap-1">
                Video will generate 3-6 hours before the publish time
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
