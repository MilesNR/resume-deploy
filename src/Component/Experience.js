import "./Experience.css";
import * as React from "react";
import AnimatedPage from "./AnimatedPage";

function Experience() {
  return (
    <AnimatedPage>
      <div className="main-container">
        <h2 className="Header">Experience & Education</h2>
        <div className="container">
          {/* Experience */}

          <div className="experience">
            <h3 className="title">Education</h3>
            <div className="box-pattern">
              <img
                className="img-logo"
                src={require("./img/techup.jfif")}
              ></img>
              <div>
                <h4>TechUp Coding Bootcamp</h4>
                <p className="year">
                  Coding Bootcamp, Full-Stack Software Developer
                </p>
                <p className="year">2022</p>
              </div>
            </div>
            <div className="box-pattern">
              <img className="img-logo" src={require("./img/sdu.jpg")}></img>
              <div>
                <h4>Suan Dusit University</h4>
                <p className="year">
                  Bachelor of Science, Culinary Technology and Service
                </p>
                <p className="year">2013-2017</p>
              </div>
            </div>
          </div>

          {/* Education */}

          <div className="education">
            <h3 className="title">Experience</h3>
            <div className="box-pattern">
              <img className="img-logo" src={require("./img/charm.png")}></img>
              <div>
                <h4>Charm Bakery Company Limited</h4>
                <p className="year">Restaurant Manager</p>
                <p className="year">2021</p>
              </div>
            </div>
            <div className="box-pattern">
              <img className="img-logo" src={require("./img/snp.png")}></img>
              <div>
                <h4>S&P Syndicate Public Company Limited</h4>
                <p className="year">
                  From Intern to Assistant Restaurant Manager
                </p>
                <p className="year">2013-2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Experience;
