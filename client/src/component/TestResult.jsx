import React from "react";
import SideNav from "./templates/SideNav";
import Header from "./templates/Header";
import TestInfo from "./templates/TestInfo";

import trendingImg from "/trending_img.png";
import { Link } from "react-router-dom";
import TestResultHorizontalCard from "./templates/TestResultHorizontalCard";
import ResultQuestionGraph from "./templates/ResultQuestionGraph";
import SubjectPerformance from "./templates/SubjectPerformance";
import LeaderBoard from "./templates/LeaderBoard";
import Performances from "./Performances";
import Evaluate from "./templates/Evaluate";

const TestResult = () => {
  const testData = [
    { subject: 'Math', score: 8, total: 10 },
    { subject: 'Science', score: 6, total: 10 },
  ];
  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <div className="w-full mt-20">
          <Header />
          <TestResultHorizontalCard title="Master UG Medical Test" free="true"/>
          <ResultQuestionGraph/>
          <div className="mt-10 w-full flex flex-col justify-center items-center ">
            <div className="flex justify-between w-[82%] gap-10">
            <div className="w-[50%]">
              <LeaderBoard/>
            </div>
            <div className="w-[40%]">
                <Performances />
            </div>
            </div>
            
          </div>
          <Evaluate/>
        </div>
      </div>
    </>
  );
};

export default TestResult;
