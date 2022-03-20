import React from "react";
import "./Offers.css";
import OfferSection from "./OfferSection";

function Offers() {
  return (
    <div>
      <h1 className="priv">ВЫГОДНЫЕ ПРЕДЛОЖЕНИЯ</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <OfferSection
              src="offer_m6_1800x900.jpg"
              text="MAZDA В КРЕДИТ ОТ 7900. Войдите в мир Mazda с выгодой"
              label="Подробнее"
              path="#"
            />
            <OfferSection
              src="july_1800x900_range.jpg"
              text="MAZDA ТРЕЙД-ИН"
              label="Подробнее"
              path="/tradeIn"
            />
          </ul>
          <ul className="cards__items">
            <OfferSection
              src="all_offers_tradein_1800x900.jpg"
              text="Страхование автомобилей Mazda по разным программам: КАСКО, Mazda Драйв, Mazda Драйв Плюс, Mazda Мини Драйв"
              label="Подробнее"
              path="/insurance"
            />
            <OfferSection
              src="1noir_triple_hero_1800x900_update.jpg"
              text="СПЕЦИАЛЬНАЯ СЕРИЯ NOIR
                MAZDA CX-9, MAZDA 6, MAZDA CX-5"
              label="Подробнее"
              path="/noir"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Offers;
