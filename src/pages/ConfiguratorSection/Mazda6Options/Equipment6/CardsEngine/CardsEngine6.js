import React, { useState } from "react";
import "./CardsEngine6.css";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  borderRadius: "0px",

  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#807e7e",
    boxShadow: "inset 0 0 0 2.5px #807e7e",
    transition: "all 0.2s",
    textDecoration: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fff",
    borderColor: "#807e7e",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,0,0,.5)",
  },
});

const ButtonToggle = styled(BootstrapButton)`
  opacity: 0.7;
  box-shadow: inset 0 0 0 1px #d5d5d5;

  ${({ active }) =>
    active &&
    `
    opacity: 1;
    box-shadow: 0 0 0 0.2rem rgba(0,0,0,.5);
   
  
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;

function CardsEngine6(props) {
  return (
    <ButtonGroup>
      {props.types.map((type) => (
        <div className="cards-item-engine-6">
          <ButtonToggle
            className="cards-item-link-engine-6"
            key={type}
            active={props.active === type}
            onClick={() => props.setActive(type)}
            sx={{ color: "#fff" }}
          >
            <p className="cards-item-type-engine-6">{type}</p>
          </ButtonToggle>
        </div>
      ))}
    </ButtonGroup>
  );
}

export default CardsEngine6;
