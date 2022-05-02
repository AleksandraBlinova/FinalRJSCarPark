import React from "react";
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

const CardsSet9 = (props) => {
  return (
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
          props.text === "ACTIVE" && (
            <ButtonsForCardsSets
              pathInterior="/mazdacx9interioractive"
              pathExterior="/mazdacx9exterior"
              chosenEquipmentCar={props.chosenEquipmentCar}
            />
          )}
        {props.isShown === true &&
          props.chosen !== 0 &&
          props.text === "EXCLUSIVE" && (
            <ButtonsForCardsSets
              pathInterior="/mazdacx9interiorexclusive"
              pathExterior="/mazdacx9exterior"
              chosenEquipmentCar={props.chosenEquipmentCar}
            />
          )}
        {props.isShown === true &&
          props.chosen !== 0 &&
          props.text === "SUPREME" && (
            <ButtonsForCardsSets
              pathInterior="/mazdacx9interiorsupreme"
              pathExterior="/mazdacx9exterior"
              chosenEquipmentCar={props.chosenEquipmentCar}
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
  );
};

export default CardsSet9;
