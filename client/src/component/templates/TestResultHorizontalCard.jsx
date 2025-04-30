import React, { useState } from "react";
import trendingImg from "/trending_img.png";
import testResultCard from "/testResultCard.svg";
import { Link } from "react-router-dom";
import RequestQAE from "./RequestQAE";
import EmailSent from "./EmailSent";

const TestResultHorizontalCard = (props) => {
  const [qae, setQae] = useState(false);
  const [emailSent, setEmailSent] = useState(false)
  return (
    <div className="w-full mt-10 flex justify-center ">
      <div className=" w-[75%] flex items-start mt-8 h-72 bg-slate-200 rounded-2xl">
        <div className="relative w-[60%] p-[3%] h-full flex flex-col">

          <h1 className="w-[90%] text-3xl font-semibold text-black">
            {props.title}
          </h1>

          <p className="mt-2 text-zinc-800/50 text-base font-semibold ">
                Feb 23, 2025, 13:00 pm
          </p>

          <h1 className="mt-6 text-zinc-800 text-2xl font-semibold">
            25/60
          </h1>
          <div className="absolute bottom-[10%] flex gap-5">
            <button
              // onClick={handleAttemptTestClick}
              
              className="bg-[#235391] text-xl px-5 py-3 rounded-lg font-semibold text-white hover:cursor-pointer"
            >
              View Solutions
            </button>

            <Link onClick={()=>setQae(!qae)} className="bg-[#ffffff] text-xl px-5 py-3 rounded-lg font-semibold text-[#235391] border-3">
              Request QAE
            </Link>
          </div>
        </div>

        <div className="h-full w-[40%]">
          <img className="h-[100%]" src={testResultCard} alt="" />
        </div>
      </div>

      {qae &&
      <RequestQAE setQae={setQae} setEmailSent={setEmailSent} />
      }
      {
        emailSent && 
        <EmailSent setEmailSent={setEmailSent}/>
      }
    </div>
  );
};

export default TestResultHorizontalCard;
