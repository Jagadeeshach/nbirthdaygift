import React from "react";
import Home from "./Home.jsx";
import SecondHomeSection from "./SecondHomeSection.jsx";
import ThirdHomeSection from "./ThirdHomeSection.jsx";
import FourthHomeSection from "./FourthHomeSection.jsx";
import FifthHomeSection from "./FifthHomeSection.jsx";
import Achievements from "./Achievements.jsx";

const HomeHead = () => {
  return (
    <>
      <Home />
      <FifthHomeSection />
      <SecondHomeSection />
      <ThirdHomeSection />
      <FourthHomeSection />
      <Achievements />
    </>
  );
};

export default HomeHead;
