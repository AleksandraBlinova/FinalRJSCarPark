import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="cards-item">
      <div className="cards-item-link">
        <div className="cards-item-info">
          <h5 className="cards-item-text"> {props.text}</h5>
          <p className="cards-item-type">{props.type}</p>
        </div>

        <img className="cards-item-img" src={props.src} />
        <div className="cards-item-price-container">
          <p className="cards-item-price">{props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
