import React, { useState } from "react";
import SideNav from "./templates/SideNav";
import Header from "./templates/Header";
import SolutionTopic from "./templates/SolutionTopic";

const Bookmark = () => {
    const [expandedSection, setExpandedSection] = useState("");
  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <div className="w-full mt-20">
          <Header title={"Bookmark"} />
          <div className="flex justify-start m-10 gap-3">
            {/* Left Side: Collapsible Sections */}
            <div className="w-[15%] p-10 sticky top-0 h-screen overflow-y-auto">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
