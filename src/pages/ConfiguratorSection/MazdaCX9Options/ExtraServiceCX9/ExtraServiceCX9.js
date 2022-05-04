import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./ExtraServiceCX9.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import ExtraServSetCX9 from "../ExtraServSetCX9/ExtraServSetCX9";
import axios from "axios";
import ChosenExtraServ from "../../Mazda6Options/ChosenExtraServ/ChosenExtraServ";
import ChosenEquipCX9 from "../EquipmentCX9/ChosenEquipCX9/ChosenEquipCX9";
import ChosenColorInteriorCX9 from "../ChosenColorInteriorCX9/ChosenColorInteriorCX9";
import ChosenColorExteriorCX9 from "../ChosenColorExteriorCX9/ChosenColorExteriorCX9";
import { ClickAwayListener } from "@mui/material";

const ExtraServiceCX9 = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  const [extraServices, setExtraServices] = useState();
  const [loadFlagextraServices, setloadFlagExtraServices] = useState(false);
  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/extraservices/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setExtraServices(
          response.data.filter((m) => m.modelId == 3).map((e) => e.extraServ)
        );
        setloadFlagExtraServices(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [chosenService, setChosenService] = useState();
  const handleChangeChosenService = (newValue) => {
    setChosenService(newValue);
  };
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  function handleClickAway() {
    setOpen(false);
  }

  return (
    <>
      <div className="mazda6-extra-serv-main-container-cx9">
        <div className="mazda6-extra-serv-link-h2-container">
          <Link to="/mazdacx9config" className="mazda6-extra-serv-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДОПОЛНИТЕЛЬНУЮ УСЛУГУ</h2>
        </div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="main-container-set-cards-extra-serv">
            {loadFlagextraServices &&
              extraServices.map((e) => (
                <ExtraServSetCX9
                  e={e}
                  handleChangeChosenService={handleChangeChosenService}
                  handleClick={handleClick}
                />
              ))}
          </div>
        </ClickAwayListener>
        <div className="total-choice">
          {props.location.propsSearch !== undefined && (
            <ChosenColorExteriorCX9
              chosenColorExterior={props.location.propsSearch}
            />
          )}

          {props.location.component !== undefined && (
            <ChosenColorInteriorCX9
              chosenColorInterior={props.location.component}
            />
          )}

          {chosenService !== undefined && open ? (
            <ChosenExtraServ chosenService={chosenService} />
          ) : (
            <ChosenExtraServ chosenService="без выбора дополнительной услуги" />
          )}
          {props.location.params !== undefined && (
            <ChosenEquipCX9
              chosenEquipmentCar={props.location.params}
              chosenColorExterior={props.location.propsSearch}
              chosenColorInterior={props.location.component}
              chosenService={chosenService}
            />
          )}
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default ExtraServiceCX9;
