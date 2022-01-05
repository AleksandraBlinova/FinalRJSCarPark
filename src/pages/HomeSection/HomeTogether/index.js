import React from "react";
import Info from "../AboutCompany/Info";
import "./index.css";
import Footer from "../../../components/Footer/Footer";
import CaroselHome from "../CaroselHome/CaroselHome";
import VideoConfig from "../VideoConfig/VideoConfig";
import HundredyearsConfig from "../Hundredyears/Hundredyears";
import EndlessProgress from "../EndlessProgress/EndlessProgress";
const Home = () => {
  return (
    <>
      <CaroselHome />
      <Info />
      <EndlessProgress />
      <VideoConfig />
      <HundredyearsConfig />
      <Footer />
    </>
  );
};

export default Home;
