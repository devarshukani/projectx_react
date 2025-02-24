import React from "react";
import timer from "/timer.svg";
import QuestionOption from "./templates/QuestionOption";
import { Link } from "react-router-dom";
import QuestionIcon from "./templates/QuestionIcon";
import Button from "./templates/Button";

const TestScreen = () => {
  return (
    <div className="w-full flex h-screen">
      {/* Left Side (65%) */}
      <div className="relative flex flex-col px-[6%] pt-[3%] h-full w-[65%] bg-[#f7f7f7] overflow-x-hidden overflow-y-auto">
        <div className="flex items-center justify-between">
          <h1>logo</h1>
          <h1>
            <img className="inline-block mx-2" src={timer} alt="" />
            60:00
          </h1>
        </div>
        <div className="flex flex-col justify-between h-full">
          {/* Question */}
          <div>
            <div className="mt-6 bg-[#f9f9f9] rounded-lg p-4 shadow-md flex-grow">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl ">Question 1</h1>
                <div className="flex gap-3">
                  <p className="text-green-700">+4 marks</p>
                  <p className="text-red-500">-1 marks</p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-black text-lg">
                  A 41-year-old female presents with band like bilateral tight
                  headache. Headache last for around 2 hours when it happens.
                  She is on oral contraceptive pills for 13 years. There is no
                  associated nausea, vomiting or photophobia seen. Most likely
                  type of headache she is suffering is:
                </p>
              </div>
            </div>

            {/* Options of questions */}
            <div className="grid grid-cols-2 gap-10 mt-10 justify-between flex-grow">
              <QuestionOption option="Tension headache" />
              <QuestionOption option="Trigeminal neuralgia" />
              <QuestionOption option="Migraine" />
              <QuestionOption option="Cluster headache" />
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="sticky bottom-0 w-full h-[14vh] flex justify-between items-center ">
            {/* Left side: Previous button */}
            <Button name="Previous" color="#dee6f2" textColor="#84888f" />

            {/* Right side: Two buttons with spacing */}
            <div className="flex gap-4">
              <Button name="Mark" color="#dee6f2" textColor="#84888f" />
              <Button name="Save & next" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side (35%) */}
      <div className="px-[3%] py-[4%] h-full w-[35%] bg-[#eaebee] flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl ">Medical Test 1</h1>
          <div className="flex gap-3">
            <Link 

            to="/test/result"
            className="bg-[#ffffff] text-xl px-5 py-3 rounded-lg font-semibold text-[#da2d2d] border-3">
              End Test
            </Link>
          </div>
        </div>

        <h1 className="mt-10 text-2xl font-semibold">Questions</h1>
        <p>Attempt all</p>

        {/* Box */}
        <div className="mt-6 flex items-center justify-between">
          <QuestionIcon value={null} color="#298548" text="0 answered" />
          <QuestionIcon value={null} color="#f9b42c" text="0 marked" />
          <QuestionIcon value={null} text="0 unanswered" />
        </div>

        {/* Question Indexing */}
        <div className="grid grid-cols-6 mt-10 gap-8">
          <QuestionIcon value={1} />
          <QuestionIcon value={2} />
          <QuestionIcon value={3} />
          <QuestionIcon value={4} />
          <QuestionIcon value={5} />
          <QuestionIcon value={6} />
          <QuestionIcon value={7} />
          <QuestionIcon value={8} />
          <QuestionIcon value={9} />
          <QuestionIcon value={10} />
          <QuestionIcon value={11} />
          <QuestionIcon value={12} />
          <QuestionIcon value={13} />
          <QuestionIcon value={14} />
          <QuestionIcon value={15} />
        </div>
      </div>
    </div>
  );
};

export default TestScreen;
