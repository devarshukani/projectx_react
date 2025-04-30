import React, { useRef, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Header from "./templates/Header";
import Search from "./templates/Search";
import Trending from "./templates/Trending";
import TestSeries from "./templates/TestSeries";
import Subject from "./templates/Subject";
import SubjectsDetails from "./templates/SubjectsDetails";

const Video = () => {
  // Refs for each topic section
  const medicineRef = useRef(null);
  const surgeryRef = useRef(null);
  const pediatricsRef = useRef(null);
  const orthopedicsRef = useRef(null);
  const entRef = useRef(null);
  const radiologyRef = useRef(null);
  const anesthesiaRef = useRef(null);
  const psychiatryRef = useRef(null);
  const dermatologyRef = useRef(null);
  const physiologyRef = useRef(null);
  const pathologyRef = useRef(null);
  const pharmacologyRef = useRef(null);
  const biochemistryRef = useRef(null);
  const microbiologyRef = useRef(null);
  const communityMedicineRef = useRef(null);

  // State to track the active topic
  const [activeTopic, setActiveTopic] = useState(null);

  // Function to handle topic click
  const handleTopicClick = (ref, topic) => {
    setActiveTopic(topic); // Set the active topic
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
        <TopNav />
        <div className="mx-[12.5%] mb-10">
        <Search />
        </div>
        
        <Header title="Videos" />
        <Trending
          title="Learn with structured course"
          description="The subscription unlocks high quality lecture videos for the entire syllabus for all the subjects"
          buttonName="Enroll Now"
        />

        <div className="flex justify-center gap-5 m-30">
          {/* Left Side: Topics List (Sticky) */}
          <div className="w-[20%] p-10 sticky top-0 h-screen overflow-y-auto">
            <h1 className="text-3xl font-semibold">Topics</h1>
            <div className="py-10 w-full grid grid-cols-1 gap-4">
              <Subject
                name="Medicine"
                count={90}
                isActive={activeTopic === "Medicine"}
                onClick={() => handleTopicClick(medicineRef, "Medicine")}
              />
              <Subject
                name="Surgery"
                count={15}
                isActive={activeTopic === "Surgery"}
                onClick={() => handleTopicClick(surgeryRef, "Surgery")}
              />
              <Subject
                name="Paediatrics"
                count={10}
                isActive={activeTopic === "Paediatrics"}
                onClick={() => handleTopicClick(pediatricsRef, "Paediatrics")}
              />
              <Subject
                name="Orthopedics"
                count={10}
                isActive={activeTopic === "Orthopedics"}
                onClick={() => handleTopicClick(orthopedicsRef, "Orthopedics")}
              />
              <Subject
                name="ENT"
                count={10}
                isActive={activeTopic === "ENT"}
                onClick={() => handleTopicClick(entRef, "ENT")}
              />
              <Subject
                name="Radiology"
                count={10}
                isActive={activeTopic === "Radiology"}
                onClick={() => handleTopicClick(radiologyRef, "Radiology")}
              />
              <Subject
                name="Anesthesia"
                count={10}
                isActive={activeTopic === "Anesthesia"}
                onClick={() => handleTopicClick(anesthesiaRef, "Anesthesia")}
              />
              <Subject
                name="Psychiatry"
                count={10}
                isActive={activeTopic === "Psychiatry"}
                onClick={() => handleTopicClick(psychiatryRef, "Psychiatry")}
              />
              <Subject
                name="Dermatology"
                count={10}
                isActive={activeTopic === "Dermatology"}
                onClick={() => handleTopicClick(dermatologyRef, "Dermatology")}
              />
              <Subject
                name="Physiology"
                count={10}
                isActive={activeTopic === "Physiology"}
                onClick={() => handleTopicClick(physiologyRef, "Physiology")}
              />
              <Subject
                name="Pathology"
                count={10}
                isActive={activeTopic === "Pathology"}
                onClick={() => handleTopicClick(pathologyRef, "Pathology")}
              />
              <Subject
                name="Pharmacology"
                count={10}
                isActive={activeTopic === "Pharmacology"}
                onClick={() => handleTopicClick(pharmacologyRef, "Pharmacology")}
              />
              <Subject
                name="Biochemistry"
                count={10}
                isActive={activeTopic === "Biochemistry"}
                onClick={() => handleTopicClick(biochemistryRef, "Biochemistry")}
              />
              <Subject
                name="Microbiology"
                count={10}
                isActive={activeTopic === "Microbiology"}
                onClick={() => handleTopicClick(microbiologyRef, "Microbiology")}
              />
              <Subject
                name="Community Medicine"
                count={10}
                isActive={activeTopic === "Community Medicine"}
                onClick={() =>
                  handleTopicClick(communityMedicineRef, "Community Medicine")
                }
              />
            </div>
          </div>

          <div className="h-full w-[75%] ml-3 overflow-y-auto">
            <div ref={medicineRef}>
              <SubjectsDetails name="Medicine" />
            </div>
            <div ref={surgeryRef}>
              <SubjectsDetails name="Surgery" />
            </div>
            <div ref={pediatricsRef}>
              <SubjectsDetails name="Paediatrics" />
            </div>
            <div ref={orthopedicsRef}>
              <SubjectsDetails name="Orthopedics" />
            </div>
            <div ref={entRef}>
              <SubjectsDetails name="ENT" />
            </div>
            <div ref={radiologyRef}>
              <SubjectsDetails name="Radiology" />
            </div>
            <div ref={anesthesiaRef}>
              <SubjectsDetails name="Anesthesia" />
            </div>
            <div ref={psychiatryRef}>
              <SubjectsDetails name="Psychiatry" />
            </div>
            <div ref={dermatologyRef}>
              <SubjectsDetails name="Dermatology" />
            </div>
            <div ref={physiologyRef}>
              <SubjectsDetails name="Physiology" />
            </div>
            <div ref={pathologyRef}>
              <SubjectsDetails name="Pathology" />
            </div>
            <div ref={pharmacologyRef}>
              <SubjectsDetails name="Pharmacology" />
            </div>
            <div ref={biochemistryRef}>
              <SubjectsDetails name="Biochemistry" />
            </div>
            <div ref={microbiologyRef}>
              <SubjectsDetails name="Microbiology" />
            </div>
            <div ref={communityMedicineRef}>
              <SubjectsDetails name="Community Medicine" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;