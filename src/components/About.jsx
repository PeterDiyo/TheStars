import React from "react";
import SectionTitle from "./SectionTitle";
import about from "../assets/aboutt.png";

const About = () => {
  return (
    <section className="py-10 align-element" id="about">
      <div className=" grid md:grid-cols-2 items-center gap-8 mb-8">
        <img src={about} className="w-full h-64 " />
        <article>
          <SectionTitle text="About" />
          <p className="mt-8 ">The About Page is under construction</p>
        </article>
      </div>
    </section>
  );
};
export default About;
