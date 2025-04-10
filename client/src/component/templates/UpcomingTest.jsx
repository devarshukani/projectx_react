import React, { useState } from "react";

const UpcomingTest = () => {
  const upcomingTests = [
    { testname: "Test 1", testdate: "12/03/2003" },
    { testname: "Test 2", testdate: "23/04/2025" },
    { testname: "Test 3", testdate: "12/03/2003" },
    { testname: "Test 4", testdate: "23/04/2025" },
    { testname: "Test 5", testdate: "12/03/2003" },
    { testname: "Test 6", testdate: "23/04/2025" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? upcomingTests.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === upcomingTests.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full mt-10 flex justify-center overflow-hidden">
      <div className="w-[82%] h-80 bg-gray-200 rounded-2xl p-6 relative">
        <div className="flex items-center justify-between h-full">
          <i
            onClick={handlePrevious}
            className="ri-arrow-left-s-line text-3xl cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
          />

          <div
            className="flex gap-6 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {upcomingTests.map((test, index) => (
              <div
                key={index}
                className="w-[110%] px-6 py-4 flex-shrink-0 bg-white rounded-xl shadow-md"
              >
                <div className="flex justify-between mb-6">
                  <h2 className="text-xl font-semibold">{test.testname}</h2>
                  <p className="text-gray-600">{test.testdate}</p>
                </div>

                <div className="flex justify-center items-center h-40 mb-6 bg-gray-100 rounded-lg">
                  <div className="justify-start text-black text-2xl font-semibold font-['Open_Sans']">
                    Image
                  </div>
                </div>

                <div
                  data-property-1="Default"
                  className="px-4 py-3 bg-neutral-300 rounded-md inline-flex justify-center items-center gap-2.5 hover:bg-neutral-400 transition-colors"
                >
                  <div className="justify-center text-zinc-800 text-base font-semibold font-['Open_Sans']">
                    Attempt Test
                  </div>
                </div>
              </div>
            ))}
          </div>

          <i
            onClick={handleNext}
            className="ri-arrow-right-s-line text-3xl cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingTest;
