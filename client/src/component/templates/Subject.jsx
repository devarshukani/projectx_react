import React from "react";
import { Link } from "react-router-dom";

const SubjectVideos = ({ name, count, onClick, isActive }) => {
  return (
    <div
      onClick={onClick}
      className={`group relative transition-all duration-300 ease-in-out w-[90%] py-3 rounded-lg cursor-pointer ${
        isActive
          ? "pl-5 w-[100%] bg-[#dde7f9]"
          : "hover:pl-5 hover:w-[100%] hover:bg-[#dde7f9]"
      }`}
    >
      <div
        className={`absolute left-0 top-0 h-full w-1 bg-[#235391] rounded-full transition-all duration-300 ease-in-out ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      ></div>

      <Link>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="text-zinc-500 text-xl">{count} videos</p>
      </Link>
    </div>
  );
};

export default SubjectVideos;
