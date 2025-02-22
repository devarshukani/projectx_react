import React from "react";
import { Link } from "react-router-dom";

const SubjectVideo = ({subName, chapters}) => {
  return (
    <div className="group relative pl-3 hover:bg-[#dde7f9] transition-all duration-300 ease-in-out  rounded-lg flex items-center bg-[#fafafa] ">
      <div className="absolute left-5 h-[70%] w-1 bg-[#235391] rounded-full opacity-100 "></div>
      <Link className="p-7">
        <h1 className="text-3xl font-semibold">{subName}</h1>
        <p className="text-zinc-500 text-xl mt-4">{chapters} Chapters</p>
      </Link>
    </div>
  );
};

export default SubjectVideo;
