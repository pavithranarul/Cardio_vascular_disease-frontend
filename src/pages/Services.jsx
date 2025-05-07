import React, { useState } from "react";
import axios from "axios";

const base_url = 'https://pavithranarul-predict-cardiovascular-diseases.hf.space'

const Services = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDiagnose = async () => {
    if (!name || !age || !gender || !image) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("image", image);

    try {
      setLoading(true);
      const response = await axios.post(`${base_url}/predict`, formData, {
        responseType: "blob",
      });

      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `ECG_Report_${name.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Diagnosis failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-700 flex items-center justify-center px-4 py-10 font-mono">
      <div className="w-full max-w-md sm:max-w-xl lg:max-w-2xl bg-gray-800 text-white p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)]">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-8 tracking-wide">
          ECG Diagnosis Service
        </h2>

        {/* Form Fields */}
        <div className="space-y-5">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Age */}
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          />

          {/* Gender */}
          <div className="relative">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full bg-gray-700 text-white px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* File Upload */}
          <div className="w-full flex items-center gap-4">
            <label className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition">
              Choose File
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="hidden"
              />
            </label>

            <span className="text-sm text-gray-300 truncate">
              {image ? image.name : "No file selected"}
            </span>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleDiagnose}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 duration-200"
          >
            {loading ? "Diagnosing..." : "Diagnose"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
