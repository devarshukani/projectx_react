import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

import GrandTest from "./GrandTest";
import MahayudhTestSeries from "./MahayudhTestSeries";

useState;

const TestSeries = () => {
  const [testcategory, setTestcategory] = useState("Test Category");
  return (
    <div className="mt-[4%] mb-[4%] w-full flex justify-center items-center">
      <div className="w-[82%] ">
        <h1 className="font-semibold text-4xl text-black">Test Series</h1>
        <p className="mt-2 text-zinc-600">
          Evaluate your exam preparation with the test Series
        </p>

        <div className="inline-block border rounded mt-5">
          <Dropdown
            title={testcategory}
            options={["Ongoing", "Upcoming", "Scheduled"]}
            func={(e) => {
              setTestcategory(e.target.value);
            }}
          />
        </div>

        <div className="py-10 w-full grid grid-cols-2 gap-9">
          <GrandTest />
          <GrandTest />
          <GrandTest />
        </div>

        <h1 className="font-semibold text-4xl text-black my-5">Mahayudh Series</h1>

        <div className="py-10 w-full grid grid-cols-2 gap-9">
          <MahayudhTestSeries/>
          <MahayudhTestSeries/>
        </div>
      </div>
    </div>
  );
};

export default TestSeries;
