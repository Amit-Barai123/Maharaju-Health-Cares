// components/AboutSection.js
"use client"
import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission");

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return "iLander Technologies is founded by a group of experienced digital marketers 8 years ago to emerge as one of the best digital marketing agencies.";
      case "vision":
        return "iLander Technologies aims to be a leader in digital solutions, continuously evolving and expanding to meet the needs of our clients in the digital age.";
      case "value":
        return "We are committed to delivering high-quality, innovative solutions to our clients with transparency, integrity, and dedication.";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full h-full flex items-center justify-center">
        <img
          src="/images/meeting.jpg" // Replace with your image path
          alt="Team Meeting"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Side - Content */}
      <div className="md:w-1/2 w-full p-6">
        <h2 className="text-xl  text-blue-800">ABOUT ILANDER</h2>
        <p className="mt-4 text-gray-500">
          iLander Technologies Pvt Ltd is one of the best website development
          companies. In our organization, we provide services like dynamic
          website development, e-commerce website development, and payment
          gateway integration.
        </p>

        <div className="flex flex-col  justify-between gap-2 mt-6 md:space-x-2 md:flex-row  ">
          <button
            className={`px-5 py-2 font-semibold text-base rounded-sm flex items-center ${
              activeTab === "mission"
                ? "bg-[#032963] text-white"
                : "bg-white border text-[#032963]"
            }`}
            onClick={() => setActiveTab("mission")}
          >
            <i className="bi bi-house-door-fill text-base mr-2"></i> Our Mission
          </button>
          <button
            className={`px-5 py-2 font-semibold text-sm rounded-sm flex items-center ${
              activeTab === "vision"
                ? "bg-[#032963] text-white"
                : "bg-white border text-[#032963]"
            }`}
            onClick={() => setActiveTab("vision")}
          >
            <i className="bi bi-person-fill mr-2"></i> Our Vision
          </button>
          <button
            className={`px-5 py-2 font-semibold text-base rounded-sm flex items-center ${
              activeTab === "value"
                ? "bg-[#032963] text-white"
                : "bg-white border text-[#032963]"
            }`}
            onClick={() => setActiveTab("value")}
          >
            <i className="bi bi-envelope-fill mr-2"></i> Our Value
          </button>
        </div>

        <div className="mt-6 p-4 border">
          <p className="text-gray-700   ">{renderContent()}</p>
        </div>

        <div className="mt-8 flex justify-around text-center text-blue-800">
          <div>
            <h3 className="text-5xl ">1387</h3>
            <p className="text-xl text-gray-600">Happy Clients</p>
          </div>
          <div>
            <h3 className="text-5xl ">310</h3>
            <p className="text-xl text-gray-600">Success Reports</p>
          </div>
          <div>
            <h3 className="text-5xl ">8</h3>
            <p className="text-xl text-gray-600">Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
