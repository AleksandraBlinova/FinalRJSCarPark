import React, { useState } from "react";
import {
  HundredyearsContainer,
  HundredyearsContent,
  HundredyearsImage,
  HundredyearsP,
  HundredyearsBtn,
  ArrowForward,
  ArrowRight,
} from "./HundredyearsElements";
import { ButtonHome } from "../../../components/BtnHome/ButtonHome";

const HundredyearsConfig = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HundredyearsImage>
        <img
          className="d-block w-100"
          src="../homepage/100th_logo_positive.png"
        />
      </HundredyearsImage>
      <HundredyearsContainer>
        <HundredyearsContent>
          <HundredyearsP>
            30 января 2020 года Mazda празднует свой столетний юбилей. Узнайте
            больше о легендарных автомобилях и людях, их создавших. Поделитесь
            своей историей с Mazda и познакомьтесь с историями других
            владельцев.
          </HundredyearsP>
          <HundredyearsBtn>
            <ButtonHome
              to="#"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
            >
              Узнать больше{hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonHome>
          </HundredyearsBtn>
        </HundredyearsContent>
      </HundredyearsContainer>
    </>
  );
};
export default HundredyearsConfig;
