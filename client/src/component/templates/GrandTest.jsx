import React from "react";
import { Link } from "react-router-dom";
import timerIcon from "/timer.png";
import paperIcon from "/paper_icon.png";
import languageIcon from "/lang.png";

const GrandTest = ({ testData }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="px-7 flex justify-start items-center h-[25vh] rounded-xl bg-[#fafafa]">
      <div className="p-5 rounded-lg h-[19vh] w-[19vh] bg-[#dee6f2]">
        <img
          src={testData.image || paperIcon}
          alt={testData.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = paperIcon;
          }}
        />
      </div>

      <div className="ml-5">
        <h1 className="text-black text-xl font-semibold">{testData.name}</h1>
        <p className="text-zinc-500 font-semibold">
          {formatDate(testData.date)}
        </p>
        <p className="mt-1 text-lg text-zinc-500 flex items-center">
          <img className="h-[2.2vh] inline-block" src={timerIcon} alt="" />
          {testData.duration} min
          <img className="ml-2 h-[2.2vh] inline-block" src={paperIcon} alt="" />
          {testData.questionsCount} Q
        </p>
        <Link to={`/testinfo?id=${testData.id}`}>
          <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
            Start Test
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GrandTest;
