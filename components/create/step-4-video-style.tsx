"use client"

import { VideoStyles } from "@/constants"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"

interface Step4VideoStyleProps {
  videoStyle: string
  onVideoStyleChange: (style: string) => void
}

export function Step4VideoStyle({
  videoStyle,
  onVideoStyleChange,
}: Step4VideoStyleProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Video Style</h2>
        <p className="text-sm text-muted-foreground">
          Choose a visual style for your video generation.
        </p>

        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {VideoStyles.map((style: { id: string; name: string; image: string }) => {
              const isSelected = videoStyle === style.id

              return (
                <div
                  key={style.id}
                  onClick={() => onVideoStyleChange(style.id)}
                  className={cn(
                    "relative flex-shrink-0 cursor-pointer snap-start group",
                    "w-[200px] rounded-xl overflow-hidden border-2 transition-all duration-300",
                    isSelected
                      ? "border-primary ring-4 ring-primary/20 shadow-xl shadow-black/20"
                      : "border-transparent hover:border-primary/50 hover:shadow-lg"
                  )}
                >
                  <div className="relative aspect-[9/16] w-full overflow-hidden">
                    <Image
                      src={style.image}
                      alt={style.name}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-500",
                        isSelected ? "scale-110" : "group-hover:scale-110"
                      )}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {isSelected && (
                      <div className="absolute top-3 right-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                        <Check className="h-4 w-4" />
                      </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-lg drop-shadow-md">
                        {style.name}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        
        {videoStyle && (
            <p className="text-sm text-muted-foreground text-center">
                Selected Style: <span className="font-semibold text-foreground capitalize">{videoStyle.replace("-", " ")}</span>
            </p>
        )}
      </div>
    </div>
  )
}
