import React, { useState } from "react";
import "./ExtraServSet6.css";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)({
  boxShadow: "0 0 0 0.1rem rgba(0,0,0,.2)",
  "&:active": {},
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,0,0,.5)",
  },
});

const ExtraServSet6 = (props) => {
  return (
    <>
      {" "}
      <StyledButton className="set-cards-item-extra-serv">
        <div className="set-cards-item-link-extra-serv">
          <img
            className="set-cards-item-img-extra-serv"
            src={props.e.extraServImageUrl}
          />

          <div className="set-cards-item-info-extra-serv">
            <p className="set-cards-item-text-extra-serv">
              {props.e.extraServName}
            </p>
          </div>
          <div className="set-cards-item-text-extra-serv-price">
            <h5 className="set-cards-item-price-extra-serv">
              {props.e.extraServCost}&nbsp;₽
            </h5>
          </div>
        </div>
      </StyledButton>
    </>
  );
};

export default ExtraServSet6;
