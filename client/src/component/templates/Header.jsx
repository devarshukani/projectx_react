import React from "react";
import leftArrow from "/left_arrow.png";
import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    if (location.pathname === '/video/details') {
      navigate('/video');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="mt-5 w-full">
      <div className="w-full flex justify-center">
        <div className="w-[75%] h-[22vh] bg-[#f9f9f9] rounded-2xl flex flex-col">
          <div className="w-full h-full p-6 flex flex-col justify-start items-start gap-2">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div
              onClick={handleBackClick}
              className="px-5 pt-5 flex justify-start items-center cursor-pointer"
            >
              <img className="h-[5vh]" src={leftArrow} alt="" />
              <h2>{location.pathname === '/video/details' ? 'Videos' : 'Home'}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
