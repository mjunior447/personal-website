import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import FooterInfoSection from "./FooterInfoSection";
import RelevantProjectsSection from "./RelevantProjectsSection";

const MainContent = () => {
  return (
    <main className="pt-24 lg:w-[52%] lg:py-24">
      <AboutSection />
      <ExperienceSection />
      <RelevantProjectsSection />
      <FooterInfoSection />
    </main>
  );
};

export default MainContent;
