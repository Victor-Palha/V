import { ReactNode } from "react";
import { SKILL_COLORS } from "../../../styles/skillColors";

type IconsProps = {
    title: string
    color: keyof typeof SKILL_COLORS
    icon: ReactNode
    /** Position in the grid, used to stagger the entrance animation. */
    index?: number
}

export function Icons({ title, icon, color, index = 0 }: IconsProps){
    const bgColor = SKILL_COLORS[color] || "";

    return (
        <div
            className="reveal group flex flex-col gap-2 items-center"
            style={{ transitionDelay: `${Math.min(index, 12) * 60}ms` }}
        >
            <div className="relative">
                {/* Halo that lights up on hover */}
                <span className="absolute inset-0 rounded-full bg-brand1/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <div
                    className={`relative w-14 h-14 flex rounded-full items-center justify-center ring-1 ring-white/10 shadow-lg transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-110 group-hover:ring-brand1/70 ${bgColor}`}
                >
                    {icon}
                </div>
            </div>
            <p className="text-white font-ibm text-xs sm:text-sm text-center transition-colors duration-300 group-hover:text-brand1">
                {title}
            </p>
        </div>
    )
}
