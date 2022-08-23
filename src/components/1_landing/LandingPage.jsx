import React, { useEffect } from "react";
import Footer from "../globalComponents/Footer";
import EightSection from "./EightSection";
import FifthSection from "./FifthSection";
import FourthSection from "./FourthSection";
import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import SecondSection from "./SecondSection";
import SeventhSection from "./SeventhSection";
import SixthSection from "./SixthSection";
import SocialMedia from "./SocialMedia";
import ThirdSection from "./ThirdSection";

const LandingPage = () => {
  // Scrool top top when first mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EightSection />
      <OurTeam />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default LandingPage;
