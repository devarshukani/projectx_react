import React, { useRef, useState } from "react";
import Header from "./templates/Header";
import SideNav from "./templates/SideNav";
import Subject from "./templates/Subject";
import SolutionTopic from "./templates/SolutionTopic";

const Solutions = () => {
  const [activeTopic, setActiveTopic] = useState(null);

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

  // Function to handle topic click
  const handleTopicClick = (ref, topic) => {
    setActiveTopic(topic); // Set the active topic
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <div className="w-full mt-20">
          <Header title={"Solution"} />
          <div className="flex justify-center m-10 gap-3">
            {/* Left Side: Topics List (Sticky) */}
            <div className="w-[15%] p-10 sticky top-0 h-screen overflow-y-auto">
              <h1 className="text-3xl font-semibold">Topics</h1>
              <div className="py-10 w-full grid grid-cols-1 gap-4">
                {topic.map((id) => {
                  return (
                    <SolutionTopic
                      name={id}
                      count={90}
                      isActive={activeTopic === id}
                      onClick={() => handleTopicClick(medicineRef, id)}
                    />
                  );
                })}
              </div>
            </div>

            {/*Right Side:  */}
            <div className="w-[75%] space-y-6">
              {questionData.map((question, idx) => (
                <div key={idx} className="w-full bg-slate-200 rounded-2xl p-4">
                  <div className="w-[25%] h-4 bg-blue-900 rounded-2xl mb-4"></div>
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
                                  className="w-3 absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-stone-50"
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
                        <div className="text-emerald-500 text-[10px] font-semibold">
                          View
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <i className="ri-message-3-line"></i>
                        <i className="ri-bookmark-line"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
