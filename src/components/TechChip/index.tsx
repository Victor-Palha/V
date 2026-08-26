import { TECH, type TechKey } from "../../data/tech";

type TechChipProps = {
    tech: TechKey;
    /** Compact chips drop the label padding, for tight spaces like the hero. */
    dense?: boolean;
};

/** A single technology, readable at a glance: brand-coloured icon plus its name. */
export function TechChip({ tech, dense = false }: TechChipProps) {
    const { label, color, icon } = TECH[tech];

    return (
        <span
            className={`group/chip inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-bg1/60 font-ibm text-white/75 transition-colors duration-300 hover:text-white ${
                dense ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
            }`}
        >
            <span style={{ color }} className="flex shrink-0 items-center">
                {icon}
            </span>
            {label}
        </span>
    );
}

type TechChipsProps = {
    stack: TechKey[];
    dense?: boolean;
    /** Cap the list and show a "+N" pill instead of a wall of chips. */
    limit?: number;
};

export function TechChips({ stack, dense = false, limit }: TechChipsProps) {
    const shown = limit ? stack.slice(0, limit) : stack;
    const hidden = stack.length - shown.length;

    return (
        <div className="flex flex-wrap items-center gap-1.5">
            {shown.map((tech) => (
                <TechChip key={tech} tech={tech} dense={dense} />
            ))}
            {hidden > 0 && (
                <span
                    className={`rounded-full border border-white/10 bg-bg1/60 font-ibm text-white/50 ${
                        dense ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
                    }`}
                >
                    +{hidden}
                </span>
            )}
        </div>
    );
}
