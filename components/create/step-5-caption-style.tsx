"use client"

import { CaptionStyles } from "@/constants"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { useEffect, useState } from "react"
import { CaptionBounce, CaptionFade, CaptionHighlight, CaptionKaraoke, CaptionPop, CaptionSlide, CaptionTypewriter } from "./captions/animations"

interface Step5CaptionStyleProps {
  captionStyle: string
  onCaptionStyleChange: (style: string) => void
}

const RENDERERS: Record<string, any> = {
  karaoke: CaptionKaraoke,
  pop: CaptionPop,
  typewriter: CaptionTypewriter,
  fade: CaptionFade,
  bounce: CaptionBounce,
  slide: CaptionSlide,
  highlight: CaptionHighlight,
}

export function Step5CaptionStyle({
  captionStyle,
  onCaptionStyleChange,
}: Step5CaptionStyleProps) {
  const [activePreview, setActivePreview] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
        // Simple toggle for preview animation state
        setActivePreview((prev) => (prev ? null : "active"))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Caption Style</h2>
        <p className="text-sm text-muted-foreground">
          Choose an animated caption style for your video.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {CaptionStyles.map((style) => {
            const isSelected = captionStyle === style.id
            const Renderer = RENDERERS[style.id]

            return (
              <div
                key={style.id}
                onClick={() => onCaptionStyleChange(style.id)}
                className={cn(
                  "relative flex flex-col items-center justify-center p-6 h-[120px] rounded-xl border-2 transition-all cursor-pointer",
                  isSelected
                    ? "border-primary bg-primary/5 ring-2 ring-primary/20 scale-105 shadow-lg"
                    : "border-muted hover:border-primary/50 hover:bg-muted/50"
                )}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                )}
                
                <div className="mb-2">
                    {Renderer ? (
                        <Renderer text="I Am Caption" isActive={activePreview === "active" || isSelected} />
                    ) : (
                        <span className="font-bold">Preview</span>
                    )}
                </div>

                <span className="text-xs text-muted-foreground mt-2 font-medium uppercase tracking-wider">
                  {style.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
