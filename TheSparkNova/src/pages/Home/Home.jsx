import GetStarted from "../../components/GetStarted";
import ChallengeSection from "./ChallengeSection";
import FeaturedEvent from "./FeaturedEvent";
import HeroSection from "./HeroSection";
import SuccessStories from "./SuccessStories";
import Support from "./Support";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ChallengeSection />
      <Support />
      <FeaturedEvent />
      <SuccessStories />
      <GetStarted
        heading={"Ready to Transform Your College's Startup Ecosystem?"}
        para={
          "Join 50+ colleges already building successful incubation centers with TheSparknova"
        }
        btn1={"Schedule a Partnership Call"}
        btn2={"Download Our Brochure"}
      />
    </div>
  );
};

export default Home;
