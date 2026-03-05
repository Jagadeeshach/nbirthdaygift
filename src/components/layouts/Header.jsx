import React from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";

const Header = () => {
  return (
    <div className="head-container container-format">
      <div className="first-box">
        <Link to="/">
          <img src="/images/nlogo.png" alt="nlogo" />
        </Link>
      </div>
      <ul className="second-box">
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
      <ul className="mob-second-box">
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
  );
};

export default Header;
