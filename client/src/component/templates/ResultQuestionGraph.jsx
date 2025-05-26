import React from "react";
import time_taken from "/time_taken.svg";
import avg_time from "/avg_time.svg";
import ApexChart from "./ApexChart";

const ResultQuestionGraph = ({ correct, incorrect, skipped, timeTaken, avgTime }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  return (
    <div className="w-full mt-10 flex justify-center">
      <div className="w-[75%] h-[626px] bg-gray-200 rounded-2xl">
        <div className="flex items-center p-6 gap-6">
          <div className="w-full h-30 relative rounded-lg outline-2 outline-offset-[-1.80px] outline-neutral-300 overflow-hidden p-4 flex justify-between">
            <div className="p-2 flex flex-col">
              <p className="mt-2 justify-start text-zinc-800/50 text-lg font-normal">
                Total time taken
              </p>
              <p className="text-zinc-800 text-2xl font-semibold">
                {formatTime(timeTaken)}
              </p>
            </div>
            <img className="absolute bottom-0 right-1.5" src={time_taken} alt="" />
          </div>
          <div className="w-full h-30 relative rounded-lg outline-2 outline-offset-[-1.80px] outline-neutral-300 overflow-hidden p-4 flex justify-between">
            <div className="p-2 flex flex-col">
              <p className="mt-2 justify-start text-zinc-800/50 text-lg font-normal">
                Average time/question
              </p>
              <p className="text-zinc-800 text-2xl font-semibold">
                {formatTime(avgTime)}
              </p>
            </div>
            <img className="absolute bottom-0 right-1.5" src={avg_time} alt="" />
          </div>
        </div>
        <div className="p-6 grid grid-cols-3 gap-5">
          <div className="p-5 w-full mt-5 h-25 bg-neutral-50 rounded-lg flex items-center gap-5">
            <div className="w-1 h-18 bg-green-700 rounded-lg"></div>
            <div>
              <p className="text-zinc-800/50 text-lg font-semibold">Correct</p>
              <p className="text-zinc-800 text--lg font-bold mt-2">{correct}</p>
            </div>
          </div>
          <div className="p-5 w-full mt-5 h-25 bg-neutral-50 rounded-lg flex items-center gap-5">
            <div className="w-1 h-18 bg-red-600 rounded-lg"></div>
            <div>
              <p className="text-zinc-800/50 text-lg font-semibold">Incorrect</p>
              <p className="text-zinc-800 text--lg font-bold mt-2">{incorrect}</p>
            </div>
          </div>
          <div className="p-5 w-full mt-5 h-25 bg-neutral-50 rounded-lg flex items-center gap-5">
            <div className="w-1 h-18 bg-neutral-300 rounded-lg"></div>
            <div>
              <p className="text-zinc-800/50 text-lg font-semibold">Unattempt</p>
              <p className="text-zinc-800 text--lg font-bold mt-2">{skipped}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultQuestionGraph;
