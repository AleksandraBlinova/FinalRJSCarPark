import React, { useState } from "react";
import { ArrowForward, ArrowRight } from "./HundredyearsElements";
import { Link } from "react-router-dom";
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
        больше о технологиях, используемых в легендарных автомобилях Mazda.
      </p>
      <div className="hundred-btns">
        <Link
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          to="/technologies"
          style={{
            borderRadius: "50px",
            whiteSpace: "nowrap",
            outline: "none",
            backgroundColor: "#000 ",
            borderColor: "black",
            fontSize: "20px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "white",
            padding: "30px 20px  30px",
            width: "200px",
            height: "60px",
            transition: "all 0.2s ease-in-out",
          }}
        >
          Узнать больше
          {hover ? <ArrowForward /> : <ArrowRight />}
        </Link>
      </div>
    </div>
  );
};
export default HundredyearsConfig;
