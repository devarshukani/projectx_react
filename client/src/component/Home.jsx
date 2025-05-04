import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import Search from "./templates/Search";
import SubjectCardSlider from "./templates/SubjectCardSlider";
import SubjectSlider from "./templates/SubjectSlider";
import QuizSlider from "./templates/QuizSlider";
import FixedChatButton from "./templates/FixedChatButton";
import FeedHome from "./templates/FeedHome";
import Header from "./templates/Header";

const Home = () => {
  console.log("home");

  return (
    <>
      <SideNav />
      <div className="w-full h-full overflow-auto overflow-x-hidden bg-[#F7F7F7]">
        <TopNav />
        <div className="mx-[12.5%] mb-10">
          <Search />
        </div>

        {/* Sliding demo lectures cards */}
        <div className="mb-10">
          <SubjectSlider />
        </div>
        <div className="mb-10">
          <QuizSlider />
        </div>
        
        {/* Fixed Chat button in bottom right */}
        <FixedChatButton />

        {/* Bottom Feed section */}
        <FeedHome />
      </div>
    </>
  );
};

export default Home;
