import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CoreTeam from "./components/CoreTeam";
import Events from "./components/Events";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="font-sans">
      <Navbar/>
      <HeroSection/>
      <CoreTeam/>
      <Events/>
      <Footer/>
    </div>
  );
};

export default App;