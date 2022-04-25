import React, { useState, useEffect } from "react";
import "./CardsMain.css";
import Card from "./Card";

const CardsMain = (props) => {
  const [modelConfigId, setModelConfigId] = useState();

  return (
    <div className="cards-main-container">
      <div
        style={
          props.disabled && props.status === "crossover"
            ? { pointerEvents: "none", opacity: "0.4" }
            : {}
        }
      >
        <Card
          src="../configurator/main-cards/m6_new.png"
          text="MAZDA 6"
          path="/mazda6config"
          type="Седан"
          price="от 2 548 000 ₽"
        />
      </div>
      <div
        style={
          props.disabled && props.status === "sedan"
            ? { pointerEvents: "none", opacity: "0.4" }
            : {}
        }
      >
        <Card
          src="../configurator/main-cards/cx-5_2020_blue.png"
          text="MAZDA CX-5"
          type="Кроссовер"
          price="от 2 645 000 ₽"
          path="/mazdacx5config"
        />
      </div>
      <div
        style={
          props.disabled && props.status === "sedan"
            ? { pointerEvents: "none", opacity: "0.4" }
            : {}
        }
      >
        <Card
          src="../configurator/main-cards/mcx9.png"
          text="MAZDA CX-9"
          type="Кроссовер"
          price="от 4 585 000 ₽"
          path="/mazdacx9config"
        />
      </div>
    </div>
  );
};

export default CardsMain;
