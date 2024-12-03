import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Title } from "../Title";
import { useState } from "react";

type Project = {
  id: number;
  name: string;
  url: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Ash Chat",
    url: "https://github.com/Victor-Palha/AshChat",
    image: "/src/assets/projects/ashchat.png",
  },
  {
    id: 2,
    name: "Ash Drive",
    url: "https://github.com/Victor-Palha/ash-drive",
    image: "/src/assets/projects/ashdrive.png",
  },
  {
    id: 3,
    name: "Link Saver",
    url: "https://github.com/Victor-Palha/linkSaverNative",
    image: "/src/assets/projects/linksaver.png",
  },
  {
    id: 4,
    name: "Medieval Tavern",
    url: "https://medieval-tavern.onrender.com/",
    image: "/src/assets/projects/medieval-client.png",
  },
  {
    id: 5,
    name: "Aspop",
    url: "https://aspop-pa.com",
    image: "/src/assets/projects/aspop.png",
  },
  {
    id: 6,
    name: "Coffe Delivery",
    url: "https://coffe-delivery-r8e9.onrender.com/",
    image: "/src/assets/projects/coffeDelivery.png",
  },
  {
    id: 7,
    name: "YT-AI",
    url: "https://github.com/Victor-Palha/Youtube-Transcription-AI",
    image: "/src/assets/projects/YT-AI.png",
  },
  {
    id: 8,
    name: "Bionama",
    url: "https://bionama.onrender.com/",
    image: "/src/assets/projects/bionama.png",
  },
  {
    id: 9,
    name: "dtMoney",
    url: "https://github.com/Victor-Palha/dt-money-api",
    image: "/src/assets/projects/dtMoney.png",
  },
  {
    id: 10,
    name: "IWeather",
    url: "https://victor-palha.github.io/weather/",
    image: "/src/assets/projects/IWeather.png",
  },
];

export function Works() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative py-10 px-6 text-center text-white bg-bg2 bg-[url('/src/assets/Works.png')]">
      {/* Título */}
      <Title title="Works" subtitle="I had the pleasure of working with these awesome projects" />

      {/* Carrossel */}
      <div className="flex items-center justify-center gap-6 relative">
        {/* Botão Esquerdo */}
        <button
          onClick={handlePrev}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <FaArrowLeft size={16} color="white" />
        </button>

        {/* Projeto Atual */}
        <div className="rounded-lg shadow-lg p-4 flex flex-col items-center justify-between text-center">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].name}
            className="object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-bold text-teal-400">{projects[currentIndex].name}</h3>
          <a
            href={projects[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-400 text-black py-2 px-4 rounded-md hover:bg-teal-300"
          >
            View Project
          </a>
        </div>

        {/* Botão Direito */}
        <button
          onClick={handleNext}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <FaArrowRight size={16} color="white" />
        </button>
      </div>
    </section>
  );
}