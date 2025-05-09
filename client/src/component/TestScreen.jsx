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
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [markedCount, setMarkedCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600);
  const [selectedOption, setSelectedOption] = useState(null);
  const timerRef = useRef(null);
  const location = useLocation();

  // Track question status for each question
  const [questionStatuses, setQuestionStatuses] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "http://13.203.220.236/api/questions?page=1&limit=10"
      );
      const data = await response.json();
      if (data.success) {
        setQuestions(data.data);
        setUnansweredCount(data.data.length);
        setLoading(false);

        // Initialize question statuses
        const initialStatuses = {};
        data.data.forEach((q) => {
          initialStatuses[q.id] = {
            status: "unanswered",
            selectedOption: null,
          };
        });
        setQuestionStatuses(initialStatuses);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  };

  const handleOptionSelect = (optionId) => {
    console.log("Option selected:", optionId);
    const currentQuestion = questions[currentQuestionIndex];

    setSelectedOption(optionId);

    // Update status for current question
    setQuestionStatuses((prev) => {
      const newStatus = {
        ...prev,
        [currentQuestion.id]: {
          status: "answered",
          selectedOption: optionId,
        },
      };
      console.log("New question statuses:", newStatus);
      return newStatus;
    });

    // Update counts
    if (questionStatuses[currentQuestion.id].status === "unanswered") {
      setAnsweredCount((prev) => prev + 1);
      setUnansweredCount((prev) => prev - 1);
    } else if (questionStatuses[currentQuestion.id].status === "marked") {
      setAnsweredCount((prev) => prev + 1);
      setMarkedCount((prev) => prev - 1);
    } else if (questionStatuses[currentQuestion.id].status === "skipped") {
      setAnsweredCount((prev) => prev + 1);
      setSkippedCount((prev) => prev - 1);
    }
  };

  const handleMark = () => {
    console.log("Mark button clicked");
    const currentQuestion = questions[currentQuestionIndex];
    const currentStatus = questionStatuses[currentQuestion.id];

    // Update the status to marked if it's not already answered
    if (currentStatus.status !== "answered") {
      console.log("Marking question for review");
      setQuestionStatuses((prev) => {
        const newStatus = {
          ...prev,
          [currentQuestion.id]: {
            selectedOption: currentStatus.selectedOption,
            status: "marked",
          },
        };
        console.log("New question statuses after marking:", newStatus);
        return newStatus;
      });

      // Update counts
      if (currentStatus.status === "unanswered") {
        setMarkedCount((prev) => prev + 1);
        setUnansweredCount((prev) => prev - 1);
      } else if (currentStatus.status === "skipped") {
        setMarkedCount((prev) => prev + 1);
        setSkippedCount((prev) => prev - 1);
      }
    }
  };

  const handleNext = () => {
    console.log("Save & Next clicked");
    const currentQuestion = questions[currentQuestionIndex];
    const currentStatus = questionStatuses[currentQuestion.id];

    // If question is unanswered and not marked, mark it as skipped
    if (
      currentStatus.status === "unanswered" &&
      !currentStatus.selectedOption
    ) {
      console.log("Marking as skipped");
      setQuestionStatuses((prev) => {
        const newStatus = {
          ...prev,
          [currentQuestion.id]: {
            ...prev[currentQuestion.id],
            status: "skipped",
          },
        };
        console.log("New question statuses after skipping:", newStatus);
        return newStatus;
      });
      setSkippedCount((prev) => prev + 1);
      setUnansweredCount((prev) => prev - 1);
    }

    // Move to next question if available
    if (currentQuestionIndex < questions.length - 1) {
      console.log("Moving to next question");
      setCurrentQuestionIndex((prev) => prev + 1);
      const nextQuestion = questions[currentQuestionIndex + 1];
      setSelectedOption(
        questionStatuses[nextQuestion.id]?.selectedOption || null
      );
    }
  };

  const handlePrevious = () => {
    console.log("Previous clicked");
    if (currentQuestionIndex > 0) {
      console.log("Moving to previous question");
      setCurrentQuestionIndex((prev) => prev - 1);
      const prevQuestion = questions[currentQuestionIndex - 1];
      setSelectedOption(
        questionStatuses[prevQuestion.id]?.selectedOption || null
      );
    }
  };

  // Get color for question icon based on status
  const getQuestionColor = (questionId) => {
    const status = questionStatuses[questionId]?.status;
    console.log(
      "Getting color for question",
      questionId,
      "with status:",
      status
    );
    switch (status) {
      case "answered":
        return "#298548"; // green
      case "marked":
        return "#f9b42c"; // yellow
      case "skipped":
        return "#db4545"; // red
      default:
        return "#cbcdd2"; // grey for unanswered
    }
  };

  useEffect(() => {
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
              {loading ? (
                <div>Loading...</div>
              ) : questions.length > 0 ? (
                <>
                  <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">
                      Question {currentQuestionIndex + 1}
                    </h1>
                    <div className="flex gap-3">
                      <p className="text-green-700">+4 marks</p>
                      <p className="text-red-500">-1 marks</p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-black text-lg">
                      {questions[currentQuestionIndex].question}
                      {questions[currentQuestionIndex].que_image && (
                        <img
                          src={questions[currentQuestionIndex].que_image}
                          alt="Question"
                          className="mt-4 max-w-full"
                        />
                      )}
                    </p>
                  </div>
                </>
              ) : (
                <div>No questions available</div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-10 mt-10 justify-between flex-grow">
              {!loading &&
                questions.length > 0 &&
                questions[currentQuestionIndex].options.map((option) => (
                  <QuestionOption
                    key={option.id}
                    option={option.name}
                    name={`question${questions[currentQuestionIndex].id}`}
                    selected={selectedOption === option.id}
                    onSelect={() => handleOptionSelect(option.id)}
                  />
                ))}
            </div>
          </div>

          <div className="sticky bottom-0 w-full h-[14vh] flex justify-between items-center bg-[#f7f7f7]">
            <Button
              name="Previous"
              color="#4a90e2"
              textColor="#ffffff"
              onClick={handlePrevious}
            />

            <div className="flex gap-4">
              <Button
                name="Mark"
                color="#f9b42c"
                textColor="#ffffff"
                onClick={handleMark}
              />
              <Button name="Save & next" onClick={handleNext} />
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

        <div className="grid grid-cols-4 mt-10 gap-9">
          {!loading &&
            questions.map((question, index) => {
              const status = questionStatuses[question.id];
              let color = "#cbcdd2"; // default unanswered
              if (status) {
                if (status.status === "answered") {
                  color = "#298548";
                } else if (status.status === "marked") {
                  color = "#f9b42c";
                }
              }

              return (
                <div
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className="cursor-pointer"
                >
                  <QuestionIcon
                    value={index + 1}
                    color={getQuestionColor(question.id)}
                  />
                </div>
              );
            })}
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
