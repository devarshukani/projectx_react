import React from "react";
import { useNavigate } from "react-router-dom";

const SubjectChapter = ({ subName, chapters, subjectName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/video/details", {
      state: {
        chapterName: subName,
        totalChapters: chapters,
        subjectName: subjectName,
      },
    });
  };

  return (
    <div
      onClick={handleClick}
      className="group relative pl-3 hover:bg-[#dde7f9] transition-all duration-300 ease-in-out rounded-lg flex items-center bg-[#fafafa] cursor-pointer"
    >
      <div className="absolute left-5 h-[70%] w-1 bg-[#235391] rounded-full opacity-100"></div>
      <div className="p-7">
        <h1 className="text-3xl font-semibold">{subName}</h1>
        <p className="text-zinc-500 text-xl mt-4">{chapters} Chapters</p>
      </div>
    </div>
  );
};

export default SubjectChapter;
