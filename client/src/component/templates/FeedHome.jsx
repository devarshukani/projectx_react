import { useState } from "react";
import SliderNavigation from "./SliderNavigation";
import discussionFeedProfilePic from "/discussionFeedProfilePic.png";
import DiscussionFeedCard from "./DiscussionFeedCard";
import CrashCourseCard from "./CrashCourseCard";
import QueOfDaySection from "./QueOfDaySection";
import Button from "./Button";
import JobApplicationCard from "./JobApplicationCard";

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
  const discussionFeed = [
    {
      name: "Rodrickjesferhadley",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More",
      image: discussionFeedProfilePic,
      time: "2hr ago",
      likes: 38,
      dislikes: 12,
      comments: 9,
      shareCount: 10,
    },
    {
      name: "Rodrickjesferhadley",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More",
      image: discussionFeedProfilePic,
      time: "2hr ago",
      likes: 38,
      dislikes: 12,
      comments: 9,
      shareCount: 10,
    },
    {
      name: "Rodrickjesferhadley",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More",
      image: discussionFeedProfilePic,
      time: "2hr ago",
      likes: 38,
      dislikes: 12,
      comments: 9,
      shareCount: 10,
    },
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
          <div className="flex flex-col gap-4">
            {discussionFeed.map((card, index) => (
              <DiscussionFeedCard cardContent={card} key={index} />
            ))}
          </div>
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

  return (
    <div className="grid grid-cols-12 w-full gap-x-[18px] px-6 mt-4">
      <div className="col-span-7 col-start-2 flex flex-col justify-start gap-8">
        <SliderNavigation
          sections={navSections}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        {renderSectionContent()}
      </div>
      <div className="col-span-3 col-start-9 flex flex-col gap-y-6 items-start justify-start">
        <div className="flex items-center justify-end w-full gap-2 text-sm mb-2">
          <span className="text-zinc-600">
            {(currentPage - 1) * itemsPerPage + 1} -{" "}
            {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
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
        <CrashCourseCard />
        <CrashCourseCard />
        <QueOfDaySection />

        <div
          className="p-6 flex flex-col items-start gap-y-7 bg-[#F9F9F9] rounded-2xl min-w-[347px]"
          style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)" }}
        >
          <div className="flex flex-col gap-y-3 items-start">
            <p className="text-lg font-semibold">Discuss Now</p>
            <p className="text-sm">
              Share interview question <br /> and get solutions
            </p>
          </div>
          <Button name={"Let’s discuss"} />
        </div>

        <div
          className="p-6 flex flex-col items-start gap-y-7 bg-[#F9F9F9] rounded-2xl min-w-[347px]"
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
  );
};

export default FeedHome;
