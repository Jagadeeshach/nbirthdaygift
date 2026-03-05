import React from "react";
import "../../css/SecondHomeSection.css";

const SecondHomeSection = () => {
  return (
    <div className="container-format sec-home-head">
      <p className="sec-home-h1">
        About <span>Me</span>
      </p>
      <div className="sec-home-sub-box">
        <div className="sec-home-first-box">
          <p>
            I am <span className="sec-home-nm">Niveditha Priya,</span> a{" "}
            <span>B.Com</span> final year student who has completed 2nd PUC in{" "}
            <span>Commerce.</span> I am a confident <span>anchor</span> and{" "}
            <span>public speaker</span> with strong communication skills and the
            ability to engage diverse audiences. I possess strategic thinking
            skills, along with flexibility and adaptability, which help me
            perform effectively in dynamic environments. I enjoy presenting
            ideas clearly and confidently while contributing{" "}
            <span>innovative</span> thoughts and solutions. With a{" "}
            <span>positive mindset</span> and a passion for learning, I aim to
            apply my academic knowledge, <span>communication strengths,</span>{" "}
            and <span>leadership qualities</span> to grow professionally and add
            value to any organization.
          </p>
        </div>

        <div className="sec-home-second-box">
          <img src="../../../public/images/abtme.png" alt="abtimg" />
        </div>
      </div>
      <div className="sec-home-course">
        <div className="sec-home-couse-box">
          <div style={{ "--i": 0 }}>
            <span>
              <b>B.</b>
            </span>
          </div>
          <div style={{ "--i": 1 }}>
            <span>
              <b>C</b>
            </span>
          </div>
          <div style={{ "--i": 2 }}>
            <span>
              <b>O</b>
            </span>
          </div>
          <div style={{ "--i": 3 }}>
            <span>
              <b>M</b>
            </span>
          </div>
        </div>
        <div className="sec-home-couse-box">
          <div style={{ "--i": 0 }}></div>
          <div style={{ "--i": 1 }}></div>
          <div style={{ "--i": 2 }}></div>
          <div style={{ "--i": 3 }}></div>
        </div>
      </div>
    </div>
  );
};

export default SecondHomeSection;
