import React, { useState } from "react";
import arrowLeft from "/arrowLeft.png";
import Button from "./Button";

const SubjectSlider = () => {
  const subjects = [
    { name: "Physics", topic: "Mechanics & Waves" },
    { name: "Chemistry", topic: "Organic Chemistry" },
    { name: "Biology", topic: "Human Physiology" },
    { name: "Mathematics", topic: "Calculus" },
    { name: "Anatomy", topic: "Cardiovascular System" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? subjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === subjects.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="w-[80%] h-100 rounded-2xl relative">
        {/* Container for all slides */}
        <div
          className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${
              currentIndex * 1.5
            }rem))`,
          }}
        >
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 mr-6 rounded-2xl relative overflow-hidden"
            >
              {/* Background Image for each slide */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "url('/homeHeader.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                <h2 className="text-3xl font-semibold text-black">
                  {subject.name}
                </h2>
                <div className="flex justify-between items-end">
                  <Button name="Demo Lecture" />
                  <span className="text-xl font-medium text-black">
                    {subject.topic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#DEE6F2] rounded-lg p-7 z-20"
        >
          <img src={arrowLeft} alt="" className="h-4 w-2" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#DEE6F2] rounded-lg p-7 z-20"
        >
          <img src={arrowLeft} alt="" className="h-4 w-2 rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default SubjectSlider;
