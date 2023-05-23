import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Krishnaprasad-E-K-(MERN-Stack-Developer)-Resume.pdf";
import Info from "./Info";
import Files from "../../assets/Files";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            A B.Tech graduate in Computer Science and Engineering, I am
            passionate about creating and developing web interfaces, graphic
            designing and computer programming.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV <Files />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
