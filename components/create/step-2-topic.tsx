"use client"

import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface Step2TopicProps {
  topic: string
  language: string
  onTopicChange: (topic: string) => void
  onLanguageChange: (language: string) => void
}

const LANGUAGES = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "italian", label: "Italian" },
  { value: "portuguese", label: "Portuguese" },
  { value: "polish", label: "Polish" },
  { value: "hindi", label: "Hindi" },
  { value: "chinese", label: "Chinese" },
  { value: "japanese", label: "Japanese" },
]

export function Step2Topic({
  topic,
  language,
  onTopicChange,
  onLanguageChange,
}: Step2TopicProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Topic & Language</h2>
        <p className="text-sm text-muted-foreground">
          What is your video about? Choose a topic and the target language.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="topic">Topic</Label>
          <Textarea
            id="topic"
            placeholder="Describe your video topic in detail..."
            className="min-h-[120px] resize-none"
            value={topic}
            onChange={(e) => onTopicChange(e.target.value)}
          />
          <p className="text-xs text-muted-foreground">
            Provide enough detail for the AI to understand your vision.
          </p>
        </div>

        <div className="space-y-2">
          <Label>Language</Label>
          <Select value={language} onValueChange={onLanguageChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((lang) => (
                <SelectItem key={lang.value} value={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
