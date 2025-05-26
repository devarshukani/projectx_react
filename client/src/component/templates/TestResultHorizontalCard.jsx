import React, { useState } from "react";
import trendingImg from "/trending_img.png";
import testResultCard from "/testResultCard.svg";
import { Link } from "react-router-dom";
import RequestQAE from "./RequestQAE";
import EmailSent from "./EmailSent";

const TestResultHorizontalCard = ({ title, score, totalMarks, timeTaken, date }) => {
  const [qae, setQae] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="w-full mt-10 flex justify-center">
      <div className="w-[75%] flex items-start mt-8 h-72 bg-slate-200 rounded-2xl">
        <div className="relative w-[60%] p-[3%] h-full flex flex-col">
          <h1 className="w-[90%] text-3xl font-semibold text-black">
            {title}
          </h1>

          <p className="mt-2 text-zinc-800/50 text-base font-semibold">
            {formatDate(date)}
          </p>

          <div className="mt-6">
            <h1 className="text-zinc-800 text-2xl font-semibold">
              {score}/{totalMarks}
            </h1>
            <p className="text-zinc-600 mt-1">Time taken: {timeTaken}</p>
          </div>

          <div className="absolute bottom-[10%] flex gap-5">
            <Link
              to="solutions"
              className="bg-[#235391] text-xl px-5 py-3 rounded-lg font-semibold text-white hover:cursor-pointer"
            >
              View Solutions
            </Link>

            <Link
              onClick={() => setQae(!qae)}
              className="bg-[#ffffff] text-xl px-5 py-3 rounded-lg font-semibold text-[#235391] border-3"
            >
              Request QAE
            </Link>
          </div>
        </div>

        <div className="h-full w-[40%]">
          <img className="h-[100%]" src={testResultCard} alt="" />
        </div>
      </div>

      {qae && <RequestQAE setQae={setQae} setEmailSent={setEmailSent} />}
      {emailSent && <EmailSent setEmailSent={setEmailSent} />}
    </div>
  );
};

export default TestResultHorizontalCard;
