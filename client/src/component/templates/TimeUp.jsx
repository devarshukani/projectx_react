import React from 'react'
import { Link } from 'react-router-dom';

const TimeUp = ({ answered, marked, unanswered, onClose }) => {
    return (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-[500px]">
            <h2 className="text-2xl font-bold mb-4">Time's Up</h2>
            <p className="text-lg mb-6">Time is up. Your result has been generated. Click continue to view your result.</p>
            
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
              <Link
                to="/test/result"
                className="px-4 py-2 bg-[#235391] text-white rounded hover:bg-red-700"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      );
}

export default TimeUp