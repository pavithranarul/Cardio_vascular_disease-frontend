import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/services");
  };

  return (
    <div className="bg-gray-700 text-white min-h-[calc(100vh-64px)] flex flex-col">
      <div className="flex-grow flex flex-col items-center text-center p-4 font-mono">
        <p className="text-sm text-gray-300 mb-4">
          Detection of CardioVascular Disease using ECG Image
        </p>
  
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          CARDIO-VASCULAR <br className="hidden md:block" /> DISEASE
        </h1>
  
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          AI to detect disease from ECG
        </p>
  
        <button
          onClick={handleGetStarted}
          className="bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transform hover:scale-105 transition duration-300 ease-in-out text-white font-semibold px-6 py-2 rounded mb-8"
        >
          Get Started
        </button>
  
        <div className="w-full max-w-3xl">
          <img
            onClick={handleGetStarted}
            src="/heart.png"
            alt="ECG Visualization"
            className="rounded-xl transition-transform duration-300 hover:scale-105 w-full max-w-md mx-auto hover:filter hover:drop-shadow-[0_0_20px_rgba(96,165,250,0.7)]"
          />
        </div>
      </div>
      <footer className="w-full p-4 bg-gray-800 text-center font-arial">
        <p className="text-sm text-gray-300">© 2025 Cardiovascular AI. All rights reserved.</p>
      </footer>
    </div>
  );  
}
export default Home;
