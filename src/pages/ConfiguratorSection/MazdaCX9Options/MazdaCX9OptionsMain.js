import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MazdaCX9OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine9 from "./EquipmentCX9/CardsEngine/CardsEngine9";
import CardsSet9 from "./EquipmentCX9/CardsSet/CardsSet9";

const MazdaCX9OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="mazdacx9-options-main-container">
        <div className="mazdacx9-options-link-h2-container">
          <Link to="/configurator" className="mazdacx9-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДВИГАТЕЛЬ, КОМПЛЕКТАЦИЮ И ПАКЕТ</h2>
        </div>
        <div className="main-container-engine-cards-cx9">
          <CardsEngine9 type="2.5 Skyactiv-G (231 л.с.)" />
        </div>
        <div className="main-container-set-cards-cx9">
          <CardsSet9
            type="AT 6 / 4WD"
            src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
            text="ACTIVE"
            price="3 335 000 ₽"
            path="/mazdacx9equipdetails"
            number={0}
          />
          <CardsSet9
            type="AT 6 / 4WD"
            text="SUPREME"
            price="3 816 000 ₽"
            src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
            path="/mazdacx9equipdetails"
            number={1}
          />
          <CardsSet9
            type="AT 6 / 4WD"
            text="EXCLUSIVE"
            price="3 955 000 ₽"
            src="../configurator/main-cards/cx-9_machine-grey_tm46903.png"
            path="/mazdacx9equipdetails"
            number={2}
          />
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaCX9OptionsMain;
