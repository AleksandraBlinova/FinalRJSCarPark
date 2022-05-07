import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./ExtraService6.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import ExtraServSet6 from "../ExtraServSet6/ExtraServSet6";
import axios from "axios";
import ChosenExtraServ from "../ChosenExtraServ/ChosenExtraServ";
import ChosenColorExterior from "../ChosenColorExterior/ChosenColorExterior";
import ChosenColorInterior from "../ChosenColorInterior/ChosenColorInterior";
import ChosenEquipment from "../Equipment6/ChosenEquipment/ChosenEquipment";
import { ClickAwayListener } from "@mui/material";

const ExtraService6 = (props) => {
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
          response.data
            .filter((m) => m.modelId == 1 && m.extraServ.id !== 14)
            .map((e) => e.extraServ)
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

  const [pathnameForExtraServ, setPathnameForExtraServ] = useState(
    "/mazda6FinalEquipForApplic"
  );
  return (
    <>
      <div className="mazda6-extra-serv-main-container">
        <div className="mazda6-extra-serv-link-h2-container">
          <Link to="/mazda6config" className="mazda6-extra-serv-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДОПОЛНИТЕЛЬНУЮ УСЛУГУ</h2>
        </div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="main-container-set-cards-extra-serv">
            {loadFlagextraServices &&
              extraServices.map((e) => (
                <ExtraServSet6
                  e={e}
                  handleChangeChosenService={handleChangeChosenService}
                  handleClick={handleClick}
                />
              ))}
          </div>
        </ClickAwayListener>
        <div className="total-choice">
          {props.location.propsSearch !== undefined && (
            <ChosenColorExterior
              chosenColorExterior={props.location.propsSearch}
            />
          )}

          {props.location.component !== undefined && (
            <ChosenColorInterior
              chosenColorInterior={props.location.component}
            />
          )}

          {chosenService !== undefined && open ? (
            <ChosenExtraServ chosenService={chosenService} />
          ) : (
            <ChosenExtraServ chosenService="без выбора дополнительной услуги" />
          )}
          {props.location.params !== undefined && (
            <ChosenEquipment
              chosenEquipmentCar={props.location.params}
              chosenColorExterior={props.location.propsSearch}
              chosenColorInterior={props.location.component}
              chosenService={chosenService}
              pathnameForExtraServ={pathnameForExtraServ}
            />
          )}
        </div>
      </div>

      <NewFooter />
    </>
  );
};

export default ExtraService6;
