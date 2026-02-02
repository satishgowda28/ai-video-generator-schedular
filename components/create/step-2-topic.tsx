"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { DeepgramVoices, FonadalabVoices, Languages } from "@/constants"
import { cn } from "@/lib/utils"
import { Check, Play, Square } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Step2TopicProps {
  language: string
  voice: string
  onLanguageChange: (language: string) => void
  onVoiceChange: (voice: string) => void
}

export function Step2Topic({
  language,
  voice,
  onLanguageChange,
  onVoiceChange,
}: Step2TopicProps) {
  const [playingAudio, setPlayingAudio] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Determine available voices based on selected language
  const selectedLang = Languages.find((l) => l.language === language)
  const availableVoices = selectedLang
    ? selectedLang.modelName === "deepgram"
      ? DeepgramVoices
      : FonadalabVoices
    : []

  const handlePlayAudio = (e: React.MouseEvent, previewFile: string) => {
    e.stopPropagation() // Prevent card selection when clicking play

    if (playingAudio === previewFile) {
      audioRef.current?.pause()
      setPlayingAudio(null)
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
      }
      // Assuming audio files are in /audio/ folder in public
      const audio = new Audio(`/voice/${previewFile}`)
      audioRef.current = audio
      audio.play()
      setPlayingAudio(previewFile)
      
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

  // Identify model name for display
  const modelProvider = selectedLang?.modelName === "deepgram" ? "Deepgram Aura" : "Fonada Lab"

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Select Language & Voice</h2>
        <p className="text-sm text-muted-foreground">
          Choose the language and AI voice provider for your video.
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Language</Label>
            <Select value={language} onValueChange={(val) => {
                onLanguageChange(val)
                onVoiceChange("") // Reset voice when language changes
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Select a language" />
              </SelectTrigger>
              <SelectContent>
                {Languages.map((lang) => (
                  <SelectItem key={lang.language} value={lang.language}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{lang.countryFlag}</span>
                      <span>{lang.language}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {language && (
                <p className="text-sm text-muted-foreground mt-2">
                    Selected Language: <span className="font-medium text-foreground">{language}</span>
                </p>
            )}
          </div>
        </div>
      </div>

      {language && (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Select Voice</h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    Powered by {modelProvider}
                </span>
            </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableVoices.map((v) => {
                const isSelected = voice === v.modelName
                const isPlaying = playingAudio === v.preview

                return (
                    <div
                        key={v.modelName}
                        onClick={() => onVoiceChange(v.modelName)}
                        className={cn(
                            "relative flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer hover:border-primary/50",
                            isSelected ? "border-primary bg-primary/5 ring-1 ring-primary" : "bg-card"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 rounded-full bg-muted hover:bg-muted-foreground/20"
                                onClick={(e) => handlePlayAudio(e, v.preview)}
                            >
                                {isPlaying ? (
                                    <Square className="h-3 w-3 fill-current" />
                                ) : (
                                    <Play className="h-3 w-3 fill-current ml-0.5" />
                                )}
                            </Button>
                            <div>
                                <p className="font-medium text-sm capitalize">{v.modelName.replace('aura-2-', '').replace('-en', '').replace(/-/g, ' ')}</p>
                                <p className="text-xs text-muted-foreground capitalize">{v.gender}</p>
                            </div>
                        </div>
                        {isSelected && (
                            <div className="absolute top-2 right-2">
                                <Check className="h-4 w-4 text-primary" />
                            </div>
                        )}
                    </div>
                )
            })}
            
            {availableVoices.length === 0 && (
                <div className="col-span-full py-8 text-center text-muted-foreground border border-dashed rounded-lg">
                    No voices found for this language.
                </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
