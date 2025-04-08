import React from "react";

const QuestionOption = ({ option, name, selected, onSelect }) => {
  return (
    <label className="bg-[#f9f9f9] px-6 py-8 w-[90%] text-lg flex gap-3 shadow-md rounded-lg cursor-pointer">
      <input
        type="radio"
        name={name}
        checked={selected}
        onChange={onSelect}
      />
      <p>{option}</p>
    </label>
  );
};

export default QuestionOption;