import "./Aboutme.css";
import * as React from "react";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import AnimatedPage from "./AnimatedPage";
function Aboutme() {
  return (
    <AnimatedPage>
      <div className="main-container">
        <div className="Aboutme-container">
          <div>
            <img src={require("./img/profile.jpg")} className="avatar" />
          </div>
          <div className="Aboutme-text">
            <div className="Aboutme-detail">
              <p className="Job-postions">
                Restaurant Managers | Developer-in-Training
              </p>
              <p className="Name-title">Nattakit Rattanakeha (Smile)</p>
              <p className="jd">
                <p>
                  <AlternateEmailRoundedIcon />
                  &nbsp;Nattakit.rattanakeha@gmail.com
                </p>
                <p>
                  <PhoneIphoneRoundedIcon />
                  &nbsp;+66 63-5262569
                </p>
                <p>
                  <ApartmentRoundedIcon />
                  &nbsp;Chiang Mai / Bangkok ,TH
                </p>
              </p>
            </div>
            <div className="btn-panel">
              <a href="https://www.linkedin.com/in/nattakit-rattanakeha-746b39248/">
                <input
                  className="btn Linkedin"
                  type="button"
                  value="Linkedin"
                />
              </a>
              <a href="https://www.facebook.com/Smile.Nattakit/">
                <input
                  className="btn facebook"
                  type="button"
                  value="Facebook"
                />
              </a>
              <a href="https://github.com/MilesNR">
                <input className="btn github" type="button" value="Git Hub" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-container">
          <p className="Title contact">What I Do</p>
          <div className="contact-content">
            <h4>Web Developer</h4>
            <p>
              Web Developers design and update websites and online applications
              using various programming languages and design tools. A regular
              example resume for this job mentions responsibilities such as
              creating webpage layouts, writing code, editing website content,
              and making adjustments based on client feedback.
            </p>
            <br></br>
            <h4>Management</h4>
            <p>
              Ability to operate a high-quality establishment and management
              skills from a restaurant manager job with at least four years of
              experience. set high criteria for employee training.
            </p>
          </div>
          <p className="Title contact">Relevant Skills</p>
          <div className="contact-content">
            <h4>Developer Skills</h4>
            <p>
              HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL,
              Software Testing, Git
            </p>
          </div>
          <div className="contact-content">
            <h4>Languages</h4>
            <p>English (intermediate) , Thai (Native)</p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Aboutme;
