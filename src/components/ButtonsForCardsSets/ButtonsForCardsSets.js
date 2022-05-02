import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./ButtonsForCardsSets.css";
import { Link } from "react-router-dom";

const ColorButtonForCardsSet = styled(Link)(({ theme }) => ({
  border: "none",
  borderRadius: "3px ",
  width: "120px",
  height: "41px",
  color: "inherit",
  lineHeight: "1",
  fontSize: "14px",
  fontFamily: "inherit",
  padding: "0.75rem ",
  background: "linear-gradient(0deg, #fff 0%, #999999 100%);",
  fontWeight: "500",
  "&:hover": {
    background: "#880000",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "3px ",
  },
  "@media only screen and (max-width: 1260px)": {
    width: "90px",
    height: "30px",
    fontSize: "11px",
    right: "20px",
  },
  "@media only screen and (max-width: 960px)": {
    width: "90px",
    height: "30px",
    fontSize: "11px",
    padding: "0 auto",
  },

  "@media only screen and (max-width: 769px)": {
    width: "80px",
    height: "30px",
    fontSize: "11px",
    padding: "0 auto",
  },
  "@media only screen and (max-width: 651px)": {
    width: "70px",
    height: "30px",
    fontSize: "9px",
    padding: "0 auto",
  },

  "@media only screen and (max-width: 551px)": {
    width: "55px",
    height: "15px",
    fontSize: "6px",
  },
}));

const StackStyled = styled(Stack)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, auto)",
  gridGap: "5px",
  alignItems: "center",
  justifyContent: "center",
}));

const ButtonsForCardsSets = (props) => {
  return (
    <div className="buttons-for-cards-set-container">
      <StackStyled direction="row">
        <ColorButtonForCardsSet
          variant="outlined"
          className="buttons-for-cards-set-link-interior-butt"
          to={{
            pathname: props.pathInterior,
            params: props.chosenEquipmentCar,
            propsSearch: props.chosenColorExterior,
          }}
        >
          ИНТЕРЬЕР
        </ColorButtonForCardsSet>

        <ColorButtonForCardsSet
          variant="outlined"
          className="buttons-for-cards-set-link-exterior-butt"
          to={{
            pathname: props.pathExterior,
            params: props.chosenEquipmentCar,
            component: props.chosenColorInterior,
          }}
        >
          ЭКСТЕРЬЕР
        </ColorButtonForCardsSet>
      </StackStyled>
    </div>
  );
};

export default ButtonsForCardsSets;
