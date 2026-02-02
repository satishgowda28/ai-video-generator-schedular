"use client"

import { CreateFormNavigation } from "@/components/create/create-navigation"
import { CreateFormStepper } from "@/components/create/create-stepper"
import { Step1NicheSelection } from "@/components/create/step-1-niche"
import { Step2Topic } from "@/components/create/step-2-topic"
import { Step3BackgroundMusic } from "@/components/create/step-3-music"
import { Step4VideoStyle } from "@/components/create/step-4-video-style"
import { VideoCreationData } from "@/types"
import { useState } from "react"

export default function CreatePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<VideoCreationData>({
    niche: null,
    topic: "",
    language: "",
    voice: "",
    music: "",
    videoStyle: "",
  })
  const totalSteps = 6

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1)
    } else {
      handleSubmit()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Form Submitted:", formData)
    // Here you would typically send the data to an API
  }

  const updateFormData = (field: keyof VideoCreationData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.niche
      case 2:
        return !formData.language || !formData.voice
      case 3:
        return !formData.music
      case 4:
        return !formData.videoStyle
      default:
        return false
    }
  }

  return (
    <div className="container max-w-4xl py-10 space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create New Video</h1>
        <p className="text-muted-foreground">
          Follow the steps to generate your AI video content.
        </p>
      </div>

      <CreateFormStepper currentStep={currentStep} totalSteps={totalSteps} />

      <div className="min-h-[400px] border rounded-lg p-6 bg-card">
        {currentStep === 1 && (
          <Step1NicheSelection
            selectedNiche={formData.niche}
            onSelectNiche={(niche: string) => updateFormData("niche", niche)}
          />
        )}
        {currentStep === 2 && (
          <Step2Topic
            language={formData.language}
            voice={formData.voice}
            onLanguageChange={(value) => updateFormData("language", value)}
            onVoiceChange={(value: string) => updateFormData("voice", value)}
          />
        )}
        {currentStep === 3 && (
          <Step3BackgroundMusic
            music={formData.music}
            onMusicChange={(value: string) => updateFormData("music", value)}
          />
        )}
        {currentStep === 4 && (
          <Step4VideoStyle
            videoStyle={formData.videoStyle}
            onVideoStyleChange={(value: string) => updateFormData("videoStyle", value)}
          />
        )}
        {/* Placeholder for other steps */}
        {currentStep > 4 && (
            <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Step {currentStep} Content Placeholder</p>
            </div>
        )}
      </div>

      <CreateFormNavigation
        onBack={handleBack}
        onNext={handleNext}
        isBackDisabled={currentStep === 1}
        isNextDisabled={isNextDisabled()}
      />
    </div>
  )
}
