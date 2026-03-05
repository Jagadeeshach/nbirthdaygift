import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import "../../css/Achievements.css";
import "swiper/css";

const Achievements = () => {
  return (
    <div className="container-format achievements-section-head">
      <p className="achievements-section-title">
        Achieve<span>ments</span>
      </p>
      <div className="achievements-section-sub-head">
        <div className="a-c-firstbox">
          <Swiper spaceBetween={20} slidesPerView={1} className="swipper-box">
            <MdArrowBackIosNew className="left-arrow" />
            <MdArrowForwardIos className="right-arrow" />
            <SwiperSlide className="swipper-card">
              <div>
                <img src="/images/nlogo.png" />
                <h4>
                  Hackathon<span>&nbsp;First Place</span>
                </h4>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swipper-card">
              <div>
                <img src="/images/nlogo.png" />
                <h4>
                  UNXT <span>&nbsp;By Unnati</span>
                </h4>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="a-c-secondbox">
          <p>
            Participated in the Soft Skill Development Program conducted by SGBS
            Unnati Foundation. Developed effective communication, interpersonal,
            and teamwork skills through interactive sessions. Enhanced
            confidence in <span>public speaking,</span> presentations, and
            professional interactions. Learned time management,
            <span> leadership qualities,</span> and workplace etiquette. Applied
            these skills to improve personal growth and professional readiness.
          </p>
          <p>
            Secured <span>first place</span> in the <span>Hackathon</span> Group
            Event of the Skill Edge Program 2025. Collaborated with team members
            to conceptualize and present an innovative business idea titled
            <span> Ecolife - A Mobile App for a Sustainable Future.</span>{" "}
            Played an active role in idea development, problem analysis, and
            solution design. Contributed to the team presentation by clearly
            explaining the app&#39;s features, impact, and sustainability goals.
            Demonstrated strong teamwork, communication, and problem-solving
            skills throughout the event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
