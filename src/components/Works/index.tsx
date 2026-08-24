import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Title } from "../Title";
import { useCallback, useEffect, useMemo, useState } from "react";
import project1 from "../../assets/projects_2/1.png";
import project2 from "../../assets/projects_2/2.png";
import project3 from "../../assets/projects_2/3.png";
import project4 from "../../assets/projects_2/4.png";
import project5 from "../../assets/projects_2/5.png";
import project6 from "../../assets/projects_2/6.png";
import project7 from "../../assets/projects_2/7.png";

type Project = {
  id: number;
  name: string;
  url: string;
  liveView?: string;
  image: string;
  tags?: string[];
};

const projects: Project[] = [
  {
    id: 0,
    name: "Verene Band",
    url: "https://verene.onrender.com/",
    liveView: "https://verene.onrender.com/",
    image: project7,
    tags: ["React", "TypeScript"]
  },
  {
    id: 1,
    name: "GranaFlow",
    url: "https://github.com/Victor-Palha/GranaFlow",
    liveView: "https://granaflow.onrender.com/",
    image: project1,
    tags: ["Full-stack", "Finance"]
  },
  {
    id: 2,
    name: "Ash Chat",
    url: "https://github.com/Victor-Palha/AshChat",
    image: project2,
    tags: ["Elixir", "Realtime"]
  },
  {
    id: 3,
    name: "Ash Drive",
    url: "https://github.com/Victor-Palha/ash-drive",
    image: project3,
    tags: ["Storage", "API"]
  },
  {
    id: 4,
    name: "Link Saver",
    url: "https://github.com/Victor-Palha/linkSaverNative",
    image: project4,
    tags: ["React Native"]
  },
  {
    id: 5,
    name: "Medieval Tavern",
    liveView: "https://medieval-tavern.onrender.com/",
    url: "https://github.com/Victor-Palha/Medieval-Tavern",
    image: project5,
    tags: ["Game", "Web"]
  },
  {
    id: 6,
    name: "YT-AI",
    url: "https://github.com/Victor-Palha/Youtube-Transcription-AI",
    image: project6,
    tags: ["AI", "LLM", "Transcription"]
  }
];

const PARTICLE_COUNT = 24;

export function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Generated once so the particles keep their position across re-renders
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        size: Math.random() * 10 + 2,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      })),
    []
  );

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  // Auto-rotate every 5 seconds when not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const current = projects[currentIndex];

  return (
    <section
      className="relative scroll-mt-20 py-20 px-4 sm:px-6 text-center bg-gradient-to-b from-bg2 to-bg1 overflow-hidden"
      id="works"
    >
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-brand1"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              animation: `float ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Título */}
      <Title
        title="My Projects"
        subtitle="Explore my works and projects that showcase my skills and creativity."
      />

      {/* Carrossel Container */}
      <div
        className="relative max-w-6xl mx-auto mt-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Botão Esquerdo */}
        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-brand1/20 backdrop-blur-sm rounded-full hover:bg-brand1/30 transition-all duration-300 shadow-lg hover:scale-110 hover:glow-brand"
        >
          <FaArrowLeft size={18} className="text-brand1" />
        </button>

        {/* Projeto Atual */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group ring-1 ring-white/10">
          {/* Project Image with gradient overlay */}
          <div className="relative md:h-[42rem] overflow-hidden">
            <img
              key={current.id}
              src={current.image}
              alt={current.name}
              className="w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
          </div>

          {/* Project Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
            <div key={current.id} className="animate-fade-up transform transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
              {current.tags && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-brand1/40 bg-brand1/10 px-3 py-1 font-ibm text-xs text-brand1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {current.name}
              </h3>
              <div className="flex gap-4 mt-4">
                {current.liveView && (
                  <a
                    href={current.liveView}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-brand1 text-bg2 font-semibold py-3 px-6 rounded-full hover:bg-brand2 transition-all duration-300 hover:scale-105 hover:glow-brand-strong"
                  >
                    <FaExternalLinkAlt /> View Live
                  </a>
                )}
                <a
                  href={current.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-bg1 text-white py-3 px-6 rounded-full border border-white/10 hover:border-brand1/60 hover:text-brand1 transition-all duration-300 hover:scale-105"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Botão Direito */}
        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-brand1/20 backdrop-blur-sm rounded-full hover:bg-brand1/30 transition-all duration-300 shadow-lg hover:scale-110 hover:glow-brand"
        >
          <FaArrowRight size={18} className="text-brand1" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => goToProject(index)}
              className={`h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-brand1 w-6 glow-brand' : 'w-3 bg-gray1 hover:bg-brand1/50'}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
