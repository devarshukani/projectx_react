import React, { useRef, useState, useEffect } from "react";
import Header from "./templates/Header";
import SideNav from "./templates/SideNav";
import Subject from "./templates/Subject";
import SolutionTopic from "./templates/SolutionTopic";
import ClaimPanel from "./templates/ClaimPanel";

const Solutions = () => {
  const [expandedSection, setExpandedSection] = useState(""); // topics, bookmarks, answers
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTopic, setActiveTopic] = useState(null);
  const [activeBookmark, setActiveBookmark] = useState(null);
  const [activeAnswer, setActiveAnswer] = useState(null);
  const [showClaimPanel, setShowClaimPanel] = useState(false);
  const [activeQuestionNo, setActiveQuestionNo] = useState(null);
  const [expandedQuestionId, setExpandedQuestionId] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentTool, setCurrentTool] = useState("pencil");
  const [drawingEnabled, setDrawingEnabled] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const solutionContainerRef = useRef(null);

  const topic = [
    "Medicine",
    "Surgery",
    "Paediatrics",
    "Orthopaedics",
    "ENT",
    "Ophthalmology",
    "Radiology",
    "Anesthesia",
    "Paediatrics",
    "Psychiatry",
    "Dermatology",
    "Physiology",
    "Pathology",
    "Pharmacology",
    "Biochemistry",
    "Psychiatry",
    "Dermatology",
    "Physiology",
    "Pathology",
    "Pharmalogy",
  ];

  // Add sample question data
  const questionData = [
    {
      question_no: 1,
      total_time_taken: "24 sec",
      topic_name: "Neurology",
      question_text:
        "A 5-year-old male is brought to ER of Seti Provincial Hospital with brief lapses of consciousness and fall few hours back. There was no injury in the body of the patient and without any complaints now. Which of the following does not hold true in such case?",
      options: ["Migraine", "Trigeminal neuralgia", "Epilepsy", "Syncope"],
      answered_option: "Migraine",
      correct_option: "Trigeminal neuralgia",
    },
    {
      question_no: 2,
      total_time_taken: "24 sec",
      topic_name: "Neurology",
      question_text:
        "A 5-year-old male is brought to ER of Seti Provincial Hospital with brief lapses of consciousness and fall few hours back. There was no injury in the body of the patient and without any complaints now. Which of the following does not hold true in such case?",
      options: ["Migraine", "Trigeminal neuralgia", "Epilepsy", "Syncope"],
      answered_option: "Epilepsy",
      correct_option: "Trigeminal neuralgia",
    },
    {
      question_no: 3,
      total_time_taken: "24 sec",
      topic_name: "Neurology",
      question_text:
        "A 5-year-old male is brought to ER of Seti Provincial Hospital with brief lapses of consciousness and fall few hours back. There was no injury in the body of the patient and without any complaints now. Which of the following does not hold true in such case?",
      options: ["Migraine", "Trigeminal neuralgia", "Epilepsy", "Syncope"],
      answered_option: "Trigeminal neuralgia",
      correct_option: "Trigeminal neuralgia",
    },
    {
      question_no: 4,
      total_time_taken: "24 sec",
      topic_name: "Neurology",
      question_text:
        "A 5-year-old male is brought to ER of Seti Provincial Hospital with brief lapses of consciousness and fall few hours back. There was no injury in the body of the patient and without any complaints now. Which of the following does not hold true in such case?",
      options: ["Migraine", "Trigeminal neuralgia", "Epilepsy", "Syncope"],
      answered_option: "",
      correct_option: "Trigeminal neuralgia",
    },
  ];

  // Filter categories
  const filterCategories = {
    topics: [],
    bookmarks: ["All", "Bookmarked"],
    answers: ["All", "Correct", "Incorrect", "Attempted", "Unattempted"],
  };

  // Filter questions based on selected filter
  const filteredQuestions = questionData.filter((question) => {
    switch (activeFilter.toLowerCase()) {
      case "correct":
        return question.answered_option === question.correct_option;
      case "incorrect":
        return (
          question.answered_option !== "" &&
          question.answered_option !== question.correct_option
        );
      case "attempted":
        return question.answered_option !== "";
      case "unattempted":
        return question.answered_option === "";
      default:
        return true;
    }
  });

  // Handle section expansion
  const handleSectionClick = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Function to handle topic click
  const handleTopicClick = (ref, topic) => {
    setActiveTopic(topic); // Set the active topic
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle solution view click
  const handleSolutionView = (questionId) => {
    setExpandedQuestionId(
      expandedQuestionId === questionId ? null : questionId
    );
  };

  // Filter questions to show only expanded question when one is selected
  const questionsToShow = expandedQuestionId
    ? filteredQuestions.filter((q) => q.question_no === expandedQuestionId)
    : filteredQuestions;

  useEffect(() => {
    if (expandedQuestionId && drawingEnabled) {
      const canvas = canvasRef.current;
      const container = solutionContainerRef.current;
      
      if (canvas && container) {
        // Set canvas size to match container
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        
        // Set styles based on current tool
        if (currentTool === 'highlighter') {
          ctx.strokeStyle = 'rgba(255, 255, 0, 0.3)';
          ctx.lineWidth = 20;
          ctx.globalCompositeOperation = 'multiply';
        } else if (currentTool === 'pencil') {
          ctx.strokeStyle = '#000000';
          ctx.lineWidth = 2;
          ctx.globalCompositeOperation = 'source-over';
        } else if (currentTool === 'eraser') {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 20;
          ctx.globalCompositeOperation = 'destination-out';
        }
        
        contextRef.current = ctx;
      }
    }
  }, [expandedQuestionId, currentTool, drawingEnabled]);

  const startDrawing = ({nativeEvent}) => {
    if (!drawingEnabled) return;
    
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({nativeEvent}) => {
    if (!isDrawing || !drawingEnabled) return;
    
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    if (!drawingEnabled) return;
    
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const toggleDrawing = () => {
    setDrawingEnabled(!drawingEnabled);
    if (!drawingEnabled) {
      setCurrentTool('pencil');
    }
  };

  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <div className="w-full mt-20">
          <Header title={"Solution"} />
          <div className="flex justify-center m-10 gap-3">
            {/* Left Side: Collapsible Sections */}
            <div className="w-[15%] p-10 sticky top-0 h-screen overflow-y-auto">
              {/* Topics Section */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 cursor-pointer text-xl font-semibold"
                  onClick={() => handleSectionClick("topics")}
                >
                  <i
                    className={`ri-arrow-right-s-line transform ${
                      expandedSection === "topics" ? "rotate-90" : ""
                    }`}
                  ></i>
                  <span>Topics</span>
                </div>
                {expandedSection === "topics" && (
                  <div className="py-4 w-full grid grid-cols-1 gap-4">
                    {topic.map((id) => (
                      <SolutionTopic
                        key={id}
                        name={id}
                        count={90}
                        isActive={activeTopic === id}
                        onClick={() => setActiveTopic(id)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Bookmarks Section */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 cursor-pointer text-xl font-semibold"
                  onClick={() => handleSectionClick("bookmarks")}
                >
                  <i
                    className={`ri-arrow-right-s-line transform ${
                      expandedSection === "bookmarks" ? "rotate-90" : ""
                    }`}
                  ></i>
                  <span>Bookmarks</span>
                </div>
                {expandedSection === "bookmarks" && (
                  <div className="py-4 w-full grid grid-cols-1 gap-4">
                    {filterCategories.bookmarks.map((filter) => (
                      <SolutionTopic
                        key={filter}
                        name={filter}
                        isActive={activeBookmark === filter}
                        onClick={() => {
                          setActiveBookmark(filter);
                          setActiveFilter(filter);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Answers Section */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 cursor-pointer text-xl font-semibold"
                  onClick={() => handleSectionClick("answers")}
                >
                  <i
                    className={`ri-arrow-right-s-line transform ${
                      expandedSection === "answers" ? "rotate-90" : ""
                    }`}
                  ></i>
                  <span>Answers</span>
                </div>
                {expandedSection === "answers" && (
                  <div className="py-4 w-full grid grid-cols-1 gap-4">
                    {filterCategories.answers.map((filter) => (
                      <SolutionTopic
                        key={filter}
                        name={filter}
                        isActive={activeAnswer === filter}
                        onClick={() => {
                          setActiveAnswer(filter);
                          setActiveFilter(filter);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-[65%] space-y-6">
              <div className="w-full bg-zinc-300 rounded-2xl">
                {expandedQuestionId && (
                  <button
                    onClick={() => setExpandedQuestionId(null)}
                    className="px-4 py-2 bg-blue-900 text-white rounded-lg mb-4"
                  >
                    Back to All Questions
                  </button>
                )}
                <div className="w-[25%] h-4 bg-blue-900 rounded-2xl mb-4"></div>
              </div>

              {questionsToShow.map((question, idx) => (
                <div key={idx} className="w-full bg-slate-200 rounded-2xl p-4">
                  <div className="w-full bg-neutral-50 rounded-xl shadow-[4px_4px_18px_0px_rgba(180,180,180,0.18)] p-6">
                    {/* Question Header */}
                    <div className="flex justify-between mb-4">
                      <div>
                        <div className="text-zinc-800 text-sm font-semibold">
                          Question {question.question_no}
                        </div>
                        {question.answered_option === "" && (
                          <div className="w-28 h-3 justify-start text-orange-400 text-xs font-semibold font-['Open_Sans']">
                            You didn't attempt
                          </div>
                        )}
                      </div>
                      <div
                        className={`text-xs font-semibold ${
                          question.answered_option === ""
                            ? "text-orange-400"
                            : question.answered_option ===
                              question.correct_option
                            ? "text-emerald-500"
                            : "text-red-500"
                        }`}
                      >
                        {question.answered_option === ""
                          ? "0 Marks"
                          : question.answered_option === question.correct_option
                          ? "+1 Marks"
                          : "-0.25 Marks"}
                      </div>
                    </div>

                    {/* Question Text */}
                    <div className="text-zinc-800 text-sm font-normal mb-4">
                      {question.question_text}
                    </div>

                    {/* Time and Topic */}
                    <div className="flex gap-6 mb-4">
                      <div className="px-4 py-2 bg-white rounded-md border border-blue-900">
                        {question.total_time_taken}
                      </div>
                      <div className="px-4 py-2 bg-white rounded-md border border-blue-900">
                        {question.topic_name}
                      </div>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {question.options.map((option, index) => (
                        <div
                          key={index}
                          className={`px-4 py-6 rounded-xl shadow-[4.5px_4.5px_20.3px_0px_rgba(137,137,137,0.09)] inline-flex justify-between items-center
                            ${
                              question.answered_option === ""
                                ? "bg-gray-200 text-zinc-800"
                                : option === question.correct_option
                                ? "bg-emerald-500 text-stone-50"
                                : option === question.answered_option
                                ? "bg-red-500 text-stone-50"
                                : "bg-gray-200 text-zinc-800"
                            }`}
                        >
                          <div className="font-['Open_Sans'] font-semibold">
                            {option}
                          </div>
                          {question.answered_option !== "" &&
                            (option === question.correct_option ||
                              option === question.answered_option) && (
                              <div className="w-5 h-5 relative">
                                <div
                                  className="w-3 absolute outline-[1.50px] outline-offset-[-0.75px] outline-stone-50"
                                  style={{
                                    height:
                                      option === question.correct_option
                                        ? "10px"
                                        : "12px",
                                    top:
                                      option === question.correct_option
                                        ? "5.69px"
                                        : "4.38px",
                                    left: "4.38px",
                                  }}
                                />
                              </div>
                            )}
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <i
                          className={`ri-lightbulb-line ${
                            question.answered_option === ""
                              ? "text-orange-400"
                              : question.answered_option ===
                                question.correct_option
                              ? "text-emerald-500"
                              : "text-red-500"
                          }`}
                        ></i>
                        <div className="text-zinc-800 text-sm font-semibold">
                          Solution
                        </div>
                        <div
                          onClick={() =>
                            handleSolutionView(question.question_no)
                          }
                          className="text-emerald-500 text-[10px] font-semibold cursor-pointer hover:text-emerald-600"
                        >
                          View
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <i
                          className="ri-message-3-line cursor-pointer"
                          onClick={() => {
                            setShowClaimPanel(true);
                            setActiveQuestionNo(question.question_no);
                          }}
                        ></i>
                        <i className="ri-bookmark-line"></i>
                      </div>
                    </div>

                    {/* Solution Section - Only shown when question is expanded */}
                    {expandedQuestionId === question.question_no && (
                      <div className="relative" ref={solutionContainerRef}>
                        {/* Drawing overlay */}
                        {drawingEnabled && (
                          <canvas
                            ref={canvasRef}
                            onMouseDown={startDrawing}
                            onMouseMove={draw}
                            onMouseUp={stopDrawing}
                            onMouseLeave={stopDrawing}
                            className="absolute inset-0 z-10 cursor-crosshair"
                            style={{ touchAction: 'none' }}
                          />
                        )}

                        {/* Drawing tools */}
                        <div className="sticky top-0 z-20 bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button 
                              onClick={toggleDrawing}
                              className={`p-3 rounded-lg flex items-center gap-2 ${
                                drawingEnabled ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                              }`}
                            >
                              <i className="ri-edit-line text-xl"></i>
                              <span>{drawingEnabled ? 'Disable Drawing' : 'Enable Drawing'}</span>
                            </button>
                            
                            {drawingEnabled && (
                              <>
                                <button 
                                  onClick={() => setCurrentTool('pencil')}
                                  className={`p-3 rounded-lg flex items-center gap-2 ${
                                    currentTool === 'pencil' ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100'
                                  }`}
                                >
                                  <i className="ri-pencil-line text-xl"></i>
                                  <span>Pencil</span>
                                </button>
                                <button 
                                  onClick={() => setCurrentTool('highlighter')}
                                  className={`p-3 rounded-lg flex items-center gap-2 ${
                                    currentTool === 'highlighter' ? 'bg-yellow-100 text-yellow-600' : 'hover:bg-gray-100'
                                  }`}
                                >
                                  <i className="ri-mark-pen-line text-xl"></i>
                                  <span>Highlighter</span>
                                </button>
                                <button 
                                  onClick={() => setCurrentTool('eraser')}
                                  className={`p-3 rounded-lg flex items-center gap-2 ${
                                    currentTool === 'eraser' ? 'bg-red-100 text-red-600' : 'hover:bg-gray-100'
                                  }`}
                                >
                                  <i className="ri-eraser-line text-xl"></i>
                                  <span>Eraser</span>
                                </button>
                                <button 
                                  onClick={clearCanvas}
                                  className="p-3 rounded-lg flex items-center gap-2 hover:bg-gray-100"
                                >
                                  <i className="ri-delete-bin-line text-xl"></i>
                                  <span>Clear All</span>
                                </button>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="relative z-0">
                          {/* Solution content */}
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <h3 className="text-xl font-semibold mb-4">
                              Solution
                            </h3>
                            <div className="mb-6">
                              <span className="font-semibold">
                                Correct Answer:{" "}
                              </span>
                              <span>{question.correct_option}</span>
                            </div>

                            {/* Solution explanation */}
                            <div className="mb-6">
                              <h4 className="font-semibold mb-2">Explanation:</h4>
                              <p className="text-gray-700">
                                Trigeminal neuralgia is characterized by episodes
                                of severe facial pain that last from a few seconds
                                to several minutes. It typically affects one side
                                of the face and is often triggered by normal daily
                                activities. This condition is not typically
                                associated with loss of consciousness or falls,
                                making it the incorrect choice in this scenario.
                              </p>
                            </div>

                            {/* Key Points */}
                            <div className="mb-6">
                              <h4 className="font-semibold mb-2">Key Points:</h4>
                              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                <li>
                                  Epilepsy can cause brief lapses of consciousness
                                </li>
                                <li>
                                  Syncope is characterized by temporary loss of
                                  consciousness
                                </li>
                                <li>
                                  Migraine can be associated with aura and
                                  occasional loss of consciousness
                                </li>
                                <li>
                                  Trigeminal neuralgia does not typically cause
                                  loss of consciousness
                                </li>
                              </ul>
                            </div>

                            {/* Reference Image if available */}
                            {question.solution_image && (
                              <div className="mb-6">
                                <h4 className="font-semibold mb-2">
                                  Reference Image:
                                </h4>
                                <img
                                  src={question.solution_image}
                                  alt="Solution reference"
                                  className="max-w-full rounded-lg shadow-md"
                                />
                              </div>
                            )}
                          </div>

                          {/* Additional Resources */}
                          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold mb-4">
                              Additional Resources
                            </h4>
                            <div className="space-y-4">
                              <div className="flex items-center gap-3">
                                <i className="ri-video-line text-blue-600"></i>
                                <a
                                  href="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  Watch related video lecture
                                </a>
                              </div>
                              <div className="flex items-center gap-3">
                                <i className="ri-file-text-line text-blue-600"></i>
                                <a
                                  href="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  Download PDF notes
                                </a>
                              </div>
                              <div className="flex items-center gap-3">
                                <i className="ri-question-line text-blue-600"></i>
                                <a
                                  href="#"
                                  className="text-blue-600 hover:underline"
                                >
                                  Practice similar questions
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showClaimPanel && (
        <ClaimPanel
          onClose={() => setShowClaimPanel(false)}
          questionNo={activeQuestionNo}
        />
      )}
    </>
  );
};

export default Solutions;
