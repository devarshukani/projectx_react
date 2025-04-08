import React from "react";
import compare_graph from "/compare_graph.svg"

const Evaluate = () => {
    const CompareCategory = ["Correct", "Incorrect", "Accuracy", "Marks", "Percentile"];
    const YourValue = [165,35,"12%", 25, 45.00]
    const OtherValue = [185, 15, "15%", 175, 52.00]
  return (
    <div className="w-full mt-10 flex justify-center ">
      <div className=" w-[82%] h-72 bg-gray-200 rounded-2xl p-6">
        <div className="w-full flex justify-between">
          <h1 className="text-zinc-800 text-xl font-semibold ">Anatomy</h1>
          <div>
            <h1 className="text-zinc-800 text-xl font-semibold">Surgery</h1>
          </div>
        </div>
        <div className="flex mt-3 justify-between">
          <div className="flex items-center">
            <div className="w-40 h-52">
              <h1 className="mt-1 text-zinc-800 text-lg font-semibold">
                Comapare
              </h1>
              {CompareCategory.map((id)=>{
                return (<React.Fragment key={id}>
                    <h1 className="mt-2.5" >{id}</h1>
                </React.Fragment>)
              })}
            </div>
            <div className="w-16 h-52 bg-blue-900/10 rounded-tl-[5px] rounded-bl-[5px] text-center">
              <h1 className="mt-1 text-blue-900 text-lg font-semibold">You</h1>
              {YourValue.map((id)=>{
                return (<React.Fragment key={id}>
                    <h1 className="mt-2.5" >{id}</h1>
                </React.Fragment>)
              })}
            </div>
            <div className="w-16 h-52 bg-emerald-500/10 rounded-tr-[5px] rounded-br-[5px] text-center">
              <h1 className="mt-1 text-emerald-500 text-lg font-semibold">
                Other
              </h1>
              {OtherValue.map((id)=>{
                return (<React.Fragment key={id}>
                    <h1 className="mt-2.5" >{id}</h1>
                </React.Fragment>)
              })}
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
