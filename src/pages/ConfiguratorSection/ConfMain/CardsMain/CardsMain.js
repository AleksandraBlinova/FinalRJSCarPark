import React from "react";
import "./CardsMain.css";
import Card from "./Card";

const CardsMain = () => {
  return (
    <div className="cards-main-container">
      <Card
        src="../configurator/main-cards/m6_new.png"
        text="MAZDA 6"
        path=""
        type="Седан"
        price="от 1 843 000 ₽"
      />
      <Card
        src="../configurator/main-cards/cx-5_2020_blue.png"
        text="MAZDA CX-5"
        path=""
        type="Кроссовер"
        price="от 1 919 000 ₽"
      />

      <Card
        src="../configurator/main-cards/mcx9.png"
        text="MAZDA CX-9"
        path=""
        type="Кроссовер"
        price="от 3 310 000 ₽"
      />
    </div>
  );
};

export default CardsMain;
