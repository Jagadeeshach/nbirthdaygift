import React, { useEffect } from "react";
import "../../css/FifthHomeSection.css";

const FifthHomeSection = () => {
  useEffect(() => {
    const box = document.getElementById("fh-boxx");
    if (!box) return;

    const handleMouseMove = (e) => {
      const rotateY = (e.clientX / window.innerWidth) * 360;
      box.style.transform = `rotateX(-30deg) rotateY(${rotateY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fifth-home-head container-format">
      <p className="fith-home-head-headline">
        My Wo<span>rk Experience</span>
      </p>

      <div className="fifth-home-sub-head">
        <div className="fifth-home-first-box">
          <div>
            <h3>
              Tele Sales <span>Executive</span>
            </h3>
            <h4>
              Allen Career Guidance, <span>Mangalore</span>
            </h4>
            <h5>
              Internship - <span>Jan, 2026</span>
            </h5>
            <p>
              Handled inbound and outbound calls to explain NEET, JEE, and KCET
              courses in detail, guided students and parents by understanding
              their requirements, and clarified doubts related to courses,
              admissions, and fee structures. Followed up with prospective
              students, maintained lead records, achieved enrollment targets,
              and built trust through confident and persuasive communication
            </p>
          </div>

          <div>
            <h3>
              Customer Relationship <span>Executive</span>
            </h3>
            <h4>
              Aduge Mane Restaurant, <span>Mangalore</span>
            </h4>
            <h5>
              Internship - <span>Jan, 2022</span>
            </h5>
            <p>
              Maintained strong customer relationships by welcoming guests,
              understanding their preferences, and ensuring a pleasant dining
              experience at all times. Addressed customer feedback and
              complaints professionally, coordinated with the service team for
              smooth operations, encouraged repeat visits, and supported the
              restaurant in maintaining high service standards.
            </p>
          </div>
        </div>

        <div className="fifth-home-second-box">
          <div id="fh-boxx">
            <div>
              <span>
                <div className="fh-container">
                  <h2>Customer Relationship Executive</h2>
                  <h3>Aduge Mane Restaurant, Mangalore</h3>
                  <p>
                    Builds strong relationships with guests by ensuring
                    exceptional service, handling feedback, and enhancing
                    overall dining experiences through personalized interaction.
                  </p>
                </div>
              </span>

              <span>
                <div className="fh-container">
                  <h2>Tele Sales Executive</h2>
                  <h3>Allen Career Guidance, Mangalore</h3>
                  <p>
                    Handled inbound and outbound calls to explain NEET, JEE, and
                    KCET courses, guiding students and parents and driving
                    enrollments through effective communication.
                  </p>
                </div>
              </span>

              <span>
                <div className="fh-container">
                  <h2>Customer Relationship Executive</h2>
                  <h3>Aduge Mane Restaurant, Mangalore</h3>
                  <p>
                    Builds strong relationships with guests by ensuring
                    exceptional service, handling feedback, and enhancing
                    overall dining experiences through personalized interaction.
                  </p>
                </div>
              </span>

              <span>
                <div className="fh-container">
                  <h2>Tele Sales Executive</h2>
                  <h3>Allen Career Guidance, Mangalore</h3>
                  <p>
                    Handled inbound and outbound calls to explain NEET, JEE, and
                    KCET courses, guiding students and parents and driving
                    enrollments through effective communication.
                  </p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthHomeSection;
