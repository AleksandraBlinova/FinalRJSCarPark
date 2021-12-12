import { Button } from "bootstrap";
import React, { useState } from "react";
import Video from "../../../video/04_configurator_promo1280x720px.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
  ArrowForward,
  ArrowRight,
} from "./VideoElements";
import { ButtonHome } from "../../../components/BtnHome/ButtonHome";

const VideoConfig = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>ПУСТЬ ВСЕ БУДЕТ ПО-ВАШЕМУ</HeroH1>
        <HeroP>
          Создайте свой идеальный автомобиль из огромного набора опций
          конфигуратора Mazda
        </HeroP>
        <HeroBtn>
          <ButtonHome to="#" onMouseEnter={onHover} onMouseLeave={onHover}>
            Конфигуратор{hover ? <ArrowForward /> : <ArrowRight />}
          </ButtonHome>
        </HeroBtn>
      </HeroContent>
    </HeroContainer>
  );
};
export default VideoConfig;
