import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import RelevantProjectsSection from "./RelevantProjectsSection";

const MainContent = () => {
  return (
    <main className="pt-24 lg:w-[52%] lg:py-24">
      <AboutSection />
      <ExperienceSection />
      <RelevantProjectsSection />
    </main>
  );
};

export default MainContent;
