import React from "react";
import "../about/skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDescription">
        I am a skilled web developer proficient in front-end and back-end
        technologies, crafting dynamic and responsive websites with clean code
        and intuitive user experiences. Experienced in HTML, CSS, JavaScript,
        and various frameworks, I specialize in creating tailored digital
        solutions to meet client needs and enhance online presence.
      </span>
      <div className="skillBars">
        {/* 1/ */}
        <div className="skillBar">
          <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text,you can write your own content here</p>
          </div>
        </div>
        {/* 2. */}
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign   " className="skillBarImg" />
          <div className="skillBarText">
            <h2>WebDesign</h2>
            <p>This is a demo text,you can write your own content here</p>
          </div>
        </div>
        {/* 3. */}
        <div className="skillBar">
          <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>AppDesign</h2>
            <p>This is a demo text,you can write your own content here</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
