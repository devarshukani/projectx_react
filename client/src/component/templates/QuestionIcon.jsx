import React from "react";

const QuestionIcon = ({ value, color, text }) => {
  const backgroundColor = color || "#cbcdd2";

  return (
    <div className="flex items-center">
      <div
        style={{ backgroundColor }}
        className={`rounded w-[5vh] h-[5vh] mr-3 justify-center items-center flex`}
      >
        {value}
      </div>
      {text && <p className="text-lg font-semibold">{text}</p>}
    </div>
  );
};

export default QuestionIcon;
