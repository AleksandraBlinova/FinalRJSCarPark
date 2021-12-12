import React from "react";
import Info from "./Info";
import "./index.css";
import Footer from "./Footer";
import CaroselHome from "./CaroselHome/CaroselHome";
import VideoConfig from "./VideoConfig/VideoConfig";
const Home = () => {
  return (
    <>
      <CaroselHome />
      <Info />
      <VideoConfig />
      <Footer />
    </>
  );
};

export default Home;
