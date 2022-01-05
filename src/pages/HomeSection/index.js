import React from "react";
import Info from "./Info";
import "./index.css";
import Footer from "./Footer";
import CaroselHome from "./CaroselHome/CaroselHome";
import VideoConfig from "./VideoConfig/VideoConfig";
import HundredyearsConfig from "./Hundredyears/Hundredyears";
const Home = () => {
  return (
    <>
      <CaroselHome />
      <Info />
      <VideoConfig />
      <HundredyearsConfig />
      <Footer />
    </>
  );
};

export default Home;
