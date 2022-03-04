import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./ButtonsForCardsSets.css";
import { Link } from "react-router-dom";

const ColorButton = styled(Button)(({ theme }) => ({
  border: "2px solid #101010",
  borderRadius: "3px ",
  width: "120px",
  height: "41px",
  color: "#101010",
  lineHeight: "1",
  fontSize: "14px",
  fontFamily: "inherit",
  padding: "0.75rem 1.25rem",
  backgroundColor: "#fff",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "#880000",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "3px ",
  },
  "@media only screen and (max-width: 1260px)": {
    width: "110px",
    height: "30px",
    fontSize: "11px",
    padding: "0 auto",
    right: "8%",
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
    width: "60px",
    height: "30px",
    fontSize: "11px",
    padding: "0 auto",
  },

  "@media only screen and (max-width: 551px)": {
    width: "20px",
    height: "15px",
    fontSize: "8px",
    padding: "0 auto",
  },
}));

const StackStyled = styled(Stack)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const ButtonsForCardsSets = (props) => {
  return (
    <div className="buttons-for-cards-set-container">
      <StackStyled direction="row">
        <ColorButton
          variant="outlined"
          className="buttons-for-cards-set-link-interior-butt"
          href={props.pathInterior}
        >
          ИНТЕРЬЕР
        </ColorButton>
        <ColorButton
          variant="outlined"
          className="buttons-for-cards-set-link-exterior-butt"
          href={props.pathExterior}
        >
          ЭКСТЕРЬЕР
        </ColorButton>
      </StackStyled>
    </div>
  );
};

export default ButtonsForCardsSets;
