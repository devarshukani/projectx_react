import React, { useState } from "react";
import compare_graph from "/compare_graph.svg";

const Evaluate = () => {
  const CompareCategory = [
    "Correct",
    "Incorrect",
    "Accuracy",
    "Marks",
    "Percentile",
  ];
  const YourValue = [165, 35, "12%", 25, 45.0];
  const OtherValue = [185, 15, "15%", 175, 52.0];
  const categories = ["Surgery", "Dentistry", "Cardiology", "Neurology"];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handlePrevCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleNextCategory = () => {
    setCurrentCategoryIndex((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full mt-10 flex justify-center ">
      <div className=" w-[82%] h-72 bg-gray-200 rounded-2xl p-6">
        <div className="w-full flex justify-between">
          <h1 className="text-zinc-800 text-xl font-semibold ">Anatomy</h1>
          <div className="flex items-center gap-5">
            <i
              className="w-9 h-9 text-center bg-slate-300 rounded-[4.82px] text-2xl ri-arrow-left-s-line cursor-pointer"
              onClick={handlePrevCategory}
            ></i>
            <h1 className="text-zinc-800 text-xl font-semibold">
              {categories[currentCategoryIndex]}
            </h1>
            <i
              className="w-9 h-9 text-center bg-slate-300 rounded-[4.82px] text-2xl ri-arrow-right-s-line cursor-pointer"
              onClick={handleNextCategory}
            ></i>
          </div>
        </div>
        <div className="flex mt-3 justify-between">
          <div className="flex items-center">
            <div className="w-40 h-52">
              <h1 className="mt-1 text-zinc-800 text-lg font-semibold">
                Comapare
              </h1>
              {CompareCategory.map((item, index) => (
                <h1 key={`compare-${index}`} className="mt-2.5">
                  {item}
                </h1>
              ))}
            </div>
            <div className="w-16 h-52 bg-blue-900/10 rounded-tl-[5px] rounded-bl-[5px] text-center">
              <h1 className="mt-1 text-blue-900 text-lg font-semibold">You</h1>
              {YourValue.map((item, index) => (
                <h1 key={`your-${index}`} className="mt-2.5">
                  {item}
                </h1>
              ))}
            </div>
            <div className="w-16 h-52 bg-emerald-500/10 rounded-tr-[5px] rounded-br-[5px] text-center">
              <h1 className="mt-1 text-emerald-500 text-lg font-semibold">
                Other
              </h1>
              {OtherValue.map((item, index) => (
                <h1 key={`other-${index}`} className="mt-2.5">
                  {item}
                </h1>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <img src={compare_graph} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evaluate;
