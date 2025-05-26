import React, { useState } from "react";
import SideNav from "./templates/SideNav";
import Header from "./templates/Header";
import BookmarkItem from "./templates/BookmarkItem";

const Bookmark = () => {
  const [expandedSection, setExpandedSection] = useState("");
  const [activeTopic, setActiveTopic] = useState(null);

  // Sample data structure for bookmarks
  const bookmarkData = {
    tests: {
      title: "Tests",
      items: {
        "Full Length Mock Test": 4,
        "PYQP Test Courses": 4,
        "Subject Mock Tests": 6,
        "Topic-wise Tests": 5,
      },
    },
    subjects: {
      title: "Subjects",
      items: {
        Medicine: 12,
        Surgery: 8,
        Pediatrics: 5,
        Orthopedics: 6,
        ENT: 4,
        Ophthalmology: 3,
      },
    },
    courses: {
      title: "Courses",
      items: {
        "Medicine Crash Course": 15,
        "Surgery Masterclass": 8,
        "NEET PG Complete": 20,
        "Clinical Skills Workshop": 12,
      },
    },
    questionBank: {
      title: "Question Bank",
      items: {
        "Previous Year Questions": 25,
        "Topic-wise Questions": 30,
        "Mock Test Questions": 15,
        "Clinical Case Questions": 18,
      },
    },
    notes: {
      title: "Notes",
      items: {
        "Class Notes": 10,
        "Quick Revision": 8,
        "Important Topics": 12,
        "Clinical Pearls": 6,
      },
    },
    videos: {
      title: "Videos",
      items: {
        "Lecture Videos": 18,
        "Clinical Cases": 7,
        "Procedure Demos": 5,
        "Concept Explanations": 9,
      },
    },
    myFolders: {
      title: "My Folders",
      items: {
        "Important Topics": 15,
        "Revision Material": 10,
        "Must Do Questions": 20,
        "Daily Study": 8,
      },
    },
  };

  const handleSectionClick = (section) => {
    setExpandedSection(expandedSection === section ? "" : section);
    setActiveTopic(null);
  };

  // Component to render bookmark cards
  const renderBookmarkCards = (categoryName) => {
    if (!activeTopic) return null;

    const categoryData = bookmarkData[categoryName]?.items || {};
    const bookmarkCount = categoryData[activeTopic] || 0;

    return (
      <div className="grid grid-cols-2 gap-6">
        {[...Array(bookmarkCount)].map((_, index) => (
          <div
            key={`${activeTopic}-bookmark-${index}`}
            className="group relative pl-3 hover:bg-[#dde7f9] transition-all duration-300 ease-in-out rounded-lg bg-[#fafafa] cursor-pointer"
          >
            <div className="absolute left-0 h-full w-1 bg-[#235391] rounded-full opacity-100"></div>
            <div className="p-7">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-800">
                    {activeTopic} - Item {index + 1}
                  </h3>
                  <p className="text-sm text-gray-600">Added 2 days ago</p>
                </div>
                <button className="text-[#235391]">
                  <i className="ri-bookmark-fill"></i>
                </button>
              </div>
              <p className="text-gray-700">
                Brief description of the bookmarked content...
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <div className="w-full mt-20">
          <Header title={"Bookmark"} />
          <div className="flex justify-center m-10 gap-8">
            {/* Left Side: Collapsible Sections */}
            <div className="w-[15%] p-10 sticky top-0 h-screen overflow-y-auto">
              {Object.entries(bookmarkData).map(([key, category]) => (
                <div key={key} className="mb-8">
                  <div
                    className="flex items-center gap-3 cursor-pointer mb-2"
                    onClick={() => handleSectionClick(key)}
                  >
                    <i
                      className={`ri-arrow-right-s-line transform text-2xl ${
                        expandedSection === key ? "rotate-90" : ""
                      } transition-transform`}
                    ></i>
                    <span className="text-2xl font-bold">{category.title}</span>
                  </div>
                  {expandedSection === key && (
                    <div className="py-2 pl-7 w-full grid grid-cols-1 gap-2">
                      {Object.entries(category.items).map(([name, count]) => (
                        <BookmarkItem
                          key={name}
                          name={name}
                          count={count}
                          isActive={activeTopic === name}
                          onClick={() => setActiveTopic(name)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side: Content Area */}
            <div className="w-[65%] space-y-6">
              {renderBookmarkCards(expandedSection)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookmark;
