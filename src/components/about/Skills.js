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
      Innovative and detail-Oriented Fresher Front End Developer with a passion for creating responsive and user
friendly websites with a great interest in functional programming. . Skilled
 in collaborating with teammates and staying up-to-date on emerging technologies. Highly passionate about
 ensuring that the user experience is seamless and visually appealing by using ui/ux knowledge to the fullest.
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
