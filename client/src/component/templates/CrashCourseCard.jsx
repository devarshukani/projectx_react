import { useState } from "react";
import Button from "./Button";

const CrashCourseCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`transition-all duration-1000 ease-in-out flex flex-col gap-y-3 justify-between min-w-[347px] min-h-[187px] rounded-2xl p-[18px] ${
                isHovered ? 'bg-[#EFF2F8] text-[#235391]' : 'bg-[url("/courseImage.png")] bg-cover bg-center text-[#FFFFFF]'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)", }}
        >
            <div className="flex flex-col gap-y-1">
                <p className={`text-lg font-semibold leading-6 ${isHovered ? 'text-[#235391]' : 'text-[#FFFFFF]'}`}>
                    Medicine Crash Course:
                </p>
                <p className={`${isHovered ? 'text-[#235391]' : 'text-[#FFFFFF]'}`}>45 Days Course</p>
            </div>

            {/* Ensure Constant Height */}
            <div className="overflow-hidden" style={{ height: "88px" }}>
                <div className={`transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="flex justify-between w-full">
                        <div>
                            <ul className="list-disc text-sm text-[#235391] pl-5">
                                <li>Medical Testimony</li>
                                <li>Antibiotics</li>
                                <li>Medicines</li>
                            </ul>
                        </div>
                        <div className="h-[88px] w-[124px]">
                            <img src="/crashCourseHover.png" alt="course" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Button name={"Enrol Now"} />
            </div>
        </div>
    );
}

export default CrashCourseCard;
