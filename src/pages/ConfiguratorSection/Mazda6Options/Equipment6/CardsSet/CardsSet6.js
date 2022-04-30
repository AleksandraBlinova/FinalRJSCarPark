import React, { useState } from "react";
import "./CardsSet.css";
import { Link } from "react-router-dom";
import ButtonsForCardsSets from "../../../../../components/ButtonsForCardsSets/ButtonsForCardsSets";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  "&:active": {},
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,0,0,.5)",
  },
});
const CardsSet6 = (props) => {
  return (
    <>
      {" "}
      <StyledButton
        className="set-cards-item"
        onClick={() => {
          props.handleChangeEquipment(props.chosenEquipmentCar);
          props.handleClick();
        }}
      >
        <div className="set-cards-item-link">
          {props.isShown === true &&
            props.chosen !== 0 &&
            props.text === "DRIVE" && (
              <ButtonsForCardsSets
                pathInterior="/mazda6interiordrive"
                pathExterior="/mazda6exterior"
              />
            )}
          {props.isShown === true &&
            props.chosen !== 0 &&
            props.text === "ACTIVE" && (
              <ButtonsForCardsSets
                pathInterior="/mazda6interioractive"
                pathExterior="/mazda6exterior"
              />
            )}
          {props.isShown === true &&
            props.chosen !== 0 &&
            props.text === "SUPREME PLUS" && (
              <ButtonsForCardsSets
                pathInterior="/mazda6interiorsupremeplus"
                pathExterior="/mazda6exterior"
              />
            )}
          <img className="set-cards-item-img" src={props.src} />

          <div className="set-cards-item-info">
            <h5 className="set-cards-item-text"> {props.text}</h5>
            <p className="set-cards-item-type">{props.type}</p>
            <p className="set-cards-item-price">{props.price}</p>
          </div>

          <div className="set-cards-item-more-container">
            <Link
              className="set-cards-item-more"
              to={{ pathname: props.path, propsSearch: props.number }}
            >
              ПОДРОБНО
            </Link>
          </div>
        </div>
      </StyledButton>
    </>
  );
};

export default CardsSet6;
