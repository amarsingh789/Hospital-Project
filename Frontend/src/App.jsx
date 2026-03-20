import React from "react";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Header/HeroSection";
import BodyPage from "./components/Pages/BodyPage";
import PlanPage from "./components/Pages/PlanPage";
import ServicePage from "./components/Pages/ServicePage";
import TeamPage from "./components/Pages/TeamPage";
import ReviewPage from "./components/Pages/ReviewPage";
import FAQPage from "./components/Pages/FAQPage";
import StatsSection from "./components/Pages/StatsSection";
import Footer from "./components/Footer/Footer";
import AuthModal from "./components/Pages/AuthModal";

const App = () => {
  return (
    <div>
      <Navbar />
      <AuthModal/>
      <div className="px-4">
        <HeroSection />
        <BodyPage />
      </div>
      <PlanPage/>
      <div>
        <ServicePage/>
        <StatsSection/>
        <TeamPage/>
        <ReviewPage/>
        <FAQPage/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
