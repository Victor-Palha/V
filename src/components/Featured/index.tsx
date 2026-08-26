import { ArrowRight } from "@phosphor-icons/react";
import { TechChips } from "../TechChip";
import { featuredProjects } from "../../data/projects";

/**
 * Sits where the skill counters used to be. A visitor who never scrolls should
 * still leave knowing the three things worth knowing.
 */
export function Featured() {
    return (
        <section className="relative mx-auto w-full max-w-[21rem] rounded-3xl bg-bg2 p-5 shadow-xl ring-1 ring-white/5">
            <div className="mb-4 flex items-baseline justify-between gap-3">
                <h2 className="font-ibm text-sm text-brand1">// start here</h2>
                <a
                    href="#works"
                    className="inline-flex items-center gap-1 font-ibm text-xs text-white/50 transition-colors hover:text-brand1"
                >
                    all projects <ArrowRight size={12} weight="bold" />
                </a>
            </div>

            <div className="flex flex-col gap-3">
                {featuredProjects.map((project) => (
                    <a
                        key={project.id}
                        href={`#project-${project.id}`}
                        className="group flex flex-col gap-2.5 rounded-2xl border border-white/5 bg-bg1/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-brand1/40 hover:glow-brand"
                    >
                        <div className="flex items-start gap-3">
                            <img
                                src={project.image}
                                alt=""
                                className="h-12 w-14 shrink-0 rounded-lg object-cover object-center ring-1 ring-white/10"
                            />
                            <div className="flex flex-col gap-1">
                                <h3 className="flex items-center gap-1.5 font-bold text-white transition-colors duration-300 group-hover:text-brand1">
                                    {project.name}
                                    <ArrowRight
                                        size={13}
                                        weight="bold"
                                        className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    />
                                </h3>
                                <p className="font-ibm text-xs leading-snug text-white/60">
                                    {project.tagline}
                                </p>
                            </div>
                        </div>
                        <TechChips stack={project.stack} dense limit={4} />
                    </a>
                ))}
            </div>
        </section>
    );
}
