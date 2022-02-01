import React from "react";
import Info from "../AboutCompany/Info";
import "./index.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import ImageSlider from "../CaroselHome/ImageSlider";
import VideoConfig from "../../../components/VideoConfig/VideoConfig";
import HundredyearsConfig from "../Hundredyears/Hundredyears";
import EndlessProgress from "../EndlessProgress/EndlessProgress";

import image1 from "../../../imageCarosel/img1.jpg";
import image2 from "../../../imageCarosel/img2.jpg";
import image3 from "../../../imageCarosel/img3.jpg";
import image4 from "../../../imageCarosel/img4.jpg";
import image5 from "../../../imageCarosel/img5.jpg";
import image6 from "../../../imageCarosel/img6.jpg";

const Home = () => {
  return (
    <>
      <ImageSlider images={[image1, image2, image3, image4, image5, image6]} />
      <Info />
      <EndlessProgress />
      <VideoConfig />
      <HundredyearsConfig />

      <NewFooter />
    </>
  );
};

export default Home;
