"use client"

import { updateSeriesStatus } from "@/actions/video"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { VideoStyles } from "@/constants"
import { VideoSeries } from "@/types"
import { format } from "date-fns"
import { Edit, MoreVertical, Pause, Play, Trash, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner"

interface SeriesCardProps {
  series: VideoSeries
}

export function SeriesCard({ series }: SeriesCardProps) {
  const [isPaused, setIsPaused] = useState(series.status === 'paused')
  const [isLoading, setIsLoading] = useState(false)

  // Find the image for the video style
  const styleImage = VideoStyles.find(
    (style) => style.id === series.video_style
  )?.image || "/video-style/realistic.png" // Fallback

  const handleGenerate = (e: React.MouseEvent) => {
      e.preventDefault()
      // Logic to trigger instant generation would go here
      console.log("Generating video for series:", series.id)
  }

  const toggleStatus = async () => {
      const newStatus = isPaused ? 'active' : 'paused';
      // Optimistic update
      setIsPaused(!isPaused);
      setIsLoading(true);

      try {
          const result = await updateSeriesStatus(series.id, newStatus);
          if (result.error) {
              // Revert if error
              setIsPaused(isPaused);
              toast.error(result.error);
          }
      } catch (error) {
          // Revert if error
          setIsPaused(isPaused);
          toast.error("An unexpected error occurred");
      } finally {
          setIsLoading(false);
      }
  }

  return (
    <div className="group relative flex flex-col rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md h-full">
      {/* Thumbnail Area */}
      <div className="relative h-40 w-full overflow-hidden rounded-t-xl bg-muted">
        <Image
            src={styleImage}
            alt={series.series_name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        
        {/* Edit Button on Thumbnail */}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 right-2 h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100 shadow-sm"
          asChild
        >
          <Link href={`/dashboard/create?id=${series.id}`}>
            <Edit className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <h3 className="font-semibold leading-none tracking-tight line-clamp-1" title={series.series_name}>
              {series.series_name}
            </h3>
            <p className="text-xs text-muted-foreground">
              Created {format(new Date(series.created_at), "MMM d, yyyy")}
            </p>
          </div>
          
          {/* Actions Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-40 p-1">
              <div className="grid gap-1">
                <Button variant="ghost" size="sm" className="justify-start gap-2 h-8" asChild>
                  <Link href={`/dashboard/create?id=${series.id}`}>
                    <Edit className="h-4 w-4" /> Edit
                  </Link>
                </Button>
                <Button 
                    variant="ghost" 
                    size="sm" 
                    className="justify-start gap-2 h-8"
                    onClick={toggleStatus}
                    disabled={isLoading}
                >
                  {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                  {isPaused ? "Resume" : "Pause"}
                </Button>
                <div className="h-px bg-muted my-1" />
                <Button variant="ghost" size="sm" className="justify-start gap-2 h-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                  <Trash className="h-4 w-4" /> Delete
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div 
                    className="w-2 h-2 rounded-full" 
                    style={{ backgroundColor: isPaused ? 'orange' : 'green' }}
                />
                {isPaused ? 'Paused' : 'Active'}
            </div>
            {series.schedule_time && (
                <div className="text-xs text-muted-foreground">
                    Next post: {format(new Date(series.schedule_time), "MMM d, h:mm a")}
                </div>
            )}
        </div>

        {/* Footer Actions */}
        <div className="mt-auto pt-4 flex gap-2">
            <Button 
                className="flex-1 gap-2 text-xs px-2" 
                onClick={handleGenerate}
            >
                <Zap className="h-3.5 w-3.5 fill-current" />
                Generate
            </Button>
            <Button variant="outline" className="flex-1 text-xs h-9 px-2" asChild>
                <Link href={`/dashboard/series/${series.id}`}>
                    View Videos
                </Link>
            </Button>
        </div>
      </div>
    </div>
  )
}
