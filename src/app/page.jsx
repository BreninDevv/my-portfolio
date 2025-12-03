import "./globals.css";
import AboutSection from "./sections/aboutSCROLL/aboutSection";
import ContactSection from "./sections/contactSCROLL/contactSection";
import HeroSection from "./sections/heroSCROLL/heroSection";
import ProjectsSection from "./sections/projectsSCROLL/projectsSection";
import SkillsSection from "./sections/skillsSCROLL/skillsSection";

export default function Page() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
