import * as React from "react";
import "./AdditionalInfo.css";
import NumberInfo from "../Numbers/NumberInfo";
import RegionsInfo from "../Regions/RegionsInfo";

export default function AdditionalInfo() {
  return (
    <>
      <div className="contacts__container">
        <div className="contacts__wrapper">
          <ul className="contacts__items">
            <NumberInfo src="../contactspage/detskie-raskraski-russia19.jpg" />
            <NumberInfo src="../contactspage/detskie-raskraski-moscow.jpg" />
          </ul>
          <ul className="contacts__items">
            <RegionsInfo label="ВСЕ РЕГИОНЫ" text="8 800 100 00 70 " />
            <RegionsInfo label="МОСКВА" text="8 495 788 10 01" />
          </ul>
        </div>
      </div>
    </>
  );
}
