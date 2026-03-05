import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../../css/FourthHomeSection.css";
import { FaShareNodes, FaLinkedin, FaPinterest } from "react-icons/fa6";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaYoutube,
  FaBookReader,
} from "react-icons/fa";

const FourthHome = () => {
  const menuFSRef = useRef(null);
  const menuSSRef = useRef(null);
  const menuTSRef = useRef(null);
  const menuFRSRef = useRef(null);

  const handleFSClick = () => {
    menuFSRef.current.classList.toggle("active");
  };

  const handleSSClick = () => {
    menuSSRef.current.classList.toggle("active");
  };

  const handleTSClick = () => {
    menuTSRef.current.classList.toggle("active");
  };

  const handleFRSClick = () => {
    menuFRSRef.current.classList.toggle("active");
  };

  return (
    <div className="container-format fourth-home-head">
      <p className="fourth-home-headline">
        Scores A<span>nd Subjects</span>
      </p>
      <div className="fourth-home-sub-box">
        <div className="fourth-home-sembox">
          <div className="fourth-home-menu" ref={menuFSRef}>
            <div className="fourth-home-toggle" onClick={handleFSClick}>
              <FaBookReader />
              <p className="semmhead">1 Sem</p>
            </div>
            <li style={{ "--i": 0, "--clr": "rgba(158, 247, 255, 1)" }}>
              <Link to="/pages/page-scores">
                <p>Human Rights</p>
              </Link>
            </li>
            <li style={{ "--i": 1, "--clr": "#25d366" }}>
              <Link to="/pages/page-scores">
                <p>Financial Accounting</p>
              </Link>
            </li>
            <li style={{ "--i": 2, "--clr": "#1da1f2" }}>
              <Link to="/pages/page-scores">
                <p>Management Principles and Applications</p>
              </Link>
            </li>
            <li style={{ "--i": 3, "--clr": "#ea4c89" }}>
              <Link to="/pages/page-scores">
                <p>Principles of Marketing</p>
              </Link>
            </li>
            <li style={{ "--i": 4, "--clr": "#0a66c2" }}>
              <Link to="/pages/page-scores">
                <p>Generic English</p>
              </Link>
            </li>
            <li style={{ "--i": 5, "--clr": "#c32aa3" }}>
              <Link to="/pages/page-scores">
                <p>Kannada</p>
              </Link>
            </li>
            <li style={{ "--i": 6, "--clr": "#bd081c" }}>
              <Link to="/pages/page-scores">
                <p>Digital Fluency</p>
              </Link>
            </li>
            <li style={{ "--i": 7, "--clr": "#ff0000" }}>
              <Link to="/pages/page-scores">
                <p>Health and Wellness</p>
              </Link>
            </li>
          </div>
        </div>

        <div className="fourth-home-sembox">
          <div className="fourth-home-menu" ref={menuSSRef}>
            <div className="fourth-home-toggle" onClick={handleSSClick}>
              <FaBookReader />
              <p className="semmhead">2 Sem</p>
            </div>
            <li style={{ "--i": 0, "--clr": "#1877f2" }}>
              <Link to="/pages/page-scores">
                <p>Monetary Economics</p>
              </Link>
            </li>
            <li style={{ "--i": 1, "--clr": "#25d366" }}>
              <Link to="/pages/page-scores">
                <p>Advanced Financial Accounting</p>
              </Link>
            </li>
            <li style={{ "--i": 2, "--clr": "#1da1f2" }}>
              <Link to="/pages/page-scores">
                <p>Business Mathematics</p>
              </Link>
            </li>
            <li style={{ "--i": 3, "--clr": "#ea4c89" }}>
              <Link to="/pages/page-scores">
                <p>Law and Practice of Banking</p>
              </Link>
            </li>
            <li style={{ "--i": 4, "--clr": "#0a66c2" }}>
              <Link to="/pages/page-scores">
                <p>Generic English</p>
              </Link>
            </li>
            <li style={{ "--i": 5, "--clr": "#c32aa3" }}>
              <Link to="/pages/page-scores">
                <p>Kannada</p>
              </Link>
            </li>
            <li style={{ "--i": 6, "--clr": "#bd081c" }}>
              <Link to="/pages/page-scores">
                <p className="pp">Environmental Studies</p>
              </Link>
            </li>
            <li style={{ "--i": 7, "--clr": "#ff0000" }}>
              <Link to="/pages/page-scores">
                <p>NSS</p>
              </Link>
            </li>
          </div>
        </div>

        <div className="fourth-home-sembox">
          <div className="fourth-home-menu" ref={menuTSRef}>
            <div className="fourth-home-toggle" onClick={handleTSClick}>
              <FaBookReader />
              <p className="semmhead">3 Sem</p>
            </div>
            <li style={{ "--i": 0, "--clr": "#1877f2" }}>
              <Link to="/pages/page-scores">
                <p className="pp">
                  Freedom Movement in Karnataka (1800 - 1947)
                </p>
              </Link>
            </li>
            <li style={{ "--i": 1, "--clr": "#25d366" }}>
              <Link to="/pages/page-scores">
                <p>Corporate Accounting</p>
              </Link>
            </li>
            <li style={{ "--i": 2, "--clr": "#1da1f2" }}>
              <Link to="/pages/page-scores">
                <p>Business Statistics</p>
              </Link>
            </li>
            <li style={{ "--i": 3, "--clr": "#ea4c89" }}>
              <Link to="/pages/page-scores">
                <p>Cost Accounting</p>
              </Link>
            </li>
            <li style={{ "--i": 4, "--clr": "#0a66c2" }}>
              <Link to="/pages/page-scores">
                <p>Generic English</p>
              </Link>
            </li>
            <li style={{ "--i": 5, "--clr": "#c32aa3" }}>
              <Link to="/pages/page-scores">
                <p>Kannada</p>
              </Link>
            </li>
            <li style={{ "--i": 6, "--clr": "#bd081c" }}>
              <Link to="/pages/page-scores">
                <p className="pp">Financial Education & Investment Awareness</p>
              </Link>
            </li>
            <li style={{ "--i": 7, "--clr": "#ff0000" }}>
              <Link to="/pages/page-scores">
                <p>NSS</p>
              </Link>
            </li>
          </div>
        </div>

        <div className="fourth-home-sembox">
          <div className="fourth-home-menu" ref={menuFRSRef}>
            <div className="fourth-home-toggle" onClick={handleFRSClick}>
              <FaBookReader />
              <p className="semmhead">4 Sem</p>
            </div>
            <li style={{ "--i": 0, "--clr": "#1877f2" }}>
              <Link to="/pages/page-scores">
                <p>Advanced Corporate Accounting</p>
              </Link>
            </li>
            <li style={{ "--i": 1, "--clr": "#25d366" }}>
              <Link to="/pages/page-scores">
                <p>Costing Methods and Techniques</p>
              </Link>
            </li>
            <li style={{ "--i": 2, "--clr": "#1da1f2" }}>
              <Link to="/pages/page-scores">
                <p>Business Regulatory Framework</p>
              </Link>
            </li>
            <li style={{ "--i": 3, "--clr": "#ea4c89" }}>
              <Link to="/pages/page-scores">
                <p>Generic English</p>
              </Link>
            </li>
            <li style={{ "--i": 4, "--clr": "#0a66c2" }}>
              <Link to="/pages/page-scores">
                <p>Kannada</p>
              </Link>
            </li>
            <li style={{ "--i": 5, "--clr": "#c32aa3" }}>
              <Link to="/pages/page-scores">
                <p>India and Indian Constitution</p>
              </Link>
            </li>
            <li style={{ "--i": 6, "--clr": "#bd081c" }}>
              <Link to="/pages/page-scores">
                <p>Cyber Security</p>
              </Link>
            </li>
            <li style={{ "--i": 7, "--clr": "#ff0000" }}>
              <Link to="/pages/page-scores">
                <p>NSS</p>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthHome;
