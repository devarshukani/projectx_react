import React from "react";
import trophyIcon from "/TrophyIcon.svg";
import Button from "./Button";

const QuizSlider = () => {
  const quizzes = [
    "Medical Entrance Quiz",
    "Anatomy Knowledge Test",
    "Physiology Challenge",
    "Biochemistry Quiz",
    "Pathology Test",
    "Pharmacology Quiz",
    "Medical Ethics Quiz"
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%]  rounded-xl p-4 shadow-sm">
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
          <div className="flex gap-6 min-w-max">
            {quizzes.map((quiz, index) => (
              <div key={index} className="flex items-center gap-4 min-w-[20%] bg-[#eaedef] mb-4 rounded-lg p-4">
                <img src={trophyIcon} alt="trophy" className="w-8 h-8" />
                <span className="text-lg font-medium flex-grow">{quiz}</span>
                <Button name="Participate" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSlider;