import React, { useState } from "react";
import { ArrowForward, ArrowRight } from "./HundredyearsElements";
import { ButtonHome } from "../../../components/BtnHome/ButtonHome";
import "./HundredYears.css";

import Image from "./hundredImage/100th_logo_positive.png";

const HundredyearsConfig = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <div className="hundred-container">
      <img src={Image} className="hundred-image" />
      <p className="hundred-text">
        30 января 2020 года Mazda отпраздновала свой столетний юбилей. Узнайте
        больше о легендарных автомобилях и людях, их создавших. Поделитесь своей
        историей с Mazda и познакомьтесь с историями других владельцев.
      </p>
      <div className="hundred-btns">
        <ButtonHome
          className="hundred-btn"
          to="#"
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          primary={true}
          dark={true}
        >
          Узнать больше{hover ? <ArrowForward /> : <ArrowRight />}
        </ButtonHome>
      </div>
    </div>
  );
};
export default HundredyearsConfig;
