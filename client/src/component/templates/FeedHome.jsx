import { useState } from "react";
import SliderNavigation from "./SliderNavigation";
import discussionFeedProfilePic from "/discussionFeedProfilePic.png";
import DiscussionFeedCard from "./DiscussionFeedCard";
import CrashCourseCard from "./CrashCourseCard";
import QueOfDaySection from "./QueOfDaySection";
import Button from "./Button";
import JobApplicationCard from "./JobApplicationCard";
import DiscussionFeed from "./DiscussionFeed";

const FeedHome = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems] = useState(1045);
  const itemsPerPage = 25;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const navSections = [
    "Discussion",
    "Job Application",
    "Videos",
    "Health News/Case studies",
  ];
 
  const jobApplicationContent = [
    {
      role: "UX/UI Designer",
      company: "Indie Technology",
      companyLogo: discussionFeedProfilePic,
      address: "Surat, Gujarat, India",
      medium: "On site",
      time: "2 days ago",
      salaryRange: {
        lowerAmount: "200k",
        higherAmount: "350k",
      },
    },
    {
      role: "UX/UI Designer",
      company: "Indie Technology",
      companyLogo: discussionFeedProfilePic,
      address: "Surat, Gujarat, India",
      medium: "On site",
      time: "2 days ago",
      salaryRange: {
        lowerAmount: "200k",
        higherAmount: "350k",
      },
    },
    {
      role: "UX/UI Designer",
      company: "Indie Technology",
      companyLogo: discussionFeedProfilePic,
      address: "Surat, Gujarat, India",
      medium: "On site",
      time: "2 days ago",
      salaryRange: {
        lowerAmount: "200k",
        higherAmount: "350k",
      },
    },
    {
      role: "UX/UI Designer",
      company: "Indie Technology",
      companyLogo: discussionFeedProfilePic,
      address: "Surat, Gujarat, India",
      medium: "On site",
      time: "2 days ago",
      salaryRange: {
        lowerAmount: "200k",
        higherAmount: "350k",
      },
    },
  ];

  const renderSectionContent = () => {
    switch (navSections[selectedIndex]) {
      case "Discussion":
        return (
          <DiscussionFeed />
        );
      case "Job Application":
        return (
          <div className="flex flex-col gap-4">
            {jobApplicationContent.map((card, index) => (
              <JobApplicationCard cardContent={card} key={index} />
            ))}
          </div>
        );
      case "Videos":
        return <div>{/* Video content goes here */}</div>;
      case "Health News/Case studies":
        return <div>{/* Health News/Case Studies content goes here */}</div>;
      default:
        return null;
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleRefresh = () => {
    // Add refresh logic here
    console.log("Refreshing content...");
  };

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="w-[80%] flex flex-col">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="flex flex-col">
              <SliderNavigation
                sections={navSections}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
              {renderSectionContent()}
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-y-6 items-end">
            <div className="flex items-center justify-end gap-2 text-sm w-full">
              <button
                onClick={handleRefresh}
                className="p-1 hover:text-[#235391] transition-colors"
              >
                <i className="ri-refresh-line text-xl"></i>
              </button>
              <span className="text-zinc-600">
                {(currentPage - 1) * itemsPerPage + 1} -{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
                {totalItems}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`p-1 ${
                    currentPage === 1 ? "text-gray-300" : "hover:text-[#235391]"
                  } transition-colors`}
                >
                  <i className="ri-arrow-left-s-line text-xl"></i>
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`p-1 ${
                    currentPage === totalPages
                      ? "text-gray-300"
                      : "hover:text-[#235391]"
                  } transition-colors`}
                >
                  <i className="ri-arrow-right-s-line text-xl"></i>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end gap-y-6 mr-5">
              <CrashCourseCard />
              <CrashCourseCard />
              <QueOfDaySection />
              <div
                className="p-6 flex flex-col items-start gap-y-7 bg-[#F9F9F9] rounded-2xl w-full"
                style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)" }}
              >
                <div className="flex flex-col gap-y-3 items-start">
                  <p className="text-lg font-semibold">Discuss Now</p>
                  <p className="text-sm">
                    Share interview question <br /> and get solutions
                  </p>
                </div>
                <Button name={"Let's discuss"} />
              </div>
              <div
                className="p-6 flex flex-col items-start gap-y-7 bg-[#F9F9F9] rounded-2xl w-full"
                style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)" }}
              >
                <div className="flex flex-col gap-y-3 items-start">
                  <p className="text-lg font-semibold">Discuss Now</p>
                  <p className="text-sm">
                    Share interview question <br /> and get solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedHome;
