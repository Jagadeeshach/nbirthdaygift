import react from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layouts/Header.jsx";
import Footer from "./components/layouts/Footer.jsx";
// import Home from "./components/pages/Home.jsx";
import Goals from "./components/pages/ThirdHomeSection.jsx";
import About from "./components/pages/SecondHomeSection.jsx";
import Achievements from "./components/pages/Achievements.jsx";
import SubjectScores from "./components/pages/FourthHomeSection.jsx";
import HomeHead from "./components/pages/HomeHead.jsx";
import SpaceHead from "./components/pages/SpaceAdd.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <SpaceHead />
        <Routes>
          <Route path="/" element={<HomeHead />} />
          <Route path="/pages/page-goals" element={<Goals />} />
          <Route path="/pages/page-scores" element={<SubjectScores />} />
          <Route path="/pages/page-about" element={<About />} />
          <Route path="/pages/page-achievements" element={<Achievements />} />
          <Route path="*" element={<HomeHead />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
