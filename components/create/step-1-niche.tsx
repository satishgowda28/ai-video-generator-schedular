"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    BookOpen,
    Ghost,
    Lightbulb,
    Moon,
    ScrollText,
    Sparkles
} from "lucide-react"
import { NicheCard } from "./niche-card"

interface Step1NicheSelectionProps {
  selectedNiche: string | null
  onSelectNiche: (niche: string) => void
}

const AVAILABLE_NICHES = [
  {
    id: "scary-story",
    title: "Scary Story",
    description: "Spooky tales and horror narratives to chill your audience.",
    icon: Ghost
  },
  {
    id: "motivation-story",
    title: "Motivational Story",
    description: "Inspiring stories to uplift and motivate viewers.",
    icon: Sparkles
  },
  {
    id: "bedtime-story",
    title: "Bedtime Story",
    description: "Calming stories perfect for sleep and relaxation.",
    icon: Moon
  },
  {
    id: "fact-video",
    title: "Fun Facts",
    description: "Interesting and educational facts about various topics.",
    icon: Lightbulb
  },
  {
    id: "history-doc",
    title: "Historical Event",
    description: "Retelling of significant historical events.",
    icon: ScrollText
  },
  {
    id: "mythology",
    title: "Mythology",
    description: "Stories of gods, monsters, and ancient legends.",
    icon: BookOpen
  }
]

export function Step1NicheSelection({
  selectedNiche,
  onSelectNiche,
}: Step1NicheSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Select Your Niche</h2>
        <p className="text-sm text-muted-foreground">
          Choose a predefined niche or create your own custom style.
        </p>
      </div>

      <Tabs defaultValue="available" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Available Niche</TabsTrigger>
          <TabsTrigger value="custom">Custom Niche</TabsTrigger>
        </TabsList>
        
        <TabsContent value="available" className="mt-4">
          <ScrollArea className="h-[400px] w-full rounded-md border p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AVAILABLE_NICHES.map((niche) => (
                <NicheCard
                  key={niche.id}
                  id={niche.title} // Using title as the value for now, or could use ID
                  title={niche.title}
                  description={niche.description}
                  icon={niche.icon}
                  isSelected={selectedNiche === niche.title}
                  onSelect={onSelectNiche}
                />
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="custom" className="mt-4">
          <div className="flex flex-col gap-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="custom-niche">Custom Niche Name</Label>
              <Input
                id="custom-niche"
                placeholder="E.g., Crypto News, Meditations..."
                value={selectedNiche || ""}
                onChange={(e) => onSelectNiche(e.target.value)}
              />
            </div>
            <div className="p-4 rounded-lg bg-muted/50 text-sm text-muted-foreground">
              <p>Type your custom niche above. We'll tailor the content generation to match your specific topic.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
