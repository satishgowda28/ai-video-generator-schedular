import {
    BarChart,
    Calendar,
    Clapperboard,
    Globe,
    Share2,
    Zap,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Clapperboard className="h-10 w-10 text-primary" />,
      title: "AI Video Generation",
      description:
        "Turn text prompts into engaging short-form videos with realistic AI avatars and voiceovers.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-blue-600" />,
      title: "Smart Scheduling",
      description:
        "Plan your content calendar for weeks in advance. Auto-post to TikTok, YouTube, and Instagram.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-purple-600" />,
      title: "In-Depth Analytics",
      description:
        "Track views, engagement, and conversion across all platforms from a single dashboard.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-green-600" />,
      title: "Multi-Platform Support",
      description:
        "Resize and optimize videos for every platform automatically. One click, everywhere.",
    },
    {
      icon: <Zap className="h-10 w-10 text-yellow-500" />,
      title: "Instant Captions",
      description:
        "Auto-generate accurate captions in multiple languages to boost engagement and accessibility.",
    },
    {
      icon: <Globe className="h-10 w-10 text-pink-500" />,
      title: "Global Reach",
      description:
        "Localize your content with AI translation and dubbing to reach audiences worldwide.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                    Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Everything you need to <span className="text-primary">go viral</span>
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Powerful tools to automate your content creation workflow and grow your audience 10x faster.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-2xl border bg-background p-8 hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="mb-6 rounded-full bg-muted w-16 h-16 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
