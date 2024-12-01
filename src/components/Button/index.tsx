import { CaretDoubleRight } from "@phosphor-icons/react";

type ButtonProps = React.ComponentProps<"button"> & {
    text: string;
    variant: "primary" | "secondary";
}
export function Button({ text, variant, ...rest }: ButtonProps) {
    const primary = "bg-brand1 rounded-full px-5 py-2 flex items-center justify-center gap-2 hover:bg-white transition";
    const secondary = "border border-brand1 bg-bg1 text-brand1 rounded-full px-5 py-2 flex items-center justify-center gap-2 hover:bg-white transition";

    return (
        <button {...rest} className={variant === "primary" ? primary : secondary}>
            {text}
            <CaretDoubleRight size={20} />
        </button>
    )
}