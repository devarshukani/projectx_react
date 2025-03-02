import { useState } from "react";
import SliderNavigation from "./SliderNavigation"
import discussionFeedProfilePic from '/discussionFeedProfilePic.png'
import whatsappIcon from '/whatsappIcon.png'
import instagramIcon from '/instagramIcon.png'
import viberIcon from '/viberIcon.png'
import telegramIcon from '/telegramIcon.png'
import facebookIcon from '/facebookIcon.png'
import DiscussionFeedCard from "./DiscussionFeedCard";
import CrashCourseCard from "./CrashCourseCard";
import QueOfDaySection from "./QueOfDaySection";
import Button from "./Button";
import JobApplicationCard from "./JobApplicationCard";

const FeedHome = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navSections = ['Discussion', 'Job Application', 'Videos', 'Health News/Case studies']
    const discussionFeed = [
        {
            name: 'Rodrickjesferhadley',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More',
            image: discussionFeedProfilePic,
            time: '2hr ago',
            likes: 38,
            dislikes: 12,
            comments: 9,
            shareCount: 10,
        },
        {
            name: 'Rodrickjesferhadley',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More',
            image: discussionFeedProfilePic,
            time: '2hr ago',
            likes: 38,
            dislikes: 12,
            comments: 9,
            shareCount: 10,
        },
        {
            name: 'Rodrickjesferhadley',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctorpell Maecenas vitae mattis tellus. Nullam quis imer View More',
            image: discussionFeedProfilePic,
            time: '2hr ago',
            likes: 38,
            dislikes: 12,
            comments: 9,
            shareCount: 10,
        },
    ]

    const jobApplicationContent = [
        {
            role: 'UX/UI Designer',
            company: 'Indie Technology',
            companyLogo: discussionFeedProfilePic,
            address: 'Surat, Gujarat, India',
            medium: 'On site',
            time: '2 days ago',
            salaryRange: {
                lowerAmount: '200k',
                higherAmount: '350k'
            }
        },
        {
            role: 'UX/UI Designer',
            company: 'Indie Technology',
            companyLogo: discussionFeedProfilePic,
            address: 'Surat, Gujarat, India',
            medium: 'On site',
            time: '2 days ago',
            salaryRange: {
                lowerAmount: '200k',
                higherAmount: '350k'
            }
        },
        {
            role: 'UX/UI Designer',
            company: 'Indie Technology',
            companyLogo: discussionFeedProfilePic,
            address: 'Surat, Gujarat, India',
            medium: 'On site',
            time: '2 days ago',
            salaryRange: {
                lowerAmount: '200k',
                higherAmount: '350k'
            }
        },
        {
            role: 'UX/UI Designer',
            company: 'Indie Technology',
            companyLogo: discussionFeedProfilePic,
            address: 'Surat, Gujarat, India',
            medium: 'On site',
            time: '2 days ago',
            salaryRange: {
                lowerAmount: '200k',
                higherAmount: '350k'
            }
        },
    ]


    const renderSectionContent = () => {
        switch (navSections[selectedIndex]) {
            case 'Discussion':
                return (
                    <div className="flex flex-col gap-4">
                        {discussionFeed.map((card, index) => (
                            <DiscussionFeedCard cardContent={card} key={index} />
                        ))}
                    </div>
                );
            case 'Job Application':
                return (
                    <div className="flex flex-col gap-4">
                        {jobApplicationContent.map((card, index) => (
                            <JobApplicationCard cardContent={card} key={index} />
                        ))}
                    </div>
                );
            case 'Videos':
                return <div>{/* Video content goes here */}</div>;
            case 'Health News/Case studies':
                return <div>{/* Health News/Case Studies content goes here */}</div>;
            default:
                return null;
        }
    };

    return (
        <div className="grid grid-cols-12 w-full gap-x-[18px] px-6 mt-4">
            <div className=" col-span-7 col-start-2 flex flex-col justify-start gap-8">
                <SliderNavigation sections={navSections} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

                { renderSectionContent() }
            </div>
            <div className="col-span-3 col-start-9 flex flex-col gap-y-6 items-start justify-start">
                <CrashCourseCard/>
                <CrashCourseCard/>
                <QueOfDaySection/>

                <div className="p-6 flex flex-col items-start gap-y-7 bg-[#F9F9F9] rounded-2xl min-w-[347px]" style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)", }}>
                    <div className="flex flex-col gap-y-3 items-start">
                        <p className="text-lg font-semibold">Discuss Now</p>
                        <p className="text-sm">Share interview question <br /> and get solutions</p>
                    </div>
                    <Button name={'Let’s discuss'}/>
                </div>

                <div className="p-6 flex flex-col items-start gap-y-7 bg-[#F9F9F9] rounded-2xl min-w-[347px]" style={{ boxShadow: "2px 2px 8px rgba(137, 137, 137, 1)", }}>
                    <div className="flex flex-col gap-y-3 items-start">
                        <p className="text-lg font-semibold">Discuss Now</p>
                        <p className="text-sm">Share interview question <br /> and get solutions</p>
                    </div>
                    <div className="flex gap-x-3">
                        <img src={whatsappIcon} alt="socials" className="w-[30px] h-[30px]"/>
                        <img src={instagramIcon} alt="socials" className="w-[30px] h-[30px]"/>
                        <img src={viberIcon} alt="socials" className="w-[30px] h-[30px]"/>
                        <img src={facebookIcon} alt="socials" className="w-[30px] h-[30px]"/>
                        <img src={telegramIcon} alt="socials" className="w-[30px] h-[30px]"/>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default FeedHome