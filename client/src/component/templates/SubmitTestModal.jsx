// SubmitTestModal.js
import React from "react";
import { Link } from "react-router-dom";

const SubmitTestModal = ({ answered, marked, unanswered, onClose, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed bg-[#d2d2d2] opacity-50 inset-0 backdrop-blur-sm"></div>
      <div className="relative bg-white rounded-lg p-6 w-[90%] max-w-[500px]">
        <h2 className="text-2xl font-bold mb-4">Submit Test</h2>
        <p className="text-lg mb-6">Are you sure you want to submit this test?</p>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#298548] mr-2"></div>
            <span>{answered} Answered</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#f9b42c] mr-2"></div>
            <span>{marked} Marked</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-[#cbcdd2] mr-2"></div>
            <span>{unanswered} Unanswered</span>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
          >
            Back
          </button>
          <button
            onClick={onSubmit}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitTestModal;