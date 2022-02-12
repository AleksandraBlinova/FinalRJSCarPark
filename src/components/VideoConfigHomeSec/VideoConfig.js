import React, { useState } from "react";
import { ButtonHome } from "../BtnHome/ButtonHome";
import "./VideoConfig.css";
import Video from "../../video/04_configurator_promo1280x720px.mp4";
import { ArrowForward, ArrowRight } from "./Button";
import ConfMain from "../../pages/ConfiguratorSection/ConfMain/ConfMain";

function VideoConfig() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="hero-container">
      <video src={Video} className="video-bg" autoPlay loop muted />

      <p>
        Создайте свой идеальный автомобиль из огромного набора опций
        конфигуратора Mazda
      </p>
      <div className="hero-btns">
        <ButtonHome
          to="#"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={true}
          dark={true}
        >
          Конфигуратор{hover ? <ArrowForward /> : <ArrowRight />}
        </ButtonHome>
      </div>
    </div>
  );
}

export default VideoConfig;
