// startTestPopUp.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTestAttempt } from "../../services/apiService";

const StartTestPopup = ({ isOpen, onClose, testData }) => {
  const [allowChangeAnswer, setAllowChangeAnswer] = useState(true);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handlePopupSubmit = async () => {
    try {
      console.log("Creating test attempt...", {
        testId: testData.id,
        userId: user.id,
      });

      // Send test attempt request
      const response = await createTestAttempt(testData.id, user.id);
      console.log("Test attempt created successfully:", response);

      // If successful, navigate to test screen
      navigate("/test/testscreen", {
        state: {
          testId: testData.id,
          allowChangeAnswer,
          testData,
        },
      });
      onClose();
    } catch (error) {
      console.error("Error creating test attempt:", error);
      // You might want to show an error message to the user here
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>{" "}
      {/* Background with blur */}
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-[400px]">
        {" "}
        {/* Popup content */}
        <h2 className="text-xl font-semibold mb-4">
          Which option would you like to choose?
        </h2>
        <div className="mb-2">
          <label className="flex items-center hover:cursor-pointer">
            <input
              type="radio"
              name="changeAnswer"
              value={true}
              checked={allowChangeAnswer}
              onChange={() => setAllowChangeAnswer(true)}
              className="mr-2"
            />
            You can change your answer whenever you want
          </label>
        </div>
        <div>
          <label className="flex items-center hover:cursor-pointer">
            <input
              type="radio"
              name="changeAnswer"
              value={false}
              checked={!allowChangeAnswer}
              onChange={() => setAllowChangeAnswer(false)}
              className="mr-2 "
            />
            You cannot change your answer once you have selected
          </label>
        </div>
        <div className="flex justify-end mt-4 gap-3">
          <button
            onClick={handlePopupSubmit}
            className="bg-[#235391] text-white px-4 py-2 rounded-md hover:cursor-pointer"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded-md hover:cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartTestPopup;
