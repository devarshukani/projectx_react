import React from "react";
import { Link } from "react-router-dom";
import trendingImg from "/trending_img.png";
import timerIcon from "/timer.png";
import languageIcon from "/lang.png";

const VideoInfo = ({ title, chaptersCount, subjectName }) => {
  return (
    <div className="mt-[4%] mb-[4%] w-full flex flex-col justify-center items-center">
      <div className="bg-[#dee6f2] rounded-3xl w-[75%] h-[45vh] flex justify-start items-start">
        <div className="relative w-[60%] p-[3%] h-full flex flex-col ">
          <p className="mt-2 text-lg text-zinc-500 flex items-center w-[80%]">
            {subjectName}
          </p>

          <h1 className="w-[90%] text-3xl font-semibold text-black">{title}</h1>

          <p className="mt-2 text-lg text-zinc-500 flex items-center w-[80%]">
            <img
              className="h-[2.2vh] inline-block mr-1"
              src={timerIcon}
              alt=""
            />
            45 min
            <img
              className="ml-2 mr-1 h-[3.5vh] inline-block"
              src={languageIcon}
              alt=""
            />
            English
            <span className="ml-2">
              Chapter {chaptersCount} of {chaptersCount}
            </span>
          </p>

          <div className="absolute bottom-[10%] flex gap-5">
            <button className="bg-[#235391] text-xl px-5 py-3 rounded-lg font-semibold text-white hover:cursor-pointer">
              Watch Now
            </button>

            <Link className="bg-[#ffffff] text-xl px-5 py-3 rounded-lg font-semibold text-[#235391] border-3">
              Download Notes
            </Link>
          </div>
        </div>

        <div className="h-full w-[40%]">
          <img className="h-[102%]" src={trendingImg} alt="" />
        </div>
      </div>

      <div className="mt-5 w-[75%] flex flex-col justify-start items-start gap-4">
        <h1 className="text-3xl font-semibold text-black">What you'll learn</h1>
        <ul className="mx-3 text-zinc-600 gap-4 flex flex-col list-disc list-inside">
          <li>
            Complete understanding of {title.toLowerCase()} in {subjectName}
          </li>
          <li>
            Detailed coverage of key topics and their clinical applications
          </li>
          <li>
            Clinical correlations and practical applications in medical practice
          </li>
          <li>Interactive demonstrations and visual learning aids</li>
        </ul>

        <h1 className="text-3xl font-semibold text-black mt-4">
          Course Content
        </h1>
        <ul className="mx-3 text-zinc-600 gap-4 flex flex-col list-disc list-inside">
          <li>Introduction to {title}</li>
          <li>Core Concepts and Terminology</li>
          <li>Practical Applications</li>
          <li>Clinical Case Studies</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoInfo;
