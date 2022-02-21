import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MazdaCX5OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine from "./EquipmentCX5/CardsEngine/CardsEngine";
import CardsSet from "./EquipmentCX5/CardsSet/CardsSet";

const MazdaCX5OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="mazdacx5-options-main-container">
        <div className="mazdacx5-options-link-h2-container">
          <Link to="/configurator" className="mazdacx5-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДВИГАТЕЛЬ, КОМПЛЕКТАЦИЮ И ПАКЕТ</h2>
        </div>
        <div className="main-container-engine-cards-cx5">
          <CardsEngine type="2.0 Skyactiv-G (150 л.с.)" />
          <CardsEngine type="2.5 Skyactiv-G (194 л.с.)" />
        </div>
        <div className="main-container-set-cards-cx5">
          <CardsSet
            type="MT 6 / 2WD"
            src="../configurator/main-cards/cx-30_soul-red_dgh1901_turn-min.png"
            text="DRIVE"
            price="1 952 000 ₽"
            path="/mazdacx5equipdetails"
            number={0}
          />
          <CardsSet
            type="AT 6 / 2WD"
            text="ACTIVE"
            price="2 249 000 ₽"
            src="../configurator/main-cards/cx-30_soul-red_dgh1901_turn-min.png"
            path="/mazdacx5equipdetails"
            number={1}
          />
          <CardsSet
            type="AT 6 / 4WD"
            text="ACTIVE"
            price="2 349 000 ₽"
            src="../configurator/main-cards/cx-30_soul-red_dgh1901_turn-min.png"
            path="/mazdacx5equipdetails"
            number={2}
          />
          <CardsSet
            type="AT 6 / 4WD"
            text="SUPREME"
            price="2 573 000 ₽"
            src="../configurator/main-cards/cx-30_soul-red_dgh1901_turn-min.png"
            path="/mazdacx5equipdetails"
            number={3}
          />
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaCX5OptionsMain;
