import React from "react";
import "./ChosenExtraServ.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const BootstrapButton = styled(Button)({
  borderColor: "#807e7e",
  boxShadow: "inset 0 0 0 2.5px #807e7e",
  textTransform: "none",
  fontSize: 20,
  backgroundColor: "#0063cc",
  color: "#450505",
  padding: "15px 22px",
  border: "1px solid",
  lineHeight: 1.5,
  borderRadius: "0px",
  float: "right",
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
    borderColor: "#7e57c2",
    boxShadow: "inset 0 0 0 2.5px #7e57c2",
    transition: "all 0.2s",
    textDecoration: "none",
    color: "#673ab7",
  },
});
const ChosenExtraServ = (props) => {
  console.log(props.chosenService);
  return (
    <>
      {props.chosenService !== undefined && (
        <span className="span-chosen-extra-serv-container">
          <span className="span-chosen-extra-serv">
            <span className="span-chosen-extra-serv-img-container">
              <img src={props.chosenService.extraServImageUrl} />
            </span>
            <span className="span-chosen-extra-serv-text-container">
              <h5>Выбранная услуга: {props.chosenService.extraServName}</h5>

              <h4> Итог:&nbsp;{props.chosenService.extraServCost}&nbsp;₽</h4>
            </span>
          </span>
          <span className="span-chosen-extra-serv-button-container">
            <Link className="span-chosen-extra-serv-link">
              <BootstrapButton className="span-chosen-extra-serv-button">
                Продолжить
              </BootstrapButton>
            </Link>
          </span>
        </span>
      )}
    </>
  );
};

export default ChosenExtraServ;
