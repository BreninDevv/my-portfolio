import Cards from "@/app/components/skillsComponents/cards";
import React from "react";
import ReactIcon from "../../assets/reacticon.png";
import JsIcon from "../../assets/jsicon.png";
import HtmlIcon from "../../assets/htmlicon.png";
import CssIcon from "../../assets/cssicon.png";
import Title from "@/app/components/skillsComponents/title";
import NextIcon from "../../assets/nexticon.png";
import TailwindIcon from "../../assets/tailwindicon.png";
import Button from "@/app/components/skillsComponents/button";

const SkillsSection = () => {
  return (
    <section className="bg-[#0D182A] min-h-screen flex flex-col items-center gap-y-6">
      <Title />

      <div className="grid grid-cols-2 gap-2">
        <Cards icon={HtmlIcon} name={"HTML"} />
        <Cards icon={CssIcon} name={"CSS"} />
        <Cards icon={JsIcon} name={"JS"} />
        <Cards icon={ReactIcon} name={"REACT"} />
        <Cards icon={NextIcon} name={"NEXT"} />
        <Cards icon={TailwindIcon} name={"TAILWIND"} />
      </div>
      <div className="py-4">
        <Button />
      </div>
    </section>
  );
};

export default SkillsSection;
