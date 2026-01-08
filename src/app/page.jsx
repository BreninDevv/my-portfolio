"use client";

import "./globals.css";
import Header from "./components/header/header";
import ContactSection from "./sections/contactSCROLL/contactSection";
import HeroSection from "./sections/heroSCROLL/heroSection";
import ProjectsSection from "./sections/projectsSCROLL/projectsSection";
import SkillsSection from "./sections/skillsSCROLL/skillsSection";

export default function Page() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
