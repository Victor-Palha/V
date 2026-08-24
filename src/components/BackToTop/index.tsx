import { useEffect, useState } from "react";
import { ArrowUp } from "@phosphor-icons/react";

export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-brand1/40 bg-bg2/80 text-brand1 backdrop-blur-md transition-all duration-300 hover:bg-brand1 hover:text-bg2 hover:glow-brand-strong ${
                visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
            }`}
        >
            <ArrowUp size={22} weight="bold" />
        </button>
    );
}
