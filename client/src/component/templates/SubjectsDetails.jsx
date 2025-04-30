import React from "react";
import SubjectChapter from "./SubjectChapter";

const SubjectsDetails = ({ name }) => {
  // Sample chapters data - this would come from API in real implementation
  const chapters = [
    { name: "Introduction", count: 4 },
    { name: "Basic Concepts", count: 3 },
    { name: "Advanced Topics", count: 5 },
    { name: "Clinical Applications", count: 4 },
    { name: "Case Studies", count: 6 },
    { name: "Practice Questions", count: 4 },
  ];

  return (
    <div className="mb-14">
      <div className="flex items-center">
        <h1 className="h-[12vh] w-[12vh] flex justify-center items-center bg-[#dee6f2] text-[#235391] text-5xl font-bold rounded-full">
          {name[0]}
        </h1>
        <h1 className="font-semibold text-4xl ml-3">{name}</h1>
      </div>

      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter, index) => (
          <SubjectChapter
            key={index}
            subName={chapter.name}
            chapters={chapter.count}
            subjectName={name}
          />
        ))}
      </div>
    </div>
  );
};

export default SubjectsDetails;
