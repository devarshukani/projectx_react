import { useState } from "react";

const QueOfDaySection = () => {
  const questions = [
    {
      question:
        "A 25 year old patient with caries is scheduled for a dental extraction. Which if the following cardiac conditions does not requires endocarditis prophylaxis prior to dental extraction?",
      options: [
        "Prior history of endocarditis",
        "Uncomplicated mitral valve prolapse",
        "Prosthetic cardiac valve",
        "Unrepaired cyanotic congenital heart disease",
      ],
    },
    {
      question:
        "Which of the following is the most common cause of community-acquired pneumonia?",
      options: [
        "Streptococcus pneumoniae",
        "Haemophilus influenzae",
        "Mycoplasma pneumoniae",
        "Klebsiella pneumoniae",
      ],
    },
    {
      question:
        "A patient presents with sudden onset of fever, productive cough, and chest pain. Which diagnostic test should be ordered first?",
      options: [
        "Chest X-ray",
        "Complete Blood Count",
        "Sputum Culture",
        "CT Scan",
      ],
    },
  ];

  const optionIndex = ["A", "B", "C", "D"];
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("right");

  const handleSelectedOption = (index) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]:
        selectedAnswers[currentQuestionIndex] === index ? null : index,
    }));
  };

  const handlePrevQuestion = () => {
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentQuestionIndex((prev) =>
        prev > 0 ? prev - 1 : questions.length - 1
      );
    }, 50); // Small delay to ensure animation triggers
  };

  const handleNextQuestion = () => {
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentQuestionIndex((prev) =>
        prev < questions.length - 1 ? prev + 1 : 0
      );
    }, 50); // Small delay to ensure animation triggers
  };

  const handleDotClick = (index) => {
    if (index === currentQuestionIndex) return;
    setSlideDirection(index > currentQuestionIndex ? "right" : "left");
    setTimeout(() => {
      setCurrentQuestionIndex(index);
    }, 50); // Small delay to ensure animation triggers
  };

  return (
    <div
      className="bg-[#F9F9F9] text-[#2A2B2D80] w-80 flex flex-col items-center p-6 min-w-[347px] h-[550px] rounded-2xl relative overflow-hidden"
      style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)" }}
    >
      <div className="mb-4">
        <p className="text-2xl font-semibold">Question of the day</p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevQuestion}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#235391] text-white p-2 rounded-full hover:bg-[#1b4170] transition-colors z-10"
      >
        <i className="ri-arrow-left-s-line text-xl"></i>
      </button>
      <button
        onClick={handleNextQuestion}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#235391] text-white p-2 rounded-full hover:bg-[#1b4170] transition-colors z-10"
      >
        <i className="ri-arrow-right-s-line text-xl"></i>
      </button>

      <div className="w-full flex-1 relative overflow-hidden">
        <div
          key={currentQuestionIndex + slideDirection} // Force re-render for animation
          className="absolute w-full transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(${
              slideDirection === "right" ? "100%" : "-100%"
            })`,
            animation: `slide${
              slideDirection === "right" ? "FromRight" : "FromLeft"
            } 0.5s forwards`,
          }}
        >
          <p className="text-center text-sm font-normal text-[#2A2B2D] mb-6">
            {questions[currentQuestionIndex].question}
          </p>

          <div className="flex flex-col gap-y-3">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center gap-x-4 border border-[#2A2B2D80] p-4 rounded-md cursor-pointer transition-all duration-300 ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? "bg-[#235391] text-white"
                    : "bg-white text-[#2A2B2D] hover:bg-gray-50"
                }`}
                onClick={() => handleSelectedOption(index)}
              >
                <p
                  className={`w-5 rounded-sm text-center font-semibold px-0.5 bg-transparent`}
                >
                  {optionIndex[index]}
                </p>
                <p>{option}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-2 mt-4">
        {questions.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentQuestionIndex === index ? "bg-[#235391]" : "bg-gray-300"
            } ${
              selectedAnswers[index] !== undefined
                ? "ring-2 ring-offset-2 ring-[#235391]"
                : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default QueOfDaySection;
