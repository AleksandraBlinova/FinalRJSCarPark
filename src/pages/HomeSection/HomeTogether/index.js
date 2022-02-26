import React from "react";
import Info from "../AboutCompany/Info";
import "./index.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import ImageSlider from "../CaroselHome/ImageSlider";
import VideoConfig from "../../../components/VideoConfigHomeSec/VideoConfig";
import HundredyearsConfig from "../Hundredyears/Hundredyears";
import EndlessProgress from "../EndlessProgress/EndlessProgress";

import image1 from "../../../imageCarosel/img1.jpg";
import image2 from "../../../imageCarosel/img2.jpg";
import image3 from "../../../imageCarosel/img3.jpg";
import image4 from "../../../imageCarosel/img4.jpg";
import image5 from "../../../imageCarosel/img5.jpg";
import image6 from "../../../imageCarosel/img6.jpg";

const Home = () => {
  const images = [
    {
      imageUrl: image1,
      caption: "MAZDA 6",
      doubleCaption: "Страсть и достоинство",
    },
    {
      imageUrl: image2,
      caption: "MAZDA CX-5",
      doubleCaption: "Премиальное качество",
    },
    {
      imageUrl: image3,
      caption: "СПЕЦИАЛЬНАЯ СЕРИЯ NOIR",
      doubleCaption: "Mazda 6, Mazda CX-5 и Mazda CX-9",
    },
    {
      imageUrl: image4,
      caption: "ПО ЦЕНАМ 2022 ГОДА",
      doubleCaption: "Ограниченная партия",
    },
    {
      imageUrl: image5,
      caption: "НОВЫЙ MAZDA CX-9",
      doubleCaption: "Благородное происхождение",
    },
    {
      imageUrl: image6,
      caption: "MAZDA КРЕДИТ ЛАЙТ",
      doubleCaption: "Необыкновенно легкий кредит",
    },
  ];
  return (
    <>
      <ImageSlider images={images} />
      <Info />
      <EndlessProgress />
      <VideoConfig />
      <HundredyearsConfig />

      <NewFooter />
    </>
  );
};

export default Home;
