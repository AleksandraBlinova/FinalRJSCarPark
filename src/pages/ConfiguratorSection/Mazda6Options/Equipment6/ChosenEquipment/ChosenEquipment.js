import React from "react";
import "./ChosenEquipment.css";
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
const ChosenEquipment = (props) => {
  return (
    <>
      {props.chosenEquipmentCar !== undefined && (
        <span className="span-chosen-equip-container">
          <span className="span-chosen-equip">
            <span className="span-chosen-equip-img-container">
              <img src="../configurator/main-cards/mazda6_soul-red_gcaf901.png" />
            </span>
            <span className="span-chosen-equip-text-container">
              <h5>Выбранный пакет: Пакет {props.chosenEquipmentCar.id}</h5>

              <h6>
                Mazda 6 &nbsp;
                {props.chosenEquipmentCar.grade.grade1}
              </h6>
              {props.chosenService == undefined &&
                props.chosenColorExterior !== undefined &&
                props.chosenColorInterior == undefined && (
                  <h4>
                    Общий итог:&nbsp;
                    {props.chosenEquipmentCar.cost +
                      props.chosenColorExterior.colorExtraCost}
                    &nbsp;₽
                  </h4>
                )}

              {props.chosenService == undefined &&
                props.chosenColorExterior == undefined &&
                props.chosenColorInterior !== undefined && (
                  <h4>
                    {" "}
                    Общий итог:&nbsp;{props.chosenEquipmentCar.cost}&nbsp;₽
                  </h4>
                )}

              {props.chosenService == undefined &&
                props.chosenColorExterior == undefined &&
                props.chosenColorInterior == undefined && (
                  <h4>
                    {" "}
                    Общий итог:&nbsp;{props.chosenEquipmentCar.cost}&nbsp;₽
                  </h4>
                )}

              {props.chosenService !== undefined &&
                props.chosenColorExterior !== undefined &&
                props.chosenColorInterior !== undefined && (
                  <h4>
                    {" "}
                    Общий итог:&nbsp;
                    {props.chosenEquipmentCar.cost +
                      props.chosenColorExterior.colorExtraCost +
                      props.chosenService.extraServCost}
                    &nbsp;₽
                  </h4>
                )}

              {props.chosenService == undefined &&
                props.chosenColorExterior !== undefined &&
                props.chosenColorInterior !== undefined && (
                  <h4>
                    {" "}
                    Общий итог:&nbsp;
                    {props.chosenEquipmentCar.cost +
                      props.chosenColorExterior.colorExtraCost}
                    &nbsp;₽
                  </h4>
                )}
            </span>
          </span>
          <span className="span-chosen-equip-button-container">
            {props.chosenEquipmentCar !== undefined &&
              props.chosenColorExterior !== undefined &&
              props.chosenColorInterior !== undefined && (
                <Link
                  to={{
                    pathname: props.pathnameForExtraServ,
                    params: props.chosenEquipmentCar,
                    component: props.chosenColorInterior,
                    propsSearch: props.chosenColorExterior,
                    query: props.chosenService,
                  }}
                  className="span-chosen-equip-link"
                >
                  <BootstrapButton className="span-chosen-equip-button">
                    Продолжить
                  </BootstrapButton>
                </Link>
              )}
          </span>
        </span>
      )}
    </>
  );
};

export default ChosenEquipment;
