import { useState } from "react";

const QueOfDaySection = () => {

    const questionAndOption = {
        question: 'A 25 year old patient with caries is scheduled for a dental extraction. Which if the following cardiac conditions does not requires endocarditis prophylaxis prior to dental extraction?',
        options: [
            'Prior history of endocarditis',
            'Prior history of endocarditis',
            'Prior history of endocarditis',
            'Prior history of endocarditis',
        ]
    }

    const optionIndex = ['A','B','C','D'];
    const [selectedOption , setSelectedOption] = useState(null)

    const handleSelectedOption = (index)=>{
        if(selectedOption === index){
            setSelectedOption(null)
        }
        else {
            setSelectedOption(index)
        }
    }

    return (
        <div
            className="bg-[#F9F9F9] text-[#2A2B2D80] w-80 flex flex-col gap-y-[18px] items-center p-6 min-w-[347px]  rounded-2xl"
            style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)", }}
        >
            <div className="">
                <p className="text-2xl font-semibold">Question of the day</p>
            </div>
            <div>
                <p className="text-center text-sm font-normal text-[#2A2B2D]">{questionAndOption.question}</p>
            </div>
            <div className="flex flex-col gap-y-3">
                {
                    questionAndOption.options.map((option,index)=>(
                        <div
                            key={index} 
                            className={`flex items-center gap-x-4 border border-[#2A2B2D80] p-4 rounded-md cursor-pointer ${selectedOption === index ? 'bg-[#235391] text-white':'bg-white text-[#2A2B2D]'}`}
                            onClick={()=>handleSelectedOption(index)}
                        >
                            <p className={`w-5 rounded-sm text-center font-semibold px-0.5 bg-transparent`}>{optionIndex[index]}</p>
                            <p>{option}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default QueOfDaySection