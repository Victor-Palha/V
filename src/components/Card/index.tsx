import { DownloadSimple, EnvelopeSimple, MapPinLine } from "@phosphor-icons/react";
import { profile, YEARS_OF_EXPERIENCE } from "../../data/profile";

export function Card() {
    return (
      <div className="group w-full max-w-sm mx-auto rounded-xl p-[2px] shadow-lg font-ibm brand-ring transition-transform duration-500 hover:-translate-y-2">
        {/* Black section */}
        <div className="relative bg-bg1 rounded-lg overflow-hidden shadow-inner">
          {/* Shine sweeping across the card on hover */}
          <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:[animation:shimmer_1.2s_ease-in-out]" />

          {/* Top clip */}
          <div className="relative">
            <div className="absolute inset-x-0 -top-4 mx-auto w-12 h-6 bg-black rounded-b-md"></div>
          </div>

          {/* Image */}
          <div className="flex justify-center mt-6">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-brand1/30 blur-xl opacity-60 animate-glow" />
              <img
                src="https://avatars.githubusercontent.com/u/87082135?v=4"
                alt="Profile"
                className="relative w-28 h-28 rounded-full border-4 border-black transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Name */}
          <div className="text-center mt-4 px-4">
            <h2 className="text-white text-xl font-bold">{profile.name}</h2>
          </div>

          {/* Event Title */}
          <div className="text-center mt-4">
            <p className="text-white text-lg font-bold">
              <span className="text-brand1">&lt;V/&gt;</span> <span className="text-sm font-light">{profile.role}</span>
            </p>
          </div>

          {/* Experience badge */}
          <div className="mt-4 flex justify-center">
            <span className="rounded-full border border-brand1/30 bg-brand1/10 px-3 py-1 text-xs text-brand1">
              {YEARS_OF_EXPERIENCE}+ years of experience
            </span>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-start pl-12 gap-4 mt-4">
            <div className="text-center mt-2 gap-2 flex items-center">
                <EnvelopeSimple size={20} className="text-brand1"/>
                <p className="text-white text-sm">{profile.email}</p>
            </div>
            <div className="text-center mt-2 gap-2 flex items-center">
                <MapPinLine size={20} className="text-brand1"/>
                <p className="text-white text-sm">{profile.location}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-4 py-4 border-t border-gray-700">
            <p className="text-gray-400 text-xs uppercase">curriculum vitae</p>
            <a
              download
              href="/cv.pdf"
              target="_blank"
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-brand1/40 px-4 py-1.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand1 hover:text-bg2 hover:glow-brand"
            >
                <DownloadSimple size={16} />
                Download
            </a>
          </div>
        </div>
      </div>
    );
  };
