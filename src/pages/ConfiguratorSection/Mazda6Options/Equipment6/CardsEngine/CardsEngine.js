import React from "react";
import "./CardsEngine.css";
import { Link } from "react-router-dom";

const CardsEngine = (props) => {
  return (
    <div className="cards-item-engine">
      <div className="cards-item-link-engine">
        <p className="cards-item-type-engine">{props.type}</p>
      </div>
    </div>
  );
};

export default CardsEngine;
