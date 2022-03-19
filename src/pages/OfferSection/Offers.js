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
              path="https://www.mazda.ru/all-offers/mazda-v-kredit-ot/"
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
              text="КРЕДИТ ДЛЯ ЛОЯЛЬНЫХ КЛИЕНТОВ"
              label="Подробнее"
              path="https://www.mazda.ru/all-offers/credit-for-loyal/"
            />
            <OfferSection
              src="/noir/1noir_triple_hero_1800x900_update.jpg"
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
