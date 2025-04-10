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
            <div className="w-[75%] bg-red-100">
              <div className="w-full bg-slate-200 rounded-2xl">
                <div className="w-[25%] h-4  bg-blue-900 rounded-2xl"></div>
                <div className="w-[810px] h-96 bg-neutral-50 rounded-xl shadow-[4px_4px_18px_0px_rgba(180,180,180,0.18)]">
                  

                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Solutions;
