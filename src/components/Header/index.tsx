import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { profile } from "../../data/profile";

type NavLink = { label: string; href: string; external?: boolean };

const links: NavLink[] = [
    { label: "Projects", href: "#works" },
    { label: "Stack", href: "#stack" },
    { label: "LinkedIn", href: profile.linkedin, external: true },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 -mx-6 px-6 font-ibm text-white transition-all duration-300 ${scrolled
                    ? "bg-bg1/80 py-3 shadow-lg shadow-black/30 backdrop-blur-md border-b border-brand1/20"
                    : "bg-bg1 py-6 border-b border-bg2"
                }`}
        >
            <div className="flex items-center justify-between">
                <a href="#top" className="group text-lg">
                    <span className="text-brand1 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#12F7D6]">
                        &lt;V/&gt;
                    </span>
                    {profile.shortName}
                </a>

                <nav className="hidden items-center gap-6 sm:flex">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="link-underline text-sm transition-colors duration-300 hover:text-brand1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={`mailto:${profile.email}`}
                        className="rounded-full border border-brand1 px-4 py-1.5 text-sm text-brand1 transition-all duration-300 hover:bg-brand1 hover:text-bg2 hover:glow-brand"
                    >
                        Hire me
                    </a>
                </nav>

                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="text-brand1 sm:hidden"
                >
                    {isOpen ? <X size={26} /> : <List size={26} />}
                </button>
            </div>

            {/* Mobile menu */}
            <nav
                className={`grid overflow-hidden transition-all duration-300 sm:hidden ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="flex min-h-0 flex-col gap-3 pt-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-white/80 transition-colors duration-300 hover:text-brand1"
                        >
                            <span className="text-brand1">/</span> {link.label}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    )
}
