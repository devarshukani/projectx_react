import React from "react";
import { useLocation } from "react-router-dom";
import SideNav from "./templates/SideNav";
import check from "/check.svg";

const JobDetails = () => {
  const location = useLocation();
  const { jobDetails } = location.state || {};

  return (
    <div className="flex w-full ">
      <SideNav />
      <div className="w-full flex justify-center p-8 ">
        <div className="w-[90%] mt-10">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-[68px] h-[68px] rounded-full">
              <img
                src={jobDetails?.companyLogo}
                alt="company logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">John Smith</h2>
              <h1 className="text-xl font-bold uppercase mb-2">
                PIXSTER STUDIO
              </h1>
              <div className="flex items-center gap-4 text-gray-600 text-sm">
                <span>{jobDetails?.address}</span>
                <span>•</span>
                <span>{jobDetails?.time}</span>
                <span>•</span>
                <span>Over 100 applicants</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full">
              <img src={check} alt="check" className="w-4 h-4" />
              <span>On site</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full">
              <img src={check} alt="check" className="w-4 h-4" />
              <span>Full-time</span>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <button className="px-6 py-2 bg-[#235391] text-white rounded-lg hover:bg-[#1b407a] transition-colors">
              Apply
            </button>
            <button className="px-6 py-2 border border-[#235391] text-[#235391] rounded-lg hover:bg-gray-50 transition-colors">
              Save
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">About this job</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We are seeking a talented and creative UX/UI Designer to join
                our dynamic team. The ideal candidate will be responsible for
                delivering exceptional user experiences through innovative
                design solutions while maintaining consistency across all our
                digital platforms.
              </p>
              <p>
                As a UX/UI Designer at Pixster Studio, you will work closely
                with our product and development teams to create intuitive,
                user-friendly interfaces that align with our business goals and
                user needs. You will be involved in the entire design process,
                from initial concept to final implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
