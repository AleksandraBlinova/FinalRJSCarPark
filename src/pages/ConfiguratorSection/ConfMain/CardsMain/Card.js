import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Card = (props) => {
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
