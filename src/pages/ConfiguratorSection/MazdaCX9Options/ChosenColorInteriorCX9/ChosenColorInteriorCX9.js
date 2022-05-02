import React from "react";
import "./ChosenColorInteriorCX9.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";

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
const ChosenColorInteriorCX9 = (props) => {
  return (
    <>
      {props.chosenColorInterior !== undefined && (
        <span className="span-chosen-color-interior-container">
          <span className="span-chosen-color-interior">
            <span className="span-chosen-color-interior-text-container">
              <h5>
                Выбранный цвет интерьера:{" "}
                {props.chosenColorInterior.colorInterior1}
              </h5>
              <div className="span-chosen-color-interior-img-container">
                <Fab
                  style={{
                    background: props.chosenColorInterior.colorInteriorView,
                  }}
                  size="small"
                />
              </div>
            </span>
          </span>
          <span className="span-chosen-color-interior-button-container"></span>
        </span>
      )}
    </>
  );
};

export default ChosenColorInteriorCX9;
