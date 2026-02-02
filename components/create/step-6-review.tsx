"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PLATFORMS } from "@/constants"
import { cn } from "@/lib/utils"
import { VideoCreationData } from "@/types"

interface Step6FinalDetailsProps {
  seriesName: string
  duration: "30-50" | "60-70" | ""
  platform: string[]
  scheduleTime: string
  onUpdate: (field: keyof VideoCreationData, value: any) => void
}

export function Step6FinalDetails({
  seriesName,
  duration,
  platform,
  scheduleTime,
  onUpdate,
}: Step6FinalDetailsProps) {

  interface PlatformItem {
      id: string
      name: string
      icon: any
      color: string
  }

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
                    if (typeof p === "boolean" || !p) return null
                    const platformData = p as unknown as PlatformItem
                    const Icon = platformData.icon
                    const isSelected = platform.includes(platformData.id)
                    return (
                        <div
                            key={platformData.id}
                            onClick={() => {
                                const newPlatforms = isSelected
                                    ? platform.filter(id => id !== platformData.id)
                                    : [...platform, platformData.id]
                                onUpdate("platform", newPlatforms)
                            }}
                            className={cn(
                                "cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center justify-center gap-2 transition-all hover:opacity-90",
                                isSelected ? "border-primary ring-2 ring-primary/20 bg-primary/5" : "border-muted bg-card hover:bg-accent",
                            )}
                        >
                            <div className={cn("p-2 rounded-full", isSelected ? platformData.color : "bg-muted text-muted-foreground")}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="text-sm font-medium">{platformData.name}</span>
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
