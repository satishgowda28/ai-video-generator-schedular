"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface CreateFormNavigationProps {
  onBack: () => void
  onNext: () => void
  isBackDisabled?: boolean
  isNextDisabled?: boolean
  nextLabel?: string
}

export function CreateFormNavigation({
  onBack,
  onNext,
  isBackDisabled,
  isNextDisabled,
  nextLabel = "Continue",
}: CreateFormNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-4 border-t">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={isBackDisabled}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Button>
      <Button onClick={onNext} disabled={isNextDisabled} className="gap-2">
        {nextLabel} <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  )
}
