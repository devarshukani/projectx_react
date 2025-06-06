import React from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import TestInfo from "./templates/TestInfo";

const TestHome = () => {
  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <TopNav />
        <Header title="Test Details" />
        <TestInfo title="Master UG Medical Test" free="true" />
      </div>
    </>
  );
};

export default TestHome;
