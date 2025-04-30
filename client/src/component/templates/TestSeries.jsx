import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

import GrandTest from "./GrandTest";
import MahayudhTestSeries from "./MahayudhTestSeries";

const TestSeries = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <div className="w-[75%] rounded-2xl">
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold text-4xl text-black">Test Series</h1>
              <p className="mt-2 text-zinc-600">
                Evaluate your exam preparation with the test Series
              </p>
            </div>
            <h1 className="font-semibold text-2xl text-black">
              Feb 25 - Mar 8
            </h1>
          </div>

          <div className="inline-block border rounded mt-5">
            <Dropdown
              title={"Test Category"}
              options={["Ongoing", "Upcoming", "Scheduled"]}
              func={(e) => {
                // setTestcategory(e.target.value);
              }}
            />
          </div>

          <div className="py-10 w-full grid grid-cols-2 gap-9">
            <GrandTest />
            <GrandTest />
            <GrandTest />
          </div>

          <h1 className="font-semibold text-4xl text-black my-5">
            Mahayudh Series
          </h1>

          <div className="py-10 w-full grid grid-cols-2 gap-9">
            <MahayudhTestSeries />
            <MahayudhTestSeries />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;
