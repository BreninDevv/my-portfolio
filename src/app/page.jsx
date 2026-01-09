"use client";

import "./globals.css";
import Header from "./components/header/header";
import ContactSection from "./sections/contactSCROLL/contactSection";
import HeroSection from "./sections/heroSCROLL/heroSection";
import ProjectsSection from "./sections/projectsSCROLL/projectsSection";
import AboutSkillsSection from "./sections/aboutSkillsSCROLL/AboutSkillsSection";

export default function Page() {
  return (
    <>
      <main>
        <Header />
        <HeroSection />
        <AboutSkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
