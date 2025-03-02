import { useState } from 'react';
import Button from './Button';
import arrowLeft from '/arrowLeft.png';

const cards = [
    {
        title: 'NEET Aspirants',
        content: 'Biology',
        image: 'Image',
    },
    {
        title: 'NEET Aspirants',
        content: 'Chemistry',
        image: 'Image',
    },
    {
        title: 'NEET Aspirants',
        content: 'Physics',
        image: 'Image',
    }
];

const CardSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNext = () => {
        if (currentIndex < cards.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="grid grid-cols-12 mt-12 gap-x-[18px] relative h-[300px] overflow-hidden rounded-xl">
            {/* Cards Container */}
            <div
                className="flex align-middle gap-x-6 transition-transform duration-500 ease-in-out col-span-9 col-start-2 col-end-11"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className=" flex-none p-6 bg-[#EAEDEF] rounded-2xl w-[900px] shadow-md flex flex-col justify-between"
                    >
                        <div className="text-left">
                            <p className="text-2xl font-semibold mb-2">{card.title}</p>
                        </div>
                        <div className="flex justify-center items-center h-36">
                            <p>{card.image}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <Button name={'Demo Lecture'} />
                            <p className="text-2xl font-semibold">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Left Navigation Button */}
            <button
                onClick={handlePrev}
                className={`absolute top-1/2 left-20 bg-[#DEE6F2] rounded-lg p-7 text-xl transition-transform duration-200 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                disabled={currentIndex === 0}
            >
                <img src={arrowLeft} alt="" className='h-4 w-2'/>
            </button>

            {/* Right Navigation Button */}
            <button
                onClick={handleNext}
                className={`absolute top-1/2 right-40 bg-[#DEE6F2] rounded-lg p-7 text-xl transition-transform duration-200 ${currentIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                disabled={currentIndex === cards.length - 1}
            >
                <img src={arrowLeft} alt="" className='rotate-180 h-4 w-2' />
            </button>
        </div>
    );
};

export default CardSlider;
