import React from "react";
import { Link } from "react-router-dom";
import SubjectChapter from "./SubjectChapter";

const SubjectsDetails = ({ name }) => {
  return (
    <div className="mb-14">
      <div className="flex items-center">
        <h1 className="h-[12vh] w-[12vh] flex justify-center items-center bg-[#dee6f2] text-[#235391] text-5xl font-bold rounded-full">
          {name[0]}
        </h1>
        <h1 className="font-semibold text-4xl ml-3">{name}</h1>
      </div>

      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
        <SubjectChapter subName="Mechanics" chapters={4} />
      </div>
    </div>
  );
};

export default SubjectsDetails;
