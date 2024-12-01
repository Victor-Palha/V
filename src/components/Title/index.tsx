import { MouseSimple } from "@phosphor-icons/react";

type TitleProps = {
    title: string;
    subtitle: string;
}
export function Title ({ title, subtitle }: TitleProps) {
  return (
    <section className="flex flex-col items-center justify-center bg-bg1 text-white font-sans">

      {/* Line connecting Module Title and Content */}
      <div className="flex flex-col items-center mt-5">
        <MouseSimple size={20} />
        <div className="w-px h-16 bg-white "></div>
        <div className="w-2 h-2 bg-brand1 rotate-45 mt-1"></div>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center mt-5">
        <h1 className="text-3xl font-bold text-brand1 mb-2">{title}</h1>
        <div></div>
        <p className="text-sm font-ibm">
          {subtitle}
        </p>
      </div>
    </section>
  );
};
