import React from "react";
import timerIcon from "/timer.png";
import paperIcon from "/paper_icon.png";

const GrandTest = () => {
  return (
    <div className="px-7 flex justify-start items-center h-[20vh] rounded-lg bg-[#fafafa]">
      <div className="p-5 rounded-lg h-[15vh] w-[15vh] bg-[#dee6f2] ">
        {" "}
        logo{" "}
      </div>

      <div className="ml-5">
        <h1 className="text-black text-xl font-semibold">Medical Grand Test</h1>
        <p className="mt-2 text-lg text-zinc-500 flex items-center">
          <img className="h-[2.2vh] inline-block mr-1" src={timerIcon} alt="" />
          210 min
          <img className="ml-2 mr-1 h-[2.2vh] inline-block" src={paperIcon} alt="" />
          200 Q
        </p>
      </div>
    </div>
  );
};

export default GrandTest;
