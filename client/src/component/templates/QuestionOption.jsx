import React from "react";

const QuestionOption = ({option}) => {
  return (
    <div className="bg-[#f9f9f9] px-6 py-8 w-[90%] text-lg flex gap-3 shadow-md rounded-lg">
      <input type="radio" />
      <p>{option}</p>
    </div>
  );
};

export default QuestionOption;
