import React from "react";

const QuestionIcon = ({ value, color, text }) => {
  const backgroundColor = color || "#cbcdd2";

  return (
    <div className="flex items-center">
      <div
        style={{ backgroundColor }}
        className={`rounded h-[7vh] w-[7vh] justify-center items-center flex`}
      >
        {value}
      </div>
      {text && (
        <p className="text-base lg:text-lg font-semibold whitespace-nowrap">
          {text}
        </p>
      )}
    </div>
  );
};

export default QuestionIcon;