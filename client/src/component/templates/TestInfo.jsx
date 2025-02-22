import React from "react";
import { Link } from "react-router-dom";
import trendingImg from "/trending_img.png";
import timerIcon from "/timer.png";
import languageIcon from "/lang.png";

const TestInfo = (props) => {
  return (
    <div className="mt-[4%] mb-[4%] w-full flex flex-col justify-center items-center">
      <div className="bg-[#dee6f2] rounded-3xl w-[82%] h-[55vh] flex justify-start items-start">
        <div className="relative w-[60%] p-[3%] h-full flex flex-col ">
          <p className="mt-2 text-lg text-zinc-500 flex items-center w-[80%]">
            Free
          </p>

          <h1 className="w-[90%] text-3xl font-semibold text-black">
            {props.title}
          </h1>

          <p className="mt-2 text-lg text-zinc-500 flex items-center w-[80%]">
            <img
              className="h-[2.2vh] inline-block mr-1"
              src={timerIcon}
              alt=""
            />
            180 min
            <img
              className="ml-2 mr-1 h-[3.5vh] inline-block"
              src={languageIcon}
              alt=""
            />
            English
          </p>

          <div className="absolute bottom-[10%] flex gap-5">
            <Link
              className="bg-[#235391] text-xl px-5 py-3 rounded-lg font-semibold text-white"
            >
              Attempt Test
            </Link>

            <Link
              className="bg-[#ffffff] text-xl px-5 py-3 rounded-lg font-semibold text-[#235391] border-3"
            >
              Instructions
            </Link>
          </div>
        </div>

        <div className="h-full w-[40%]">
          <img className="h-[102%]" src={trendingImg} alt="" />
        </div>
      </div>
      <div className="mt-5 w-[82%] flex flex-col justify-start items-start gap-4">
        <h1 className="text-3xl font-semibold text-black">Instructions</h1>
        <ul className="mx-3 text-zinc-600 gap-4 flex flex-col list-disc list-inside">
          <li>
            The test contains 15 questions which have to be attempted within
            duration of 15 minutes or less.
          </li>
          <li>
            The test would contain multiple choice questions with 4 options.
            Questions can have single option or multi option solutions.
          </li>
          <li>
            All questions carry 4 marks and incorrect responses carry negative 1
            mark for each questions.
          </li>

          <li>
            No marks would be awarded or deducted for unattempted questions.
          </li>
        </ul>

        <h1 className="text-3xl font-semibold text-black">Syllabus</h1>

        <ul className="mx-3 text-zinc-600 gap-4 flex flex-col list-disc list-inside">
          <li>
            The test contains 15 questions which have to be attempted within
            duration of 15 minutes or less.
          </li>
          <li>
            The test would contain multiple choice questions with 4 options.
            Questions can have single option or multi option solutions.
          </li>
          <li>
            All questions carry 4 marks and incorrect responses carry negative 1
            mark for each questions.
          </li>
          <li>
            No marks would be awarded or deducted for unattempted questions.
          </li>
        </ul>

        <label htmlFor="">
          <input type="checkbox" name="" id="" />I have read the Instructions
        </label>
      </div>
    </div>
  );
};

export default TestInfo;
