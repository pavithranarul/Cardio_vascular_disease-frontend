import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] justify-center items-center text-center px-4 py-16 bg-gray-700 text-white font-mono">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
        Transforming heart health
      </h2>
      <h3 className="text-2xl font-semibold mb-4">
        AI-powered ECG diagnosis
      </h3>
      <p className="max-w-3xl text-white text-lg mb-8 justify-center">
        Our mission is to revolutionize cardiovascular disease diagnosis using cutting-edge AI technology. 
        By analyzing ECG images, we provide accurate predictions of potential heart conditions, empowering 
        individuals to take proactive steps towards their health. Located in Chennai, we strive to deliver 
        precise, timely, and reliable insights into cardiovascular health, making heart care accessible to everyone.
      </p>
      <button
        onClick={handleContactClick}
        className="border-2 border-black rounded-2xl px-6 py-2 text-lg font-semibold hover:bg-black hover:text-gray-300 transition duration-300"
      >
        Get in touch
      </button>
    </div>
  );
};

export default About;
