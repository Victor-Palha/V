import { useEffect, useRef } from "react";

type UseRevealOptions = {
    threshold?: number;
    once?: boolean;
};

/**
 * Adds the `is-visible` class to every `.reveal` element inside the returned ref
 * as soon as it enters the viewport, so sections animate in while scrolling.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>({ threshold = 0.15, once = true }: UseRevealOptions = {}) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const root = ref.current;
        if (!root) return;

        const targets = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
        if (root.classList.contains("reveal")) targets.push(root);
        if (targets.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    if (once) observer.unobserve(entry.target);
                } else if (!once) {
                    entry.target.classList.remove("is-visible");
                }
            });
        }, { threshold });

        targets.forEach((target) => observer.observe(target));
        return () => observer.disconnect();
    }, [threshold, once]);

    return ref;
}
