import type { TechKey } from "./tech";
import ashChatImage from "../assets/projects_2/2.png";
import ytAiImage from "../assets/projects_2/6.png";
import granaFlowImage from "../assets/projects_2/1.png";
import vereneImage from "../assets/projects_2/7.png";
import ashDriveImage from "../assets/projects_2/3.png";
import tavernImage from "../assets/projects_2/5.png";
import linkSaverImage from "../assets/projects_2/4.png";

export type ProjectStatus = "live" | "code" | "client";

export type Project = {
    id: string;
    name: string;
    /** One line that answers "what is this?" before anything else. */
    tagline: string;
    status: ProjectStatus;
    image: string;
    repo?: string;
    live?: string;
    /** Two short paragraphs: what it does, then how it was built. */
    description: string[];
    /** Where the technology story lives — what was actually done with each tool. */
    highlights: string[];
    stack: TechKey[];
};

export const STATUS_LABEL: Record<ProjectStatus, string> = {
    live: "Live",
    code: "Source only",
    client: "Client work · Live",
};

/**
 * Ordered by how much they say about me, not by date — the first three are the
 * ones a recruiter with thirty seconds should see.
 */
export const projects: Project[] = [
    {
        id: "ashchat",
        name: "AshChat",
        tagline: "Real-time chat that translates every message into the reader's language.",
        status: "code",
        image: ashChatImage,
        repo: "https://github.com/Victor-Palha/AshChat",
        description: [
            "Each user picks the language they want to read in. A message sent in Portuguese arrives in English for whoever is on the other side, so two people who share no language can still hold a conversation — with presence, typing indicators and push notifications on top.",
            "It is split into four services, each written in the language that fits the job best, talking to each other over RabbitMQ and sitting behind a Kong gateway. The whole thing comes up with a single Docker Compose.",
        ],
        highlights: [
            "Phoenix (Elixir) runs the chat service: WebSocket channels for delivery, presence and typing, with MongoDB for message history and Joken for token validation.",
            "Spring Boot (Java) owns authentication and accounts; a Python service does the translation; a Node/TypeScript service sends the transactional e-mails.",
            "RabbitMQ decouples translation and e-mail from the chat loop, so a slow translation never holds a message hostage.",
            "Kong fronts all four services behind one API, consumed by a React Native app and a desktop client.",
        ],
        stack: ["elixir", "phoenix", "java", "spring", "python", "node", "ts", "reactNative", "mongo", "rabbitmq", "kong", "docker"],
    },
    {
        id: "yt-ai",
        name: "YT-AI",
        tagline: "YouTube transcription where the speech model runs inside your browser — no inference server, no API bill.",
        status: "code",
        image: ytAiImage,
        repo: "https://github.com/Victor-Palha/Youtube-Transcription-AI",
        description: [
            "Paste a YouTube link and get the transcription back. Built well before the current AI hype, when running a model on the client was still an odd idea.",
            "A small Node service only fetches the audio and converts it with FFmpeg. The actual speech recognition happens in the browser, on the user's own machine — the model is downloaded once and inference never leaves the tab.",
        ],
        highlights: [
            "Transformers.js (Hugging Face) loads an automatic-speech-recognition pipeline in the browser and runs it over WebAssembly — zero inference cost and no audio sent to a third party.",
            "Long videos are transcribed in 30s chunks with a 5s stride, so the model keeps context across cuts and returns timestamps.",
            "The Node/Express side is deliberately thin: ytdl-core pulls the stream, fluent-ffmpeg converts it to mp3, and the file is dropped after use.",
            "Client is vanilla JavaScript bundled with Vite and shipped to GitHub Pages — no framework needed for what it does.",
        ],
        stack: ["transformers", "js", "node", "express", "ffmpeg", "vite", "docker"],
    },
    {
        id: "granaflow",
        name: "GranaFlow",
        tagline: "Personal finance platform: one Elixir API feeding a Vue web app and a React Native app.",
        status: "live",
        image: granaFlowImage,
        live: "https://granaflow.onrender.com/",
        repo: "https://github.com/Victor-Palha/GranaFlow",
        description: [
            "Track expenses across multiple wallets, set budgets, get alerted before you blow through them, and see where the money actually went. Receipts can be attached to any transaction.",
            "The API is Elixir/Phoenix over PostgreSQL, deployed on Fly.io, and it serves two front-ends I also built: a Vue 3 web app and a React Native mobile app.",
        ],
        highlights: [
            "Phoenix + Ecto model the transactions and budgets; Guardian issues the JWTs and Ueberauth handles Google and Facebook sign-in, so there is no password to store.",
            "Receipt uploads go to Cloudflare R2 through ExAws, keeping files off the application server.",
            "Premium tier is wired to a payment provider, with the subscription state owned by the API rather than the clients.",
            "Same API, two clients: Vue 3 + TypeScript on the web, React Native on mobile — the contract is defined once.",
        ],
        stack: ["elixir", "phoenix", "postgres", "vue", "reactNative", "ts", "oauth", "jwt", "r2", "fly", "docker"],
    },
    {
        id: "verene",
        name: "Verene Band",
        tagline: "Official site for a rock band from Pará — real client, running in production.",
        status: "client",
        image: vereneImage,
        live: "https://verene.onrender.com/",
        description: [
            "Everything the band needs in one page: who they are, upcoming shows, the official store, ways to support them and a direct line to their music on Spotify.",
            "A React + TypeScript SPA built with Vite, with the metadata and Open Graph tags set up so a shared link renders properly on social media — which is where most of their audience comes from.",
        ],
        highlights: [
            "Built around how the band is actually found: link previews, SEO tags and a mobile-first layout, since traffic arrives from Instagram.",
            "Sections for shows, store and support are data-driven, so the band can be updated without touching layout code.",
        ],
        stack: ["react", "ts", "vite", "render"],
    },
    {
        id: "ash-drive",
        name: "Ash Drive",
        tagline: "A NAS for your own network — move big files between machines with no cloud and no external drive.",
        status: "code",
        image: ashDriveImage,
        repo: "https://github.com/Victor-Palha/ash-drive",
        description: [
            "Born from an actual annoyance: moving large files between a Windows desktop and a Mac laptop without waiting on an upload and a download, and without carrying a drive around.",
            "Run the server on one machine and open the browser on anything else in the same network. Files transfer at LAN speed and never leave the house.",
        ],
        highlights: [
            "Node/TypeScript API handles streamed uploads and downloads so large files never sit fully in memory.",
            "React front-end talks to the API over the local address, which means any phone or laptop on the Wi-Fi is a client with no install.",
        ],
        stack: ["ts", "node", "react", "vite"],
    },
    {
        id: "medieval-tavern",
        name: "Medieval Tavern",
        tagline: "Free public API of medieval-fantasy recipes, with its own React client on top.",
        status: "live",
        image: tavernImage,
        live: "https://medieval-tavern.onrender.com/",
        repo: "https://github.com/Victor-Palha/Medieval-Tavern",
        description: [
            "An open API anyone can build a recipe app against — no key, no cost. Logged-in users can publish their own recipes and favourite the ones they like.",
            "Node + Express + TypeScript over MongoDB, with a separate React client that consumes the same public endpoints everyone else gets.",
        ],
        highlights: [
            "Routes are split into public reads and authenticated writes, guarded by bearer-token JWT auth.",
            "Mongoose models the recipes and the favourite relations; the API is documented endpoint by endpoint in the README so it is actually usable by others.",
        ],
        stack: ["ts", "node", "express", "mongo", "jwt", "react", "tailwind", "render"],
    },
    {
        id: "link-saver",
        name: "Link Saver",
        tagline: "Mobile app to save, categorise and reopen the links you keep losing.",
        status: "code",
        image: linkSaverImage,
        repo: "https://github.com/Victor-Palha/linkSaverNative",
        description: [
            "Save a link with a name and a category, browse it later, open it in place. Small on purpose — it does one thing without an account or a backend.",
            "React Native with Expo, styled with NativeWind, storing everything locally on the device.",
        ],
        highlights: [
            "Navigation is file-based with expo-router; AsyncStorage keeps the links on-device, so there is no server and nothing to sign up for.",
            "NativeWind brings Tailwind syntax to React Native, and the layout is tuned for both Android and iOS.",
        ],
        stack: ["reactNative", "expo", "ts", "tailwind"],
    },
];

/** The three that open the page — also surfaced in the hero. */
export const featuredProjects = projects.slice(0, 3);
export const otherProjects = projects.slice(3);
