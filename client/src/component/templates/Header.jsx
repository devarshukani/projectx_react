import React, { useState } from "react";
import leftArrow from "/left_arrow.png";
import { useNavigate } from "react-router-dom";

const Header = ({title}) => {
  const navigate = useNavigate();
  return (
    <div className="mt-5 w-full flex flex-col justify-center items-center gap-10">
      <div className="w-[82%] h-[22vh] bg-[#f9f9f9] rounded-2xl flex flex-col">
        <div 
          onClick={()=>{navigate(-1)}}
        className="px-5 pt-5 flex justify-start items-center"
        >
          <img className="h-[5vh]" src={leftArrow} alt="" />
          <h2>Home </h2>
        </div>
        <h1 className="p-5 text-5xl font-semibold">{title}</h1>
      </div>
    </div>
  );
};

export default Header;
