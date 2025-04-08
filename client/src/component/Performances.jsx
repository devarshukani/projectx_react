import React from "react";

const Performances = () => {
  const sub = [1, 2, 3, 4, 5, 6, 7, 8, 8, 6, 3];
  return (
    <div className="h-[569px] relative bg-gray-200 rounded-2xl overflow-x-hidden w-full p-6">
      <h1 className="text-zinc-800 text-xl font-semibold mb-4">
        Subject Wise Performance
      </h1>
      {sub.map((id) => {
        return (
          <div key={id} className="mt-3">
            <div className="flex items-center justify-between text-zinc-800/50 text-sm font-semibold">
              <span className="font-medium">Physiology</span>
              <span className="font-medium">3/12</span>
            </div>
            <div className="w-full mt-3 bg-neutral-400 rounded-full overflow-hidden flex">
              <div
                className="h-2 rounded-full bg-emerald-500"
                style={{
                  width: "25%",
                  transition: "width 0.3s ease-in-out",
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Performances;
