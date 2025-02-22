import React from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import Search from "./templates/Search";

const Home = () => {
    console.log("home");
    
  return (
    <>
      <SideNav />
      <div className="w-[92%] h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <TopNav />
        <Search />
        <Header />

      </div>
    </>
  );
};

export default Home;
