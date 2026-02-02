"use client"

import { Button } from "@/components/ui/button"
import { BackgroundMusic } from "@/constants"
import { cn } from "@/lib/utils"
import { Check, Music, Pause, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Step3BackgroundMusicProps {
  music: string
  onMusicChange: (music: string) => void
}

export function Step3BackgroundMusic({
  music,
  onMusicChange,
}: Step3BackgroundMusicProps) {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handlePlayAudio = (e: React.MouseEvent, musicUrl: string) => {
    e.stopPropagation()

    if (playingAudio === musicUrl) {
      audioRef.current?.pause()
      setPlayingAudio(null)
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }
      const audio = new Audio(musicUrl)
      audioRef.current = audio
      audio.play()
      setPlayingAudio(musicUrl)

      audio.onended = () => {
        setPlayingAudio(null)
      }
    }
  }

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Background Music</h2>
        <p className="text-sm text-muted-foreground">
            Select a background track to set the mood for your video.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {BackgroundMusic.map((track) => {
            const isSelected = music === track.url
            const isPlaying = playingAudio === track.url

            return (
              <div
                key={track.url}
                onClick={() => onMusicChange(track.url)}
                className={cn(
                  "relative flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer hover:border-primary/50",
                  isSelected
                    ? "border-primary bg-primary/5 ring-1 ring-primary"
                    : "bg-card"
                )}
              >
                <div className="flex items-center gap-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className={cn(
                        "h-10 w-10 rounded-full",
                        isPlaying ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-muted hover:bg-muted-foreground/20"
                    )}
                    onClick={(e) => handlePlayAudio(e, track.url)}
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4 fill-current" />
                    ) : (
                      <Play className="h-4 w-4 fill-current ml-0.5" />
                    )}
                  </Button>
                  
                  <div className="flex flex-col">
                      <p className="font-medium text-sm">{track.name}</p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Music className="h-3 w-3" />
                        <span>Background Track</span>
                      </div>
                  </div>
                </div>

                {isSelected && (
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
