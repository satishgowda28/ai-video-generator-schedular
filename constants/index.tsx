export const Languages = [
    {
        "language": "English",
        "countryCode": "US",
        "countryFlag": "🇺🇸",
        "modelName": "deepgram",
        "modelLangCode": "en-US"
    },
    {
        "language": "Spanish",
        "countryCode": "MX",
        "countryFlag": "🇲🇽",
        "modelName": "deepgram",
        "modelLangCode": "es-MX"
    },
    {
        "language": "German",
        "countryCode": "DE",
        "countryFlag": "🇩🇪",
        "modelName": "deepgram",
        "modelLangCode": "de-DE"
    },
    {
        "language": "Hindi",
        "countryCode": "IN",
        "countryFlag": "🇮🇳",
        "modelName": "fonadalab",
        "modelLangCode": "hi-IN"
    },
    {
        "language": "Marathi",
        "countryCode": "IN",
        "countryFlag": "🇮🇳",
        "modelName": "fonadalab",
        "modelLangCode": "mr-IN"
    },
    {
        "language": "Telugu",
        "countryCode": "IN",
        "countryFlag": "🇮🇳",
        "modelName": "fonadalab",
        "modelLangCode": "te-IN"
    },
    {
        "language": "Tamil",
        "countryCode": "IN",
        "countryFlag": "🇮🇳",
        "modelName": "fonadalab",
        "modelLangCode": "ta-IN"
    },
    {
        "language": "French",
        "countryCode": "FR",
        "countryFlag": "🇫🇷",
        "modelName": "deepgram",
        "modelLangCode": "fr-FR"
    },
    {
        "language": "Dutch",
        "countryCode": "NL",
        "countryFlag": "🇳🇱",
        "modelName": "deepgram",
        "modelLangCode": "nl-NL"
    },
    {
        "language": "Italian",
        "countryCode": "IT",
        "countryFlag": "🇮🇹",
        "modelName": "deepgram",
        "modelLangCode": "it-IT"
    },
    {
        "language": "Japanese",
        "countryCode": "JP",
        "countryFlag": "🇯🇵",
        "modelName": "deepgram",
        "modelLangCode": "ja-JP"
    },
]

export const DeepgramVoices = [
    {
        "model": "deepgram",
        "modelName": "aura-2-odysseus-en",
        "preview": "deepgram-aura-2-odysseus-en.wav",
        "gender": "male"
    },
    {
        "model": "deepgram",
        "modelName": "aura-2-thalia-en",
        "preview": "deepgram-aura-2-thalia-en.wav",
        "gender": "female"
    },
    {
        "model": "deepgram",
        "modelName": "aura-2-amalthea-en",
        "preview": "deepgram-aura-2-amalthea-en.wav",
        "gender": "female"
    },
    {
        "model": "deepgram",
        "modelName": "aura-2-andromeda-en",
        "preview": "deepgram-aura-2-andromeda-en.wav",
        "gender": "female"
    },
    {
        "model": "deepgram",
        "modelName": "aura-2-apollo-en",
        "preview": "deepgram-aura-2-apollo-en.wav",
        "gender": "male"
    }
]

export const FonadalabVoices = [
    {
        "model": "fonadalab",
        "modelName": "vaanee",
        "preview": "fonadalab-Vaanee.mp3",
        "gender": "female"
    },
    {
        "model": "fonadalab",
        "modelName": "chaitra",
        "preview": "fonadalab-Chaitra.mp3",
        "gender": "female"
    },
    {
        "model": "fonadalab",
        "modelName": "meghra",
        "preview": "fonadalab-Meghra.mp3",
        "gender": "female"
    },
    {
        "model": "fonadalab",
        "modelName": "nirvani",
        "preview": "fonadalab-Nirvani.mp3",
        "gender": "female"
    }
]

export const BackgroundMusic = [
    {
        name: "Instagram Reels Marketing",
        url: "https://ik.imagekit.io/Tubeguruji/BgMusic/instagram-reels-marketing-music-469052.mp3"
    },
    {
        name: "Marketing Music",
        url: "https://ik.imagekit.io/Tubeguruji/BgMusic/instagram-reels-marketing-music-384448.mp3"
    },
    {
        name: "Trending Reels Music",
        url: "https://ik.imagekit.io/Tubeguruji/BgMusic/trending-instagram-reels-music-447249.mp3"
    },
    {
        name: "Dramatic Hip Hop",
        url: "https://ik.imagekit.io/Tubeguruji/BgMusic/dramatic-hip-hop-music-background-jazz-music-for-short-video-148505.mp3"
    },
    {
        name: "Basketball Reels",
        url: "https://ik.imagekit.io/Tubeguruji/BgMusic/basketball-instagram-reels-music-461852.mp3"
    }
]

export const VideoStyles = [
    {
        name: "Realistic",
        image: "/video-style/realistic.png",
        id: "realistic"
    },
    {
        name: "Cinematic",
        image: "/video-style/cinematic.png",
        id: "cinematic"
    },
    {
        name: "3D Render",
        image: "/video-style/3d-render.png",
        id: "3d-render"
    },
    {
        name: "Anime",
        image: "/video-style/anime.png",
        id: "anime"
    },
    {
        name: "GTA",
        image: "/video-style/gta.png",
        id: "gta"
    },
    {
        name: "Cyberpunk",
        image: "/video-style/cyberpunk.png",
        id: "cyberpunk"
    }
]

export const CaptionStyles = [
    {
        name: "Karaoke",
        id: "karaoke",
        description: "Highlights current word"
    },
    {
        name: "Pop",
        id: "pop",
        description: "Words pop in"
    },
    {
        name: "Typewriter",
        id: "typewriter",
        description: "Letters reveal sequentially"
    },
    {
        name: "Fade",
        id: "fade",
        description: "Elegant fade animation"
    },
    {
        name: "Bounce",
        id: "bounce",
        description: "Playful bounce effect"
    },
    {
        name: "Slide",
        id: "slide",
        description: "Slide in from bottom"
    },
    {
        name: "Highlight",
        id: "highlight",
        description: "Yellow background highlight"
    }
]

import { Instagram, Mail, Youtube } from "lucide-react"

export interface Platform {
    id: string;
    name: string;
    icon: any;
    color: string;
}

export const PLATFORMS: Platform[] = [
  {
    id: "tiktok",
    name: "TikTok",
    icon: (props: any) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        height="1em"
        width="1em"
        {...props}
      >
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    color: "bg-black text-white dark:bg-white dark:text-black",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: Youtube,
    color: "bg-red-600 text-white",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white",
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    color: "bg-blue-500 text-white",
  },
]
