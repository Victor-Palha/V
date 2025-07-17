import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Title } from "../Title";
import { useState, useEffect } from "react";
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
};

const projects: Project[] = [
  {
    id: 0,
    name: "Verene Band",
    url: "https://verene.onrender.com/",
    liveView: "https://verene.onrender.com/",
    image: project7
  },
  {
    id: 1,
    name: "GranaFlow",
    url: "https://github.com/Victor-Palha/GranaFlow",
    liveView: "https://granaflow.onrender.com/",
    image: project1
  },
  {
    id: 2,
    name: "Ash Chat",
    url: "https://github.com/Victor-Palha/AshChat",
    image: project2,
  },
  {
    id: 3,
    name: "Ash Drive",
    url: "https://github.com/Victor-Palha/ash-drive",
    image: project3,
  },
  {
    id: 4,
    name: "Link Saver",
    url: "https://github.com/Victor-Palha/linkSaverNative",
    image: project4,
  },
  {
    id: 5,
    name: "Medieval Tavern",
    liveView: "https://medieval-tavern.onrender.com/",
    url: "https://github.com/Victor-Palha/Medieval-Tavern",
    image: project5
  },
  {
    id: 6,
    name: "YT-AI",
    url: "https://github.com/Victor-Palha/Youtube-Transcription-AI",
    image: project6
  }
];

export function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate every 5 seconds when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section 
      className="relative py-20 px-4 sm:px-6 text-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
      id="works"
    >
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-teal-400"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
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
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-teal-500/20 backdrop-blur-sm rounded-full hover:bg-teal-500/30 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-teal-500/30"
        >
          <FaArrowLeft size={18} className="text-teal-400" />
        </button>

        {/* Projeto Atual */}
        <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
          {/* Project Image with gradient overlay */}
          <div className="relative md:h-[42rem] overflow-hidden">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          
          {/* Project Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left">
            <div className="transform transition-all duration-500 translate-y-0 group-hover:-translate-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {projects[currentIndex].name}
              </h3>
              <div className="flex gap-4 mt-4">
                {projects[currentIndex].liveView && (
                  <a
                    href={projects[currentIndex].liveView}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-teal-500 text-white py-3 px-6 rounded-full hover:bg-teal-600 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30"
                  >
                    <FaExternalLinkAlt /> View Live
                  </a>
                )}
                <a
                  href={projects[currentIndex].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition-all duration-300"
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
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-teal-500/20 backdrop-blur-sm rounded-full hover:bg-teal-500/30 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-teal-500/30"
        >
          <FaArrowRight size={18} className="text-teal-400" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-teal-500 w-6' : 'bg-gray-500'}`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}