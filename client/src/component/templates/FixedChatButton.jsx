import chatButton from '/chatButton.png';
import chatButtonHover from '/chatButtonHover.png';
import { useState } from "react";

const FixedChatButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="p-5 transition-all duration-500 fixed rounded-full bottom-6 right-24 bg-[#f6f6f6] hover:bg-[#235391] shadow-[0px_4px_12px_0px_rgba(137,137,137,0.18)]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ?
                <img src={chatButtonHover} alt="chatButtonHover" />
                :
                <img src={chatButton} alt="chatButton" />
            }
        </div>
    )
}

export default FixedChatButton