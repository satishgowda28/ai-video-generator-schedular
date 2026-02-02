"use client"

import { CreateFormNavigation } from "@/components/create/create-navigation"
import { CreateFormStepper } from "@/components/create/create-stepper"
import { Step1NicheSelection } from "@/components/create/step-1-niche"
import { Step2Topic } from "@/components/create/step-2-topic"
import { Step3BackgroundMusic } from "@/components/create/step-3-music"
import { Step4VideoStyle } from "@/components/create/step-4-video-style"
import { Step5CaptionStyle } from "@/components/create/step-5-caption-style"
import { Step6FinalDetails } from "@/components/create/step-6-review"
import { VideoCreationData } from "@/types"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export default function CreatePage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<VideoCreationData>({
    niche: null,

    language: "",
    voice: "",
    music: "",
    videoStyle: "",
    captionStyle: "",
    seriesName: "",
    duration: "",
    platform: "",
    scheduleTime: "",
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

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true)
      console.log("Submitting formData:", formData)

      const response = await fetch("/api/videos/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok || result.error) {
         console.error("Error submitting form:", result.error)
         toast.error(result.error || "Failed to create video")
         return
      }

      console.log("Video created successfully:", result.video)
      toast.success("Video generated successfully!")

      // Redirect to dashboard or videos list
      router.push("/dashboard")

    } catch (error) {
       console.error("Unexpected error:", error)
       toast.error("An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
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
      case 5:
        return !formData.captionStyle
      case 6:
        return !formData.seriesName || !formData.duration || !formData.platform || !formData.scheduleTime
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
        {currentStep === 5 && (
            <Step5CaptionStyle
                captionStyle={formData.captionStyle}
                onCaptionStyleChange={(value: string) => updateFormData("captionStyle", value)}
            />
        )}
        {currentStep === 6 && (
            <Step6FinalDetails
                seriesName={formData.seriesName}
                duration={formData.duration}
                platform={formData.platform}
                scheduleTime={formData.scheduleTime}
                onUpdate={updateFormData}
            />
        )}
      </div>

      <CreateFormNavigation
        onBack={handleBack}
        onNext={handleNext}
        isBackDisabled={currentStep === 1}
        isNextDisabled={isNextDisabled()}
        isLoading={isSubmitting}
        nextLabel={currentStep === 6 ? "Publish" : "Continue"}
      />
    </div>
  )
}
