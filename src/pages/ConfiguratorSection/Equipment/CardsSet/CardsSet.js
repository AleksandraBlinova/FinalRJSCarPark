import React from "react";
import "./CardsSet.css";
import { Link } from "react-router-dom";

const CardsSet = (props) => {
  return (
    <div className="set-cards-item">
      <div className="set-cards-item-link">
        <img className="set-cards-item-img" src={props.src} />
        <div className="set-cards-item-info">
          <h5 className="set-cards-item-text"> {props.text}</h5>
          <p className="set-cards-item-type">{props.type}</p>
          <p className="set-cards-item-price">{props.price}</p>
        </div>

        <div className="set-cards-item-more-container">
          <Link className="set-cards-item-more" to={props.path}>
            ПОДРОБНО
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsSet;
