import React from "react";
import leftArrow from "/left_arrow.png";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/slices/authSlice";

const Header = ({ title }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const handleBackClick = () => {
    if (location.pathname === "/video/details") {
      navigate("/video");
    } else {
      navigate("/");
    }
  };

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/login");
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
              <h2>
                {location.pathname === "/video/details" ? "Videos" : "Home"}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              {user?.name && (
                <span className="text-gray-700">Welcome, {user.name}</span>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
