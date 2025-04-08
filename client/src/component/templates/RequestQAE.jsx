import React from "react";
import { Link } from "react-router-dom";

const RequestQAE = ({setQae,setEmailSent}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>
      <div className="relative w-[537px] h-75 bg-white rounded-xl p-5">
        <div className="flex justify-between">
          <h1 className="text-zinc-800 text-2xl font-semibold">Request QAE</h1>
          <i
          onClick={()=>setQae(false)} 
          className="text-2xl ri-close-large-line hover:cursor-pointer"> </i>
        </div>
        <h1 className=" mt-6 text-zinc-800 text-xl  font-semibold">
          Get the best solution here and have easiest way to solve problem.
        </h1>

        <h1 className="mt-10 text-zinc-800 text-lg font-semibold ">
          Send pdf to
        </h1>

        <div className="w-[465px] px-4 py-2 rounded-md outline-2 mt-3 outline-offset-[-1px] outline-zinc-800 inline-flex justify-between items-center">
          <input type="gmail"
            className=" border-none outline-none  text-xl  text-zinc-600 w-[70%]"
          placeholder="user@gmail.com" />
          <div
            data-property-1="Default"
            className="px-4 py-3 bg-blue-900 rounded-md flex justify-center items-center gap-2.5"
          >
            <div
            onClick={()=>{
                setEmailSent(true);
                setQae(false)
            }} 

             className="justify-center text-white text-base font-semibold font-['Open_Sans'] hover:cursor-pointer">
              Send
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RequestQAE;
