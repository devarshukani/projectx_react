import React from 'react';
import { useLocation } from 'react-router-dom';
import SideNav from './templates/SideNav';
import Header from './templates/Header';
import check from "/check.svg";

const JobDetails = () => {
    const location = useLocation();
    const { jobDetails } = location.state || {};

    return (
        <>
            <SideNav />
            <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#ededed]">
                <div className="w-full mt-20">
                    <Header title="Job Details" />
                    
                    <div className="w-full flex justify-center">
                        <div className="w-[80%] bg-white rounded-xl p-8 mt-6">
                            <div className="flex items-start gap-6">
                                <img 
                                    src={jobDetails.companyLogo} 
                                    alt="Company Logo" 
                                    className="w-16 h-16 rounded-full"
                                />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h1 className="text-2xl font-semibold">{jobDetails.role}</h1>
                                            <h2 className="text-xl uppercase mt-2 text-zinc-800">{jobDetails.company}</h2>
                                            <p className="text-gray-600 mt-1">{jobDetails.address} • Posted {jobDetails.time}</p>
                                            <p className="text-gray-600 mt-1">Over 100 people clicked and applied</p>
                                        </div>
                                        <div className="text-xl font-semibold text-zinc-800">
                                            {'₹' + jobDetails.salaryRange.lowerAmount + '/yr - ₹' + jobDetails.salaryRange.higherAmount + '/yr'}
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-4">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                                            <img src={check} alt="checkmark" className="w-4 h-4" />
                                            <span>{jobDetails.medium}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                                            <img src={check} alt="checkmark" className="w-4 h-4" />
                                            <span>Full-time</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 mt-6">
                                        <button className="px-8 py-3 bg-[#235391] text-white font-semibold rounded-lg hover:bg-[#1b4170] transition-colors">
                                            Apply
                                        </button>
                                        <button className="px-8 py-3 border-2 border-[#235391] text-[#235391] font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                                            Save
                                        </button>
                                    </div>

                                    <div className="mt-8">
                                        <h3 className="text-xl font-semibold mb-4">About this job</h3>
                                        <div className="space-y-4 text-gray-700">
                                            <p>
                                                We are looking for a talented UX/UI Designer to create amazing user experiences.
                                                The ideal candidate should have a keen eye for clean and artful design,
                                                possess superior UI/UX skills and be able to translate high-level requirements into interaction flows.
                                            </p>
                                            <p>
                                                As a UX/UI Designer, you will be responsible for delivering the best online user experience,
                                                which makes your role extremely important. You will be working with various teams and
                                                clients to understand their requirements and deliver the best possible solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobDetails;