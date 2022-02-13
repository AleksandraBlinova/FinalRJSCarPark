import React, { useState } from "react";
import "./VideoConfig.css";
import Video from "../../video/04_configurator_promo1280x720px.mp4";
import { ArrowForward, ArrowRight } from "./Button";
import { Link } from "react-router-dom";

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
        <Link
          onMouseEnter={onHover}
          onMouseLeave={onHover}
          to="/configurator"
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
          Конфигуратор{hover ? <ArrowForward /> : <ArrowRight />}
        </Link>
      </div>
    </div>
  );
}

export default VideoConfig;
