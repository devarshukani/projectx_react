import { useState, useEffect, useRef } from "react";

const SliderNavigation = ({ sections, selectedIndex, setSelectedIndex }) => {
    const [underlineWidth, setUnderlineWidth] = useState(0);
    const [underlineOffset, setUnderlineOffset] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        if (sectionRefs.current[selectedIndex]) {
            // Update the underline width and position based on the selected section
            const selectedSection = sectionRefs.current[selectedIndex];
            setUnderlineWidth(selectedSection.offsetWidth);
            setUnderlineOffset(selectedSection.offsetLeft);
        }
    }, [selectedIndex]);

    return (
        <div className="relative">
            <div className="flex gap-x-8">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        ref={(el) => (sectionRefs.current[index] = el)} // Assign ref to each section
                        onClick={() => setSelectedIndex(index)}
                        className="cursor-pointer"
                    >
                        <p
                            className={`font-semibold text-lg ${selectedIndex === index ? "text-[#235391]" : "text-gray-700"
                                }`}
                        >
                            {section}
                        </p>
                    </div>
                ))}
            </div>
            {/* Dynamic underline */}
            <div
                className="absolute bottom-0 h-[2px] bg-[#235391] transition-all duration-300"
                style={{
                    width: `${underlineWidth}px`,
                    transform: `translateX(${underlineOffset}px)`,
                }}
            />
        </div>
    );
};

export default SliderNavigation;
