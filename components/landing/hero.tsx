import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-background">
        <div className="absolute top-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]" />
      </div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium backdrop-blur-sm mx-auto lg:mx-0 bg-background/50">
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Now with AI Scheduling
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-7xl/none">
                Automate Your Content Creation{" "}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  With AI
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto lg:mx-0">
                Generate engaging short videos for YouTube Shorts, TikTok, and
                Instagram Reels in seconds. Schedule and auto-post seamlessly.
              </p>
            </div>

            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" className="gap-2 h-12 px-8 text-md group">
                Start Generating Free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 h-12 px-8 text-md">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-muted"
                    style={{
                      backgroundImage: `url(https://i.pravatar.cc/100?img=${
                        i + 10
                      })`,
                      backgroundSize: "cover",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-1">
                <p>Loved by <span className="font-bold text-foreground">1000+</span> creators</p>
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted/50 shadow-2xl backdrop-blur-sm lg:aspect-square">
                {/* Abstract UI Mockup */}
                <div className="absolute inset-2 rounded-lg border border-dashed bg-background/50 p-4">
                   <div className="h-full w-full rounded bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center">
                        <div className="text-center space-y-2">
                             <div className="w-16 h-16 rounded-full bg-primary/20 mx-auto flex items-center justify-center animate-pulse">
                                <Play className="h-8 w-8 text-primary fill-primary" />
                             </div>
                             <p className="font-medium text-muted-foreground">AI Video Generation in Progress...</p>
                        </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
