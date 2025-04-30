import React from "react";
import { useLocation } from "react-router-dom";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import VideoInfo from "./templates/VideoInfo";

const VideoDetails = () => {
  const location = useLocation();
  const { chapterName, totalChapters, subjectName } = location.state || {
    chapterName: "Introduction",
    totalChapters: 1,
    subjectName: "Medicine",
  };

  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <div className="mt-25"></div>
        <Header title={`${subjectName} - ${chapterName}`} />
        <VideoInfo
          title={chapterName}
          chaptersCount={totalChapters}
          subjectName={subjectName}
        />
      </div>
    </>
  );
};

export default VideoDetails;
