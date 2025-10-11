import React, { Suspense,lazy } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import ThreeBackground from "./components/ThreeBackground";
 
const NavBar = lazy(()=>import("./components/NavBar"))
const Hero = lazy(()=>import("./components/HeroSection"))
const DownloadCV = lazy(()=>import("./components/DownloadCV"))
const ServicesSection = lazy(()=>import("./components/ServicesSection"))
const WhyMe = lazy(()=>import("./components/WhyMe"))
const ProjectsSection = lazy(()=>import("./components/ProjectsSection"));
const AchievementsSection = lazy(()=>import("./components/AchievementsSection"));
const ContactSection = lazy(()=>import("./components/ContactSection"));
const Footer = lazy(()=>import("./components/FooterSection"));
const ButtonToTop =lazy(()=>import("./components/ButtonToTop"));
export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <ThreeBackground />
      <div className="relative z-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center min-h-screen">
              <LoadingSpinner />
            </div>
          }
        >
          <NavBar />
          <Hero />
          <DownloadCV />
          <ServicesSection />
          <WhyMe />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
          <Footer />
          <ButtonToTop />
        </Suspense>
      </div>
    </div>
  );
}
