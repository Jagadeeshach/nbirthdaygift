import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <div className="footer-head container-format">
      <div className="footer-sub-box">
        <div className="footer-first-box">
          <p className="footer-first-box-title">
            Nav<span>igation</span>
          </p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/page-about">About</Link>
            </li>
            <li>
              <Link to="/pages/page-goals">Goals</Link>
            </li>
            <li>
              <Link to="/pages/page-scores">Scores</Link>
            </li>
            <li>
              <Link to="/pages/page-achievements">Achievements</Link>
            </li>
          </ul>
        </div>
        <div className="footer-second-box">
          <p className="footer-sec-title">
            My <span>Skills</span>
          </p>
          <ul>
            <li>
              <Link to="/pages/page-scores">Financial Accounting</Link>
            </li>
            <li>
              <Link to="/pages/page-scores">Advanced Financial Accounting</Link>
            </li>
            <li>
              <Link to="/pages/page-scores">Corporate Accounting</Link>
            </li>
            <li>
              <Link to="/pages/page-scores">Advanced Corporate Accounting</Link>
            </li>
            <li>
              <Link to="/pages/page-scores">Cost Accounting</Link>
            </li>
            <li>
              <Link to="/pages/page-scores">
                Costing Methods and Techniques
              </Link>
            </li>
            <li>
              <Link to="/pages/page-scores">Business Statistics</Link>
            </li>
            <li>
              <Link to="/pages/page-scores">Business Mathematics</Link>
            </li>
          </ul>
        </div>
        <div className="footer-third-box">
          <p className="footer-trd-title">
            Write Your <span> Message</span>
          </p>
          <form className="footer-form-head">
            <input type="email" placeholder="Your email" />
            <input type="text" placeholder="Topic" />
            <textarea placeholder="Describe your topic" className="txtarea" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
