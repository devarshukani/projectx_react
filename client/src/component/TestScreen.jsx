import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  submitTestAttemptAnswer,
  updateTestAttemptAnswer,
  closeTestAttempt,
} from "../services/apiService.jsx";
import timer from "/timer.svg";
import QuestionOption from "./templates/QuestionOption";
import { Link } from "react-router-dom";
import QuestionIcon from "./templates/QuestionIcon";
import Button from "./templates/Button";
import SubmitTestModal from "./templates/SubmitTestModal";
import TimeUp from "./templates/TimeUp";

const TestScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [markedCount, setMarkedCount] = useState(0);
  const [unansweredCount, setUnansweredCount] = useState(0);
  const [skippedCount, setSkippedCount] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [testDetails, setTestDetails] = useState(null);
  const timerRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const testId = location.state?.testId; // Get test ID from location state
  const attemptId = location.state?.attemptId; // Get attempt ID from location state
  const { user } = useSelector((state) => state.auth);

  // Log the attempt ID for verification
  useEffect(() => {
    console.log("Test attempt ID:", attemptId);
  }, [attemptId]);

  // Track question status for each question
  const [questionStatuses, setQuestionStatuses] = useState({});

  // Track question start times
  const [questionStartTimes, setQuestionStartTimes] = useState({});

  useEffect(() => {
    fetchTestDetails();
  }, []);

  const fetchTestDetails = async () => {
    if (!testId) {
      console.error("Test ID is not available");
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      console.log("Fetching test details for test ID:", testId);
      const response = await fetch(`http://13.203.220.236/api/tests/${testId}`);

      console.log("Response from test details API:", response);
      const data = await response.json();
      if (data.success && data.data) {
        setTestDetails(data.data);
        // Set questions from test data
        setQuestions(data.data.questions);
        setUnansweredCount(data.data.questions.length);

        // Initialize question statuses
        const initialStatuses = {};
        data.data.questions.forEach((q) => {
          initialStatuses[q.id] = {
            status: "unanswered",
            selectedOption: null,
          };
        });
        setQuestionStatuses(initialStatuses);

        // Set initial time from test duration (converting minutes to seconds)
        const duration = parseInt(data.data.duration) || 90; // Default to 90 if not set
        console.log("Setting test duration:", duration, "minutes");
        setTimeLeft(duration * 60);
        setTimerStarted(true); // Set timer as started when we get the duration
        setLoading(false);
      }
    } catch (error) {
      console.error("Error fetching test details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Record start time when current question changes
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      setQuestionStartTimes((prev) => ({
        ...prev,
        [currentQuestion.id]: Date.now(),
      }));
    }
  }, [currentQuestionIndex, questions]);

  // Function to calculate time taken on current question
  const getTimeTaken = (questionId) => {
    const startTime = questionStartTimes[questionId];
    if (!startTime) return 0;
    return Math.floor((Date.now() - startTime) / 1000); // Convert to seconds
  };

  const saveAnswer = async (questionId, optionId, isSkipped = false) => {
    try {
      console.log("saveAnswer called with:", {
        questionId,
        optionId,
        isSkipped,
        attemptId,
        userId: user?.id,
      });

      if (!attemptId) {
        console.error("Missing attemptId - cannot save answer");
        return;
      }

      if (!user?.id) {
        console.error("Missing user ID - cannot save answer");
        return;
      }

      const answerData = {
        test_attempt_id: attemptId,
        user_id: user.id,
        test_id: testId,
        question_id: questionId,
        selected_option: optionId,
        time_taken: getTimeTaken(questionId),
        is_skipped: isSkipped,
      };

      console.log("Constructed answer data:", answerData);

      // Check if this question was already answered
      const existingAnswer = questionStatuses[questionId]?.selectedOption;
      console.log("Existing answer status:", {
        hasExistingAnswer: !!existingAnswer,
        existingOption: existingAnswer,
      });

      try {
        if (existingAnswer) {
          console.log("Updating existing answer...");
          const response = await updateTestAttemptAnswer(answerData);
          console.log("Answer updated successfully:", response);
        } else {
          console.log("Submitting new answer...");
          try {
            const response = await submitTestAttemptAnswer(answerData);
            console.log("New answer submitted successfully:", response);
          } catch (error) {
            // If we get "already exists" error, try updating instead
            if (error.message?.includes("Answer already exists")) {
              console.log("Answer exists, trying update instead...");
              const updateResponse = await updateTestAttemptAnswer(answerData);
              console.log("Answer updated successfully:", updateResponse);
            } else {
              throw error; // Re-throw if it's a different error
            }
          }
        }
      } catch (apiError) {
        console.error("API call failed:", apiError);
        console.error("API error details:", {
          message: apiError.message,
          response: apiError.response?.data,
        });
        throw apiError;
      }
    } catch (error) {
      console.error("Error in saveAnswer:", error);
      throw error;
    }
  };

  const handleOptionSelect = (optionId) => {
    console.log("handleOptionSelect triggered with optionId:", optionId);
    const currentQuestion = questions[currentQuestionIndex];
    console.log("Current question:", currentQuestion);

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

  const handleNext = async () => {
    console.log("Save & Next clicked");
    const currentQuestion = questions[currentQuestionIndex];
    const currentStatus = questionStatuses[currentQuestion.id];

    try {
      // If there's a selected option, save it
      if (selectedOption || currentStatus.selectedOption) {
        const optionToSave = selectedOption || currentStatus.selectedOption;
        await saveAnswer(currentQuestion.id, optionToSave, false);
      }
      // If question is unanswered and not marked, mark it as skipped
      else if (currentStatus.status === "unanswered" && !currentStatus.selectedOption) {
        console.log("Marking as skipped");
        await saveAnswer(currentQuestion.id, null, true);

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
        setSelectedOption(questionStatuses[nextQuestion.id]?.selectedOption || null);
      }
    } catch (error) {
      console.error("Error in handleNext:", error);
      // You might want to show an error message to the user here
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

  const handleTestSubmit = async () => {
    try {
      // First save any unsaved answer for current question
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion && selectedOption) {
        try {
          await saveAnswer(currentQuestion.id, selectedOption, false);
        } catch (saveError) {
          console.warn("Error saving final answer, continuing with test submission:", saveError);
        }
      }

      // Close the test attempt
      const response = await closeTestAttempt(attemptId, user.id);
      console.log("Test attempt closed successfully:", response);

      // Hide modals
      setShowSubmitModal(false);

      // Navigate to results
      navigate(`/test/result/${testId}/${attemptId}`, {
        state: {
          testId,
          attemptId,
          stats: {
            answered: answeredCount,
            marked: markedCount,
            unanswered: unansweredCount,
          },
        },
      });
    } catch (error) {
      console.error("Failed to submit test:", error);
      // TODO: Show error message to user
      // Don't close the modal if submission failed
    }
  };

  // Get color for question icon based on status
  const getQuestionColor = (questionId) => {
    const status = questionStatuses[questionId]?.status;
    // console.log(
    //   "Getting color for question",
    //   questionId,
    //   "with status:",
    //   status
    // );
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
    // Start timer when we get test details and have non-zero timeLeft
    if (timerStarted && timeLeft > 0) {
      console.log("Starting timer with", timeLeft, "seconds");
      // Clear any existing timer first
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      // Start new timer
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            clearInterval(timerRef.current);
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [timerStarted]); // Only depend on timerStarted since we handle timeLeft updates internally// Depend on both timerStarted and timeLeft

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
        {" "}
        <div className="flex items-center justify-between">
          <h1>logo</h1>
          <h1 className="text-zinc-800 text-3xl font-semibold">
            {testDetails?.name || "Loading..."}
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
                      <p className="text-green-700">
                        +{testDetails?.correct_marks} marks
                      </p>
                      <p className="text-red-500">
                        {testDetails?.incorrect_marks} marks
                      </p>
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
          {" "}
          <h1 className="text-xl font-semibold">
            {testDetails?.name || "Loading..."}
          </h1>
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
                  onClick={() => {
                    setCurrentQuestionIndex(index);
                    // Set the selected option when clicking on question numbers
                    setSelectedOption(
                      questionStatuses[question.id]?.selectedOption || null
                    );
                  }}
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
          onSubmit={handleTestSubmit}
        />
      )}{" "}
      {timerStarted && timeLeft === 0 && (
        <TimeUp
          answered={answeredCount}
          marked={markedCount}
          unanswered={unansweredCount}
          onClose={handleTestSubmit}
        />
      )}
    </div>
  );
};

export default TestScreen;
