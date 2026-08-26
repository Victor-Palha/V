import { useReveal } from "../../hooks/useReveal";
import { skillGroups } from "../../data/skills";

/**
 * The full toolbox, kept deliberately dense and at the bottom: the projects
 * above already show what each tool was used for. This is here for whoever is
 * scanning for a keyword.
 */
export function Stack() {
    const containerRef = useReveal<HTMLDivElement>();

    return (
        <div
            ref={containerRef}
            className="relative scroll-mt-20 overflow-hidden bg-bg1 px-6 py-16"
            id="stack"
        >
            <div className="pointer-events-none absolute inset-0 grid-pattern opacity-30" />

            <section className="relative mx-auto max-w-5xl">
                <header className="flex flex-col gap-2">
                    <span className="font-ibm text-sm text-brand1">// the rest of the toolbox</span>
                    <h2 className="text-2xl font-bold text-white">Stack</h2>
                </header>

                <dl className="mt-8 flex flex-col divide-y divide-white/5">
                    {skillGroups.map((group) => (
                        <div
                            key={group.label}
                            className="reveal grid gap-2 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                        >
                            <dt className="font-ibm text-sm text-brand1">{group.label}</dt>
                            <dd className="flex flex-wrap gap-x-2 gap-y-1.5 font-ibm text-sm text-white/70">
                                {group.skills.map((skill, index) => (
                                    <span key={skill.title} className="inline-flex items-center gap-2">
                                        {index > 0 && <span className="text-white/20">·</span>}
                                        <span className="transition-colors duration-300 hover:text-brand1">
                                            {skill.title}
                                        </span>
                                    </span>
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>
        </div>
    );
}
