import React from 'react';
import { TbBusinessplan } from "react-icons/tb";
import { IoMdMegaphone } from "react-icons/io";
import { FcBusinesswoman } from "react-icons/fc";
import { FaUserTie } from "react-icons/fa";
import "../../css/ThirdHomeSection.css";

const ThirdHomeSection = () => {
  return (
    <div className="container-format third-home-head">
        <p className="third-home-heading">Go<span>als</span></p>
        <div className="third-home-sub-head">
            <div className="third-home-first-box">
                <div className="third-home-glass" style={{"--r":-15}} data-text="Data Analyst">
                  <TbBusinessplan className="icons"/>
                </div>
                <div className="third-home-glass" style={{"--r": 5}} data-text="Digital Marketer">
                  <IoMdMegaphone className="icons"/>
                </div>
                <div className="third-home-glass" style={{"--r": 25}} data-text="Consultant">
                  <FaUserTie className="icons"/>
                </div>
                <div className="third-home-glass" style={{"--r":-15}} data-text="H R">
                  <FcBusinesswoman className="icons"/>
                </div>
            </div>

            <div className="third-home-second-box">
                <p>
                  <b className="aspan">A</b><span>B.Com</span> student aiming to build a technically strong career by integrating business knowledge with <span>data analysis</span> and modern digital tools.
                  Focused on understanding <span>business processes,</span> <span>systems,</span> and <span>technology-driven</span> solutions.
                  Skilled in <span>anchoring</span> and <span>public speaking</span> to confidently present ideas, insights, and reports.
                  Aspires to bridge the gap between technical teams and business stakeholders.
                  Committed to continuous learning and delivering impactful, <span>data-driven</span> decisions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ThirdHomeSection
