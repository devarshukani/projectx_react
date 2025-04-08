import React from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import Trending from "./templates/Trending";
import TestSeries from "./templates/TestSeries";
import Search from "./templates/Search";

const Home = () => {
  console.log("test");
  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <TopNav />
        <div className="mx-[9%]">
        <Search />
        </div>
       
        
        <Header title="Tests" />
        <Trending
          title="Get upto 50% discount with our scholarship test"
          description="The subscription unlocks high quality lecture videos for the entire syllabus for all the subjects"
          path="/testinfo"
        />
        <TestSeries />
      </div>
    </>
  );
};

export default Home;
