import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

interface AnimationProps {
  text: string
  isActive?: boolean
}

export const CaptionKaraoke = ({ text, isActive }: AnimationProps) => {
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (isActive) {
      const words = text.split(" ")
      let current = 0
      setActiveIndex(0)
      
      const interval = setInterval(() => {
        current++
        if (current < words.length) {
          setActiveIndex(current)
        } else {
            // cycle complete, wait for parent to toggle off
        }
      }, 500)

      return () => clearInterval(interval)
    } else {
      setActiveIndex(-1)
    }
  }, [isActive, text])

  return (
    <div className="flex flex-wrap justify-center gap-1 font-bold text-lg">
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className={cn(
            "transition-all duration-300 transform",
            activeIndex === i 
              ? "text-primary scale-125 origin-bottom" 
              : "text-foreground/80 scale-100"
          )}
        >
          {word}
        </span>
      ))}
    </div>
  )
}

export const CaptionPop = ({ text, isActive }: AnimationProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-1 font-bold text-lg">
      <span className={cn("transition-all duration-300", isActive ? "scale-100 opacity-100" : "scale-0 opacity-0")}>
        {text}
      </span>
    </div>
  )
}

export const CaptionTypewriter = ({ text, isActive }: AnimationProps) => {
    const [display, setDisplay] = useState("")
    
    useEffect(() => {
        if (isActive) {
            let i = 0
            setDisplay("")
            const interval = setInterval(() => {
                if (i < text.length) {
                    setDisplay(text.slice(0, i + 1))
                    i++
                } else {
                    clearInterval(interval)
                }
            }, 100)
            return () => clearInterval(interval)
        } else {
            setDisplay("")
        }
    }, [isActive, text])

    return (
      <div className="font-mono font-bold text-lg flex items-center justify-center">
        <span>{display}</span>
        <span className="w-[2px] h-5 bg-primary ml-1 animate-pulse" />
      </div>
    )
  }

export const CaptionFade = ({ text, isActive }: AnimationProps) => {
  return (
    <div className={cn("font-bold text-lg transition-opacity duration-1000", isActive ? "opacity-100" : "opacity-30")}>
      {text}
    </div>
  )
}

export const CaptionBounce = ({ text, isActive }: AnimationProps) => {
  return (
    <div className={cn("font-bold text-lg", isActive && "animate-bounce text-primary")}>
      {text}
    </div>
  )
}

export const CaptionSlide = ({ text, isActive }: AnimationProps) => {
  return (
    <div className="overflow-hidden">
        <div className={cn("font-bold text-lg transition-transform duration-500", isActive ? "translate-y-0" : "translate-y-full")}>
        {text}
        </div>
    </div>
  )
}

export const CaptionHighlight = ({ text, isActive }: AnimationProps) => {
    return (
        <div className={cn(
            "font-bold text-lg px-2 py-1 rounded transition-all duration-300 transform",
            isActive ? "bg-yellow-400 text-black scale-110 rotate-1 shadow-md" : "bg-transparent text-foreground scale-100"
        )}>
            {text}
        </div>
    )
}
