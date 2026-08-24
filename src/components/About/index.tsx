import { Brain, Lightning, Rocket } from "@phosphor-icons/react";
import { Title } from "../Title";
import { useReveal } from "../../hooks/useReveal";
import { YEARS_OF_EXPERIENCE } from "../../data/profile";

const highlights = [
    {
        icon: <Rocket size={22} weight="fill" />,
        title: `${YEARS_OF_EXPERIENCE}+ years shipping`,
        text: "Full-stack products from the database to the last pixel.",
    },
    {
        icon: <Brain size={22} weight="fill" />,
        title: "AI-first mindset",
        text: "LLM integrations, RAG pipelines and agents that actually reach production.",
    },
    {
        icon: <Lightning size={22} weight="fill" />,
        title: "Automation lover",
        text: "If a task repeats twice, it deserves a script — or a workflow.",
    },
];

export function About() {
    const containerRef = useReveal<HTMLDivElement>();

    return (
        <div
            ref={containerRef}
            className="relative scroll-mt-20 px-6 bg-bg2 bg-[url('/src/assets/about.png')] pb-16 overflow-hidden"
            id="about"
        >
            <div className="pointer-events-none absolute inset-0 bg-bg2/85" />
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
            <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-brand1/10 blur-3xl" />

            <section className="relative max-w-4xl mx-auto">
                <Title title="About Me"/>

                <div className="reveal mt-4 rounded-3xl border border-white/5 bg-bg1/90 p-6 shadow-xl backdrop-blur-sm transition-colors duration-500 hover:border-brand1/30">
                <p className="text-white flex-col font-ibm leading-relaxed">
                    <span className="text-brand1 text-sm">&lt;p&gt;</span> <br />
                    <span className="text-gradient-brand font-semibold text-3xl">Hello There!</span> <br />
                    My name is João Victor Ferreira Palha, like you probably already know. I'm a Full-stack Developer
                    with <span className="text-brand1">{YEARS_OF_EXPERIENCE}+ years of experience</span> and a passion for
                    problem-solving. Since I was a kid, I've always been curious about how things work and how I could
                    make them better. <br />
                    <br />
                    I graduated in Computer Science and I'm doing a post-graduation in Software Engineering. These days a
                    big part of my work lives around <span className="text-brand1">Artificial Intelligence</span>: building
                    LLM-powered features, RAG pipelines, agents and automations that remove the repetitive work from
                    people's day. <br />
                    <br />
                    I always try to learn new things and improve my skills, and I have a motto that I always follow: <br />
                    <br />
                    <span className="text-brand1">
                    Programming is not about the language, it's about the logic.
                    </span> <br />
                    <br />
                    I'm always looking for new challenges and I'm sure that I can help you with your problems. <br />
                    <span className="text-brand1 text-sm">&lt;/p&gt;</span>
                </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {highlights.map((highlight, index) => (
                        <div
                            key={highlight.title}
                            className="reveal group rounded-2xl border border-white/5 bg-bg1/70 p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand1/40 hover:glow-brand"
                            style={{ transitionDelay: `${index * 120}ms` }}
                        >
                            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-brand1/10 text-brand1 transition-transform duration-300 group-hover:scale-110">
                                {highlight.icon}
                            </div>
                            <h3 className="font-ibm font-bold text-brand1">{highlight.title}</h3>
                            <p className="mt-1 font-ibm text-sm text-white/70">{highlight.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
