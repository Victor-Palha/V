import { ArrowUpRight, Check, GithubLogo } from "@phosphor-icons/react";
import { TechChips } from "../TechChip";
import { useReveal } from "../../hooks/useReveal";
import { featuredProjects, otherProjects, STATUS_LABEL, type Project } from "../../data/projects";

function StatusBadge({ project }: { project: Project }) {
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand1/30 bg-brand1/10 px-2.5 py-1 font-ibm text-[11px] text-brand1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand1" />
            {STATUS_LABEL[project.status]}
        </span>
    );
}

function ProjectLinks({ project }: { project: Project }) {
    return (
        <div className="flex flex-wrap items-center gap-3">
            {project.live && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand1 px-5 py-2.5 font-ibm text-sm font-semibold text-bg2 transition-all duration-300 hover:bg-brand2 hover:glow-brand-strong"
                >
                    Open live <ArrowUpRight size={16} weight="bold" />
                </a>
            )}
            {project.repo && (
                <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 font-ibm text-sm text-white/80 transition-all duration-300 hover:border-brand1/60 hover:text-brand1"
                >
                    <GithubLogo size={16} /> Read the code
                </a>
            )}
        </div>
    );
}

/** One of the three headline projects: screenshot, what it does, what I built with what. */
function FeaturedProject({ project, index }: { project: Project; index: number }) {
    const imageFirst = index % 2 === 0;

    return (
        <article
            id={`project-${project.id}`}
            className="reveal scroll-mt-28 grid items-center gap-8 md:grid-cols-2 md:gap-12"
        >
            <div className={`relative ${imageFirst ? "md:order-1" : "md:order-2"}`}>
                <div className="overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
                    <img
                        src={project.image}
                        alt={`${project.name} interface`}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                    />
                </div>
                <span className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-brand1/5 blur-2xl" />
            </div>

            <div className={`flex flex-col gap-5 text-left ${imageFirst ? "md:order-2" : "md:order-1"}`}>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="font-ibm text-sm text-brand1/60">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-2xl font-bold text-white md:text-3xl">{project.name}</h3>
                    <StatusBadge project={project} />
                </div>

                <p className="font-ibm text-base leading-relaxed text-brand2">{project.tagline}</p>

                <div className="flex flex-col gap-3">
                    {project.description.map((paragraph) => (
                        <p key={paragraph} className="font-ibm text-sm leading-relaxed text-white/70">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <ul className="flex flex-col gap-2 border-l border-brand1/20 pl-4">
                    {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2.5 font-ibm text-sm leading-relaxed text-white/80">
                            <Check size={14} weight="bold" className="mt-1 shrink-0 text-brand1" />
                            <span>{highlight}</span>
                        </li>
                    ))}
                </ul>

                <TechChips stack={project.stack} />
                <ProjectLinks project={project} />
            </div>
        </article>
    );
}

/** The rest of the shelf: enough to judge without another full-width block. */
function CompactProject({ project }: { project: Project }) {
    return (
        <article
            id={`project-${project.id}`}
            className="reveal group scroll-mt-28 flex flex-col gap-4 rounded-2xl border border-white/5 bg-bg1/50 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand1/30"
        >
            <div className="flex items-start gap-4">
                <img
                    src={project.image}
                    alt={`${project.name} interface`}
                    loading="lazy"
                    className="h-16 w-20 shrink-0 rounded-lg object-cover object-center ring-1 ring-white/10"
                />
                <div className="flex flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-white">{project.name}</h4>
                        <StatusBadge project={project} />
                    </div>
                    <p className="font-ibm text-sm leading-snug text-white/70">{project.tagline}</p>
                </div>
            </div>

            <p className="font-ibm text-sm leading-relaxed text-white/55">{project.highlights[0]}</p>

            <div className="mt-auto flex flex-col gap-3">
                <TechChips stack={project.stack} dense limit={5} />
                <div className="flex items-center gap-4 font-ibm text-sm">
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-brand1 transition-colors hover:text-brand2"
                        >
                            Open live <ArrowUpRight size={14} weight="bold" />
                        </a>
                    )}
                    {project.repo && (
                        <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-white/60 transition-colors hover:text-brand1"
                        >
                            <GithubLogo size={14} /> Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export function Works() {
    const containerRef = useReveal<HTMLDivElement>();

    return (
        <div
            ref={containerRef}
            className="relative scroll-mt-20 overflow-hidden bg-bg2 px-6 py-20"
            id="works"
        >
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />
            <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand1/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-brand2/5 blur-3xl" />

            <section className="relative mx-auto max-w-6xl">
                <header className="flex flex-col gap-3">
                    <span className="font-ibm text-sm text-brand1">// what I actually built</span>
                    <h2 className="text-3xl font-bold text-gradient-brand md:text-4xl">Projects</h2>
                    <p className="max-w-2xl font-ibm text-sm leading-relaxed text-white/60">
                        What each one does, how it was put together and which tools did the work — no
                        need to open anything to find out.
                    </p>
                </header>

                <div className="mt-16 flex flex-col gap-20 md:gap-28">
                    {featuredProjects.map((project, index) => (
                        <FeaturedProject key={project.id} project={project} index={index} />
                    ))}
                </div>

                <div className="mt-24">
                    <div className="mb-8 flex items-baseline gap-3">
                        <h3 className="font-ibm text-lg font-bold text-brand1">Also built</h3>
                        <span className="h-px flex-1 bg-gradient-to-r from-brand1/40 to-transparent" />
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        {otherProjects.map((project) => (
                            <CompactProject key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
