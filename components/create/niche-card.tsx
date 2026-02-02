"use client"

import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"

interface NicheCardProps {
  id: string
  title: string
  description: string
  icon: React.ElementType
  isSelected: boolean
  onSelect: (id: string) => void
}

export function NicheCard({
  id,
  title,
  description,
  icon: Icon,
  isSelected,
  onSelect,
}: NicheCardProps) {
  return (
    <div
      onClick={() => onSelect(id)}
      className={cn(
        "relative flex cursor-pointer flex-col gap-2 rounded-lg border p-4 text-left transition-all hover:bg-accent",
        isSelected ? "border-primary bg-accent" : "bg-card"
      )}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h3 className="font-semibold">{title}</h3>
        </div>
        {isSelected && (
          <CheckCircle2 className="h-5 w-5 text-primary" />
        )}
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
    </div>
  )
}
