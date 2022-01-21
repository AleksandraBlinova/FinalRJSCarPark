import * as React from "react";
import "./AdditionalInfo.css";
import NumberInfo from "../Numbers/NumberInfo";
import RegionsInfo from "../Regions/RegionsInfo";

export default function AdditionalInfo() {
  return (
    <>
      <h1 className="title-h1">ПОЗВОНИТЬ</h1>
      <div className="contacts__container">
        <div className="contacts__wrapper">
          <ul className="contacts__items">
            <NumberInfo
              src="../contactspage/detskie-raskraski-russia19.jpg"
              text="8 800 100 00 70 "
              label="ВСЕ РЕГИОНЫ"
            />
            <NumberInfo
              src="../contactspage/detskie-raskraski-moscow.jpg"
              text="8 495 788 10 01"
              label="МОСКВА"
            />
          </ul>
          <ul className="contacts__items">
            <RegionsInfo label="ВСЕ РЕГИОНЫ" />
            <RegionsInfo label="МОСКВА" />
          </ul>
        </div>
      </div>
    </>
  );
}
