import React from "react";
import first_medal from "/first_medal.svg";
import second_medal from "/second_medal.svg";
import third_medal from "/third_medal.svg";
import LeaderBoardList from "./LeaderBoardList";

const LeaderBoard = () => {
  return (
    <div className=" w-full h-[569px] relative bg-gray-200 rounded-2xl overflow-hidden p-7 flex flex-col justify-between">
      <div>
        <h1 className="text-zinc-800 text-lg font-semibold ">LeaderBoard</h1>
        <h1 className="text-zinc-800 text-2xl font-semibold">
          Master UG Medical Test
        </h1>
        <div className="flex gap-5">
          <h1 className="text-zinc-800 text-lg font-semibold">Grand Test</h1>
          <h1 className="text-zinc-800 text-lg font-semibold">Total - 250</h1>
        </div>
      </div>

      <div className="absolute bottom-0 flex justify-between w-[90%] px-10">
        <div className="flex flex-col justify-end items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-b from-zinc-500 to-zinc-400/20 rounded-full flex justify-center items-center">
            <div className="w-16 h-16 bg-gradient-to-b from-zinc-500 via-neutral-400 to-zinc-400 rounded-full flex justify-center items-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://placehold.co/54x54"
              />
            </div>
          </div>
          <div className="relative w-30 h-48 bg-zinc-300 flex flex-col items-center">
            <img className="h-15" src={second_medal} alt="" />
            <div className="h-full p-4 flex flex-col justify-between">
              <h1>100/180</h1>
              <h1>Vinay Vyas</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-b from-zinc-500 to-zinc-400/20 rounded-full flex justify-center items-center">
            <div className="w-16 h-16 bg-gradient-to-b from-zinc-500 via-neutral-400 to-zinc-400 rounded-full flex justify-center items-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://placehold.co/54x54"
              />
            </div>
          </div>
          <div className="relative w-30 h-64 bg-zinc-300 flex flex-col items-center">
            <img className="h-15" src={first_medal} alt="" />
            <div className="h-full p-4 flex flex-col justify-between">
              <h1>150/180</h1>
              <h1>Vinay Vyas</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-b from-zinc-500 to-zinc-400/20 rounded-full flex justify-center items-center">
            <div className="w-16 h-16 bg-gradient-to-b from-zinc-500 via-neutral-400 to-zinc-400 rounded-full flex justify-center items-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://placehold.co/54x54"
              />
            </div>
          </div>
          <div className=" relative *:w-30 h-32 bg-zinc-300 flex flex-col items-center">
            <img className="h-15" src={third_medal} alt="" />
            <div className="h-full p-4 flex flex-col justify-between">
              <h1>56/180</h1>
              <h1>Vinay Vyas</h1>
            </div>
          </div>
        </div>
      </div>
      {
        false && <LeaderBoardList/>
      }
      
    </div>
  );
};

export default LeaderBoard;
