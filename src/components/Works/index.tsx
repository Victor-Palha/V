import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Title } from "../Title";
import { useState } from "react";
import project1 from "../../assets/projects/ashchat.png";
import project2 from "../../assets/projects/ashdrive.png";
import project3 from "../../assets/projects/linksaver.png";
import project4 from "../../assets/projects/medieval-client.png";
import project5 from "../../assets/projects/aspop.png";
import project6 from "../../assets/projects/coffeDelivery.png";
import project7 from "../../assets/projects/YT-AI.png";
import project8 from "../../assets/projects/bionama.png";
import project9 from "../../assets/projects/dtMoney.png";
import project10 from "../../assets/projects/IWeather.png";

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
    image: project1,
  },
  {
    id: 2,
    name: "Ash Drive",
    url: "https://github.com/Victor-Palha/ash-drive",
    image: project2,
  },
  {
    id: 3,
    name: "Link Saver",
    url: "https://github.com/Victor-Palha/linkSaverNative",
    image: project3,
  },
  {
    id: 4,
    name: "Medieval Tavern",
    url: "https://medieval-tavern.onrender.com/",
    image: project4
  },
  {
    id: 5,
    name: "Aspop",
    url: "https://aspop-pa.com",
    image: project5
  },
  {
    id: 6,
    name: "Coffe Delivery",
    url: "https://coffe-delivery-r8e9.onrender.com/",
    image: project6
  },
  {
    id: 7,
    name: "YT-AI",
    url: "https://github.com/Victor-Palha/Youtube-Transcription-AI",
    image: project7
  },
  {
    id: 8,
    name: "Bionama",
    url: "https://bionama.onrender.com/",
    image: project8
  },
  {
    id: 9,
    name: "dtMoney",
    url: "https://github.com/Victor-Palha/dt-money-api",
    image: project9
  },
  {
    id: 10,
    name: "IWeather",
    url: "https://victor-palha.github.io/weather/",
    image: project10
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
    <section className="relative pb-32 py-10 px-4 sm:px-6 text-center text-white bg-bg2 bg-[url('/src/assets/Works.png')] bg-cover">
      {/* Título */}
      <Title title="Works" subtitle="I had the pleasure of working with these awesome projects" />

      {/* Carrossel */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 relative ">
        {/* Botão Esquerdo */}
        <button
          onClick={handlePrev}
          className="w-8 h-8 flex left-0 absolute md:relative items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <FaArrowLeft size={14} color="white" />
        </button>

        {/* Projeto Atual */}
        <div className="max-w-md max-h-[735px] p-4 flex flex-col items-center text-center">
          <img
            src={projects[currentIndex].image}
            alt={projects[currentIndex].name}
            className="w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-lg sm:text-xl font-bold text-teal-400">
            {projects[currentIndex].name}
          </h3>
          <a
            href={projects[currentIndex].url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-teal-400 text-black py-2 px-4 rounded-md hover:bg-teal-300 text-sm sm:text-base"
          >
            View Project
          </a>
        </div>

        {/* Botão Direito */}
        <button
          onClick={handleNext}
          className="w-8 h-8 flex right-0 absolute md:relative items-center justify-center bg-gray-800 rounded-full hover:bg-gray-700"
        >
          <FaArrowRight size={14} color="white" />
        </button>
      </div>
    </section>
  );
}
