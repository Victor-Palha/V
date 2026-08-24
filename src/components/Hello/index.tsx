import { useEffect, useState } from "react";
import { EnvelopeSimple, GithubLogo, Notebook, Sparkle } from "@phosphor-icons/react";
import { profile, YEARS_OF_EXPERIENCE } from "../../data/profile";

const TYPING_SPEED = 90;
const DELETING_SPEED = 45;
const HOLD_TIME = 1600;

/** Types and deletes each role in a loop, like a terminal prompt. */
function useTypewriter(words: string[]) {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[index % words.length];
        const isFullyTyped = !isDeleting && text === current;
        const isFullyDeleted = isDeleting && text === "";

        if (isFullyTyped) {
            const timeout = setTimeout(() => setIsDeleting(true), HOLD_TIME);
            return () => clearTimeout(timeout);
        }

        if (isFullyDeleted) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
        }, isDeleting ? DELETING_SPEED : TYPING_SPEED);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, words]);

    return text;
}

export function Hello(){
    const typed = useTypewriter(profile.roles);

    return (
        <section className="flex flex-col gap-6 items-center md:items-start animate-fade-up">
            {/* Availability badge */}
            <span className="flex items-center gap-2 rounded-full border border-brand1/30 bg-brand1/10 px-4 py-1.5 font-ibm text-xs text-brand1">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand1 animate-ping-ring" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand1" />
                </span>
                {YEARS_OF_EXPERIENCE}+ years building software · open to new challenges
            </span>

            <h2 className="text-3xl text-white text-center md:text-left">
                <span className="text-brand1 text-sm font-ibm">&lt;h1&gt;</span> <br />
                Hi, <br />
                <span className="font-bold text-gradient-brand">I'm Victor Palha</span>, <br />
                <span className="font-ibm">
                    {typed}
                    <span className="text-brand1 animate-blink">|</span>
                </span> <br />
                <span className="text-brand1 text-sm font-ibm">&lt;/h1&gt;</span>
            </h2>

            <p className="text-white font-ibm text-center md:text-left">
            <span className="text-brand1 text-sm">&lt;p&gt;</span> <br />
                Technologies are just tools. <br />
                What really matters is the <br />
                <span className="text-brand1">problem-solving</span> <br />
                and I'm here to help you with that. <br />
            <span className="text-brand1 text-sm">&lt;/p&gt;</span>
            </p>

            {/* Highlight of what I'm doing right now */}
            <div className="flex items-start gap-3 rounded-2xl border border-white/5 bg-bg2/70 px-4 py-3 font-ibm text-sm text-white/80 max-w-sm">
                <Sparkle size={20} weight="fill" className="mt-0.5 shrink-0 text-brand1 animate-bob" />
                <p>
                    Lately I've been shipping <span className="text-brand1">AI-powered features</span> — LLM
                    integrations, RAG pipelines and automations that cut the boring work.
                </p>
            </div>

            <div className="flex items-center gap-4 text-brand1 font-ibm">
                <h3 className="text-4xl font-semibold">Let's talk</h3>
                <a
                    href={`mailto:${profile.email}`}
                    aria-label="Send me an email"
                    className="group rounded-full bg-gray1 p-2 transition-all duration-300 hover:bg-brand1 hover:scale-110 hover:glow-brand-strong"
                >
                    <EnvelopeSimple size={30} className="text-brand1 transition-colors duration-300 group-hover:text-bg2" />
                </a>
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="group rounded-full bg-gray1 p-2 transition-all duration-300 hover:bg-brand1 hover:scale-110 hover:glow-brand-strong"
                >
                    <GithubLogo size={30} className="text-brand1 transition-colors duration-300 group-hover:text-bg2" />
                </a>
                <a
                    href={profile.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Read my blog"
                    className="group rounded-full bg-gray1 p-2 transition-all duration-300 hover:bg-brand1 hover:scale-110 hover:glow-brand-strong"
                >
                    <Notebook size={30} className="text-brand1 transition-colors duration-300 group-hover:text-bg2" />
                </a>
            </div>
        </section>
    )
}
