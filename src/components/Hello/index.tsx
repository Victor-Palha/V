import { useEffect, useState } from "react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
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
        <section className="flex w-full flex-col items-start gap-5 animate-fade-up">
            {/* Availability badge */}
            <span className="flex items-center gap-2 rounded-full border border-brand1/30 bg-brand1/10 px-4 py-1.5 font-ibm text-xs text-brand1">
                <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand1 animate-ping-ring" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand1" />
                </span>
                {YEARS_OF_EXPERIENCE}+ years building software · open to new challenges
            </span>

            <h2 className="text-2xl text-white sm:text-3xl">
                <span className="text-brand1 text-sm font-ibm">&lt;h1&gt;</span> <br />
                Hi, <br />
                <span className="font-bold text-gradient-brand">I'm Victor Palha</span>, <br />
                <span className="font-ibm">
                    {typed}
                    <span className="text-brand1 animate-blink">|</span>
                </span> <br />
                <span className="text-brand1 text-sm font-ibm">&lt;/h1&gt;</span>
            </h2>

            {/* The whole "about me", in the two lines someone will actually read */}
            <p className="max-w-md font-ibm text-sm leading-relaxed text-white/75">
                <span className="text-brand1 text-xs">&lt;p&gt;</span> <br />
                Full-stack developer with <span className="text-brand1">{YEARS_OF_EXPERIENCE}+ years</span> shipping
                products end to end — Elixir, TypeScript and Java running in production. Lately most of my
                work is <span className="text-brand1">LLM features, RAG pipelines and automations</span>. <br />
                CS degree, MBA in Software Engineering, now specialising in Applied AI. <br />
                <span className="text-brand1 text-xs">&lt;/p&gt;</span>
            </p>

            <div className="flex flex-wrap items-center gap-4 text-brand1 font-ibm">
                <h3 className="whitespace-nowrap text-3xl font-semibold">Let's talk</h3>
                <div className="flex items-center gap-4">
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
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="group rounded-full bg-gray1 p-2 transition-all duration-300 hover:bg-brand1 hover:scale-110 hover:glow-brand-strong"
                    >
                        <LinkedinLogo size={30} className="text-brand1 transition-colors duration-300 group-hover:text-bg2" />
                    </a>
                </div>
            </div>
        </section>
    )
}
