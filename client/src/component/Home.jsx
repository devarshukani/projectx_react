import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Search from "./templates/Search";
import SubjectCardSlider from "./templates/SubjectCardSlider";
import HeroImageText from "./templates/HeroImageText";
import MockCalendar from "./templates/MockCalendar";
import FixedChatButton from "./templates/FixedChatButton";
import FeedHome from "./templates/FeedHome";


const Home = () => {
  console.log("home");


  return (
    <>
      <SideNav />
      <div className="w-[92%] h-full overflow-auto overflow-x-hidden bg-[#F7F7F7]">
        <TopNav />
        <div className="grid grid-cols-12 w-full gap-x-[18px] px-6">
          <div />
          <div className="col-span-9">
            <Search />
            <HeroImageText />
          </div>
          <MockCalendar />
        </div>

        {/* Sliding demo lectures cards */}
        <SubjectCardSlider />

        {/* Fixed Chat button in bottom right */}
        <FixedChatButton />

        {/* Bottom Feed section */}
        <FeedHome />
      </div>
    </>
  );
};

export default Home;
