import { ReactNode } from "react";
import { Brain, Code, Terminal, Trophy } from "@phosphor-icons/react";
import { useCountUp } from "../../hooks/useCountUp";
import { aiSkillsCount, languagesCount, toolsCount } from "../../data/skills";
import { YEARS_OF_EXPERIENCE } from "../../data/profile";

type StatProps = {
    value: number;
    suffix?: string;
    label: ReactNode;
    icon: ReactNode;
};

function Stat({ value, suffix = "", label, icon }: StatProps) {
    const { ref, value: current } = useCountUp(value);

    return (
        <div className="group flex w-full items-center gap-4 rounded-2xl border border-white/5 bg-bg1/40 px-5 py-4 text-white transition-all duration-300 hover:border-brand1/40 hover:bg-bg1/70 hover:glow-brand">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand1/10 text-brand1 transition-transform duration-300 group-hover:scale-110">
                {icon}
            </div>
            <span ref={ref} className="text-brand1 text-4xl md:text-5xl font-bold tabular-nums">
                {current}{suffix}
            </span>
            <p className="font-ibm text-lg md:text-xl leading-tight">{label}</p>
        </div>
    );
}

export function Over(){
    return (
        <section className="relative mx-auto w-full max-w-sm rounded-3xl bg-bg2 p-6 shadow-xl ring-1 ring-white/5">
            <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-b from-brand1/20 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100" />

            <div className="flex flex-col gap-4">
                <Stat
                    value={languagesCount}
                    icon={<Code size={22} weight="bold" />}
                    label={<>Programming <br /> Languages</>}
                />
                <Stat
                    value={toolsCount}
                    icon={<Terminal size={22} weight="bold" />}
                    label={<>Development <br /> Tools</>}
                />
                <Stat
                    value={aiSkillsCount}
                    icon={<Brain size={22} weight="bold" />}
                    label={<>AI Tools <br /> in production</>}
                />
                <Stat
                    value={YEARS_OF_EXPERIENCE}
                    suffix="+"
                    icon={<Trophy size={22} weight="bold" />}
                    label={<>Years of <br /> Experience</>}
                />
            </div>
        </section>
    )
}
