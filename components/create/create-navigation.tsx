"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react"

interface CreateFormNavigationProps {
  onBack: () => void
  onNext: () => void
  isBackDisabled?: boolean
  isNextDisabled?: boolean
  isLoading?: boolean
  nextLabel?: string
}

export function CreateFormNavigation({
  onBack,
  onNext,
  isBackDisabled,
  isNextDisabled,
  isLoading,
  nextLabel = "Continue",
}: CreateFormNavigationProps) {
  return (
    <div className="flex justify-between items-center pt-4 border-t">
      <Button
        variant="outline"
        onClick={onBack}
        disabled={isBackDisabled || isLoading}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </Button>
      <Button onClick={onNext} disabled={isNextDisabled || isLoading} className="gap-2">
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Please wait
          </>
        ) : (
          <>
            {nextLabel} <ArrowRight className="w-4 h-4" />
          </>
        )}
      </Button>
    </div>
  )
}
