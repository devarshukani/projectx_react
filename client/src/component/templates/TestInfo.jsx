// testInfo.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import trendingImg from "/trending_img.png";
import timerIcon from "/timer.png";
import languageIcon from "/lang.png";
import StartTestPopup from "./StartTestPopup";

const TestInfo = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [instructionsChecked, setInstructionsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchTestData = async () => {
      try {
        // Get test ID from URL query params
        const searchParams = new URLSearchParams(location.search);
        const testId = searchParams.get("id");

        const response = await fetch(
          `http://13.203.220.236/api/tests/${testId}`
        );
        const data = await response.json();
        if (data.success) {
          setTestData(data.data);
        }
      } catch (error) {
        console.error("Error fetching test data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestData();
  }, [location]);

  const handleAttemptTestClick = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (instructionsChecked) {
      setIsPopupOpen(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Please check the instructions checkbox first.");
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!testData) {
    return <div>Test not found</div>;
  }

  return (
    <div className="mt-[4%] mb-[4%] w-full flex flex-col justify-center items-center">
      <div className="bg-[#dee6f2] rounded-3xl w-[75%] h-[45vh] flex justify-start items-start">
        <div className="relative w-[60%] p-[3%] h-full flex flex-col ">
          <p className="mt-2 text-lg text-zinc-500 flex items-center w-[80%]">
            {testData.allow_update ? "Free" : "Premium"}
          </p>

          <h1 className="w-[90%] text-3xl font-semibold text-black">
            {testData.name}
          </h1>

          <p className="mt-2 text-lg text-zinc-500 flex items-center w-[80%]">
            <img
              className="h-[2.2vh] inline-block mr-1"
              src={timerIcon}
              alt=""
            />
            {testData.duration} min
            <img
              className="ml-2 mr-1 h-[3.5vh] inline-block"
              src={languageIcon}
              alt=""
            />
            English
          </p>

          <div className="absolute bottom-[10%] flex gap-5">
            <button
              onClick={handleAttemptTestClick}
              className="bg-[#235391] text-xl px-5 py-3 rounded-lg font-semibold text-white hover:cursor-pointer"
            >
              Attempt Test
            </button>

            <Link className="bg-[#ffffff] text-xl px-5 py-3 rounded-lg font-semibold text-[#235391] border-3">
              Instructions
            </Link>
          </div>
        </div>

        <div className="h-full w-[40%]">
          <img
            className="h-[102%]"
            src={testData.image || trendingImg}
            alt=""
          />
        </div>
      </div>

      <div className="mt-5 w-[75%] flex flex-col justify-start items-start gap-4">
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
        <h1 className="text-3xl font-semibold text-black">Instructions</h1>
        <ul className="mx-3 text-zinc-600 gap-4 flex flex-col list-disc list-inside">
          {testData.instructions.map((instruction) => (
            <li key={`instruction-${instruction.slice(0, 20)}`}>{instruction}</li>
          ))}
        </ul>

        <label className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            checked={instructionsChecked}
            onChange={(e) => setInstructionsChecked(e.target.checked)}
          />
          I have read the Instructions
        </label>
      </div>

      <StartTestPopup
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        testData={testData} // Pass test data to popup
      />
    </div>
  );
};

export default TestInfo;
