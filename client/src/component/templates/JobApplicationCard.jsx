import { useNavigate } from "react-router-dom";

const JobApplicationCard = ({ cardContent }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/job/${cardContent.role.toLowerCase().replace(/\s+/g, '-')}`, { state: { jobDetails: cardContent } });
    };

    return (
        <div onClick={handleClick} className="flex gap-x-6 justify-start items-start w-full mt-8 cursor-pointer hover:bg-gray-50 rounded-lg p-4">
            <div className="w-[68px] h-[68px] rounded-full">
                <img src={cardContent.companyLogo} alt="profile" />
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col gap-y-0.5 items-start justify-center">
                    <p className="text-sm font-semibold text-[#235391]">{cardContent.role}</p>
                    <p className="text-xs font-normal text-[#2A2B2DB8]">{cardContent.company}</p>
                    <p className="text-xs font-normal text-[#2A2B2DB8]">{cardContent.address + '(' + cardContent.medium + ')'}</p>
                    <p className="text-xs font-normal text-[#2A2B2DB8]">{cardContent.time}</p>
                </div>
                <div className="pr-24">
                    <p className="text-lg text-[#2A2B2DB8] font-semibold">{'₹' + cardContent.salaryRange.lowerAmount+ '/yr - ₹' + cardContent.salaryRange.higherAmount + '/yr'}</p>
                </div>
            </div>
        </div>
    )
}

export default JobApplicationCard