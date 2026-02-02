"use client"

import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface CreateFormStepperProps {
  currentStep: number
  totalSteps: number
}

export function CreateFormStepper({ currentStep, totalSteps }: CreateFormStepperProps) {
  return (
    <div className="flex items-center w-full max-w-3xl mx-auto mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1
        const isCompleted = stepNumber < currentStep
        const isActive = stepNumber === currentStep
        const isLast = index === totalSteps - 1

        return (
          <div 
            key={stepNumber} 
            className={cn("flex items-center", isLast ? "" : "flex-1")}
          >
            <div
              className={cn(
                "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors duration-200",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : isCompleted
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              )}
            >
              {isCompleted ? (
                <Check className="h-5 w-5" />
              ) : (
                <span>{stepNumber}</span>
              )}
            </div>
            
            {/* Connector Line */}
            {!isLast && (
              <div 
                className={cn(
                  "h-[2px] w-full mx-2 transition-colors duration-200",
                  stepNumber < currentStep ? "bg-primary" : "bg-muted"
                )} 
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
