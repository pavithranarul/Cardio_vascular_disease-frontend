import React, { useState } from "react";

const steps = [
  {
    title: "Enter Patient Details",
    description: "Fill in the name, age, and gender of the patient.",
    more: "Accurate demographic data helps personalize diagnosis and improves prediction accuracy.",
    image: "/images/accuracy.jpeg",
  },
  {
    title: "Upload ECG Image",
    description: "Upload the ECG scan for analysis.",
    more: "Our system supports image formats like JPG, PNG, and ensures secure upload for medical data.",
    image: "/images/image_upload.jpeg",
  },
  {
    title: "AI Prediction & Report",
    description: "Our AI will predict diagnosis and generate a report.",
    more: "You will get a downloadable PDF containing patient details, predicted condition, and confidence score.",
    image: "/images/prediction.jpeg",
  },
];

const HowItWorks = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] pt-20 text-center items-center bg-gray-700 text-white font-mono">
      <h2 className="text-3xl font-bold text-blue-600 mb-2">How It Works</h2>
      <p className="text-xl mb-12">Just a few simple steps for instant diagnosis.</p>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => toggleExpand(index)}
            aria-expanded={expanded === index}
            aria-controls={`step-${index}`}
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-64 object-cover rounded shadow-md mb-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            />
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-wheat">{step.description}</p>
            {expanded === index && (
              <p id={`step-${index}`} className="mt-4 text-sm text-black">
                {step.more}
              </p>
            )}
            <p className="mt-2 text-blue-600 underline text-sm">
              {expanded === index ? "Show less" : "Learn more"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
