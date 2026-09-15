import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { profile } from "../../data/profile";

const socials = [
    { label: "GitHub", href: profile.github, icon: <GithubLogo size={20} /> },
    { label: "LinkedIn", href: profile.linkedin, icon: <LinkedinLogo size={20} /> },
    { label: "Email", href: `mailto:${profile.email}`, icon: <EnvelopeSimple size={20} /> },
];

export function Footer(){
    return (
    <footer className="relative bg-bg2 shadow">
        {/* Brand gradient hairline */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-brand1 to-transparent" />

        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#top" className="group flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-brand1 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_#12F7D6]">
                        &lt;V/&gt;
                    </span>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        {profile.shortName}
                    </span>
                </a>
                <ul className="flex flex-wrap items-center gap-3 mb-6 text-sm font-medium sm:mb-0">
                    {socials.map((social) => (
                        <li key={social.label}>
                            <a
                                href={social.href}
                                {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                aria-label={social.label}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-brand1/60 hover:text-brand1 hover:glow-brand"
                            >
                                {social.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className="my-6 border-white/10 sm:mx-auto lg:my-8" />
            <span className="block text-sm text-gray-400 sm:text-center">
                © 2025 <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brand1 transition-colors">{profile.shortName}</a>. All Rights Reserved.
            </span>
        </div>
    </footer>
    )
}
