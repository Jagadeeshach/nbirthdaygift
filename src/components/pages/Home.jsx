import React from "react";
import { TypeAnimation } from "react-type-animation";
import SecondHomeSection from "./SecondHomeSection.jsx";
import "../../css/Home.css";

const Home = () => {
  return (
    <div className="container-format  home-container-head">
      <div className="home-first-box">
        <div className="home-text-box">
          <p className="home-nme">
            Hai... I'm <span>Neethika Poojary</span>
          </p>
          <p className="home-stl">
            Studying in <span>B. Com Final Year</span>
          </p>
          <p>
            I'm a &nbsp;
            <span>
              <TypeAnimation
                sequence={[
                  "Anchor",
                  800,
                  "Public Speaker",
                  800,
                  "Team Leader",
                  800,
                  "Writer",
                  800,
                  "Good Communicator",
                  800,
                  "Accountant",
                  800,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </p>
        </div>

        <div className="home-btn-box">
          <button className="home-dnld-btn">Download My Resume</button>
          <button className="home-txtme-btn">Write to Me</button>
        </div>
      </div>

      <div className="home-second-box">
        <div className="home-container">
          <div className="home-cube">
            <div className="home-face front">
              <img src="/images/anchor.jpeg" alt="img" />
              <p>Anchor</p>
            </div>
            <div className="home-face back">
              <img src="/images/teamleader.jpeg" alt="img" />
              <p>Team Leader</p>
            </div>
            <div className="home-face right">
              <img src="/images/motivator.jpeg" alt="img" />
              <p>Motivator</p>
            </div>
            <div className="home-face left">
              <img src="/images/writer.jpeg" alt="img" />
              <p>Writer</p>
            </div>
            <div className="home-face top">
              <img src="/images/singer.jpeg" alt="img" />
              <p>Public Speaker</p>
            </div>
            <div className="home-face bottom">
              <img src="/images/accountant.jpeg" alt="img" />
              <p>Accountant</p>
            </div>
          </div>
        </div>
      </div>
      {/* <SecondHomeSection /> */}
    </div>
  );
};

export default Home;
