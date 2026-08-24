import { Title } from "../Title";
import { Icons } from "./Icons";
import { useReveal } from "../../hooks/useReveal";
import { skillGroups } from "../../data/skills";

export function Skills() {
  const containerRef = useReveal<HTMLDivElement>();

  return (
    <div
      ref={containerRef}
      className="relative scroll-mt-20 px-6 bg-bg1 bg-[url('/src/assets/skills.png')] pb-16 overflow-hidden"
      id="skills"
    >
      {/* Scrim so the code wallpaper never fights with the content */}
      <div className="pointer-events-none absolute inset-0 bg-bg1/90" />

      {/* Ambient brand glows */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand1/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand2/10 blur-3xl" />

      <section className="relative max-w-5xl mx-auto">
        <Title title="Skills" subtitle="I am striving to never stop learning and improving" />

        <div className="mt-12 flex flex-col gap-12">
          {skillGroups.map((group) => (
            <div key={group.label} className="reveal">
              <div className="flex items-baseline gap-3 flex-wrap mb-6">
                <h3 className="font-ibm text-xl font-bold text-brand1">
                  <span className="text-white/40 text-sm">&lt;/&gt;</span> {group.label}
                </h3>
                <span className="font-ibm text-xs text-white/50">// {group.hint}</span>
                <span className="h-px flex-1 min-w-8 bg-gradient-to-r from-brand1/50 to-transparent" />
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-8 gap-x-4">
                {group.skills.map((skill, index) => (
                  <Icons
                    key={skill.title}
                    index={index}
                    title={skill.title}
                    color={skill.color}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
