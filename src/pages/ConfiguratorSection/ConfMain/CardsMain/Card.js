import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import Mazda6OptionsMain from "../../Mazda6Options/Mazda6OptionsMain";

const Card = (props) => {
  console.log("dfdf", props.path);
  return (
    <div className="cards-item">
      <Link className="cards-item-link" to={props.path}>
        <div className="cards-item-info">
          <h5 className="cards-item-text"> {props.text}</h5>
          <p className="cards-item-type">{props.type}</p>
        </div>

        <img className="cards-item-img" src={props.src} />

        <div className="cards-item-price-container">
          <p className="cards-item-price">{props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
