import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mazda6OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine from "../Equipment/CardsEngine/CardsEngine";
import CardsSet from "../Equipment/CardsSet/CardsSet";

const Mazda6OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="mazda6-options-main-container">
        <div className="mazda6-options-link-h2-container">
          <Link to="/configurator" className="mazda6-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДВИГАТЕЛЬ, КОМПЛЕКТАЦИЮ И ПАКЕТ</h2>
        </div>
        <div className="main-container-engine-cards">
          <CardsEngine type="2.0 Skyactiv-G (150 л.с.)" />
          <CardsEngine type="2.5 Skyactiv-G (194 л.с.)" />
          <CardsEngine type="2.5 Skyactiv-G (231 л.с.)" />
        </div>
        <div className="main-container-set-cards">
          <CardsSet
            type="AT 6 / 2WD"
            src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
            text="DRIVE"
            price="1 876 000 ₽"
            path="/mazda6equipdetails"
          />
          <CardsSet
            type="AT 6 / 2WD"
            text="ACTIVE"
            price="1 990 000 ₽"
            src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
            path="/mazda6equipdetails"
          />
          <CardsSet
            type="AT 6 / 2WD"
            text="SUPREME PLUS"
            price="2 268 000 ₽"
            src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
            path="/mazda6equipdetails"
          />
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Mazda6OptionsMain;
