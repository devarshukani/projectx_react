import React from "react";
import { Link } from "react-router-dom";
import trendingImg from "/trending_img.png";
import Button from "./Button";

const Trending = (props) => {
  return (
    <div className="mt-[3%] mb-[4%] w-full">
      <div className="w-full flex justify-center">
        <div className="bg-[#dee6f2] rounded-3xl w-[75%] h-[45vh] flex justify-start items-start">
          <div className="relative w-[60%] p-[3%] h-full gap-1 flex flex-col justify-start items-start">
            <h1 className="mt-3 w-[90%] text-2xl font-semibold text-black">
              {props.title}
            </h1>
            <p className="text-zinc-800 w-[80%] mt-1 text-sm">
              {props.description}
            </p>
            <div className="absolute bottom-[15%]">
              <Button path={props.path} name={props.buttonName} />
            </div>
          </div>
          <div className="h-full w-[40%]">
            <img className="h-[102%]" src={trendingImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
