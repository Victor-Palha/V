import { MouseSimple } from "@phosphor-icons/react";

type TitleProps = {
    title: string;
    subtitle?: string;
}
export function Title ({ title, subtitle }: TitleProps) {
  return (
    <section className="flex flex-col items-center justify-center text-white font-sans">

      {/* Line connecting Module Title and Content */}
      <div className="flex flex-col items-center mt-5">
        <MouseSimple size={20} className="text-brand1 animate-bob" />
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-brand1"></div>
        <div className="w-2 h-2 bg-brand1 rotate-45 mt-1 animate-glow"></div>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center mt-5">
        <h1 className="text-3xl font-bold text-gradient-brand mb-2">{title}</h1>
        <p className="text-sm font-ibm text-white/70 max-w-md mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
