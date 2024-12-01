import { EnvelopeSimple, MapPinLine } from "@phosphor-icons/react";

export function Card() {
    return (
      <div className="w-full max-w-sm mx-auto bg-gradient-to-b from-bg2 to-brand2 rounded-xl p-2 shadow-lg font-ibm">
        {/* Black section */}
        <div className="bg-bg1 rounded-lg overflow-hidden shadow-inner">
          {/* Top clip */}
          <div className="relative">
            <div className="absolute inset-x-0 -top-4 mx-auto w-12 h-6 bg-black rounded-b-md"></div>
          </div>
  
          {/* Image */}
          <div className="flex justify-center mt-6">
            <img
              src="https://avatars.githubusercontent.com/u/87082135?v=4" // Substitua pela URL da imagem desejada
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-black"
            />
          </div>
  
          {/* Name */}
          <div className="text-center mt-4">
            <h2 className="text-white text-xl font-bold">João Victor Ferreira Palha</h2>
          </div>
  
          {/* Event Title */}
          <div className="text-center mt-4">
            <p className="text-white text-lg font-bold">
              <span className="text-brand1">&lt;V/&gt;</span> <span className="text-sm font-light">Full-stack Developer</span>
            </p>
          </div>
  
          {/* Event Dates */}
          <div className="flex flex-col justify-start pl-12 gap-4 mt-4">
            <div className="text-center mt-2 gap-2 flex items-center">
                <EnvelopeSimple size={20} className="text-brand1"/>
                <p className="text-white text-sm">jv.palha@gmail.com</p>
            </div>
            <div className="text-center mt-2 gap-2 flex items-center">
                <MapPinLine size={20} className="text-brand1"/>
                <p className="text-white text-sm">Brazil</p>
            </div>
          </div>
  
          {/* Footer */}
          <div className="text-center mt-4 py-4 border-t border-gray-700">
            <p className="text-gray-400 text-xs uppercase">curriculum vitae</p>
            <a download href="/cv.pdf" target="_blank">
                <p className="text-white text-sm font-bold underline underline-offset-4">Download</p>
            </a>
          </div>
        </div>
      </div>
    );
  };