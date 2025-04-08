import React, { useEffect, useRef, useState } from "react";
import timer from "/timer.svg";
import QuestionOption from "./templates/QuestionOption";
import { Link } from "react-router-dom";
import QuestionIcon from "./templates/QuestionIcon";
import Button from "./templates/Button";
import SubmitTestModal from "./templates/SubmitTestModal";
import TimeUp from "./templates/TimeUp";
import { useLocation } from "react-router-dom";

const TestScreen = () => {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [markedCount, setMarkedCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(15);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false);
  const timerRef = useRef(null);
  const location = useLocation();
  const allowChangeAnswer = location.state?.allowChangeAnswer;
  const [skippedCount, setSkippedCount] = useState(0);
  const [isQuestionMarked, setIsQuestionMarked] = useState(false);

  const handleOptionSelect = (option) => {
    if (!isQuestionAnswered && !isQuestionMarked) {
      setAnsweredCount((prev) => prev + 1);
      setUnansweredCount((prev) => prev - 1);
      setIsQuestionAnswered(true);
    }
    setSelectedOption(option);
  };

  const handleMark = () => {
    if (!isQuestionAnswered && !isQuestionMarked) {
      setMarkedCount((prev) => prev + 1);
      setUnansweredCount((prev) => prev - 1);
      setIsQuestionMarked(true); // Mark the question
    }
  };

  useEffect(() => {
    console.log("can change ", allowChangeAnswer);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(timerRef.current);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full flex flex-row h-screen">
      <div className="relative flex flex-col px-[6%] pt-[3%] h-full w-[76%] bg-[#f7f7f7] overflow-x-hidden overflow-y-auto">
        <div className="flex items-center justify-between">
          <h1>logo</h1>
          <h1 className="text-zinc-800 text-3xl font-semibold">
            Mecee PG 2025
          </h1>
          <div className=" text-center w-24 h-12 bg-gray-200 rounded-lg flex justify-center items-center">
            <h1 className="justify-center text-zinc-800 text-3xl font-semibold">
              {formatTime(timeLeft)}
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="mt-6 px-4 flex justify-between items-center">
              <h1 className="text-zinc-800 text-lg font-semibold font-['Open_Sans']">
                Medicine
              </h1>
              <h1 className="text-blue-900 text-sm font-bold hover:cursor-pointer">
                Subject change
              </h1>
            </div>
            <div className="mt-2 bg-[#f9f9f9] rounded-lg p-4 shadow-md flex-grow">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Question 1</h1>
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

            <div className="grid grid-cols-2 gap-10 mt-10 justify-between flex-grow">
              <QuestionOption
                option="Tension headache"
                name="question1"
                selected={selectedOption === "Tension headache"}
                onSelect={() => handleOptionSelect("Tension headache")}
              />
              <QuestionOption
                option="Trigeminal neuralgia"
                name="question1"
                selected={selectedOption === "Trigeminal neuralgia"}
                onSelect={() => handleOptionSelect("Trigeminal neuralgia")}
              />
              <QuestionOption
                option="Migraine"
                name="question1"
                selected={selectedOption === "Migraine"}
                onSelect={() => handleOptionSelect("Migraine")}
              />
              <QuestionOption
                option="Cluster headache"
                name="question1"
                selected={selectedOption === "Cluster headache"}
                onSelect={() => handleOptionSelect("Cluster headache")}
              />
            </div>
          </div>

          <div className="sticky bottom-0 w-full h-[14vh] flex justify-between items-center bg-[#f7f7f7]">
            <Button name="Previous" color="#dee6f2" textColor="#84888f" />

            <div className="flex gap-4">
              <Button
                name="Mark"
                color="#dee6f2"
                textColor="#84888f"
                onClick={handleMark}
              />
              <Button name="Save & next" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-[2%] pt-[3%] h-full w-[24%] bg-[#eaebee] flex flex-col">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Medical Test 1</h1>
          <div className="flex gap-3">
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setShowSubmitModal(true);
              }}
              className="bg-[#ffffff] text-xl px-4 py-2 rounded-lg font-semibold text-[#da2d2d] border-3"
            >
              End Test
            </Link>
          </div>
        </div>

        <h1 className="mt-5 text-2xl font-semibold">Questions</h1>
        <p>Attempt all</p>

        <div className="flex flex-row items-center justify-between gap-0 mt-2 ">
          <div className="flex flex-col w-full items-center mt-3  px-3">
            <div className="flex justify-start items-center font-semibold gap-2 w-full">
              <div
                className={`rounded h-[3vh] w-[3vh] justify-center items-center flex bg-[#298548]`}
              ></div>
              <p>{answeredCount} answered</p>
            </div>

            <div className="flex justify-start items-center font-semibold gap-2 w-full mt-2">
              <div
                className={`rounded h-[3vh] w-[3vh] justify-center items-center flex bg-[#db4545]`}
              ></div>
              <p>{skippedCount} skipped</p>
            </div>
          </div>

          <div className="flex flex-col justify-start w-full items-center mt-3">
            <div className="flex justify-start items-center font-semibold gap-2 w-full">
              <div
                className={`rounded h-[3vh] w-[3vh] justify-center items-center flex bg-[#f9b42c]`}
              ></div>
              <p>{markedCount} marked</p>
            </div>

            <div className="flex justify-start items-center font-semibold gap-2 w-full">
              <div className="rounded h-[3vh] w-[3vh] justify-center items-center flex bg-[#ccced2] mt-2"></div>
              <p>{unansweredCount} unanswered</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10 gap-9 ">
          {Array.from({ length: 15 }, (_, index) => (
            <QuestionIcon key={index + 1} value={index + 1} />
          ))}
        </div>
      </div>
      {showSubmitModal && (
        <SubmitTestModal
          answered={answeredCount}
          marked={markedCount}
          unanswered={unansweredCount}
          onClose={() => setShowSubmitModal(false)}
        />
      )}
      {!timeLeft && (
        <TimeUp
          answered={answeredCount}
          marked={markedCount}
          unanswered={unansweredCount}
          onClose={() => setShowSubmitModal(false)}
        />
      )}
    </div>
  );
};

export default TestScreen;
