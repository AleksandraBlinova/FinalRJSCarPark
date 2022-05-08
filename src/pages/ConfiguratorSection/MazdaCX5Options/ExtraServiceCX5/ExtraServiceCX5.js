import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./ExtraServiceCX5.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import ExtraServSetCX5 from "../ExtraServSetCX5/ExtraServSetCX5";
import axios from "axios";
import ChosenExtraServ from "../../Mazda6Options/ChosenExtraServ/ChosenExtraServ";
import { ClickAwayListener } from "@mui/material";
import ChosenColorExteriorCX5 from "../ChosenColorExteriorCX5/ChosenColorExteriorCX5";
import ChosenColorInteriorCX5 from "../ChosenColorInteriorCX5/ChosenColorInteriorCX5";
import ChosenEquipmentCX5 from "../EquipmentCX5/ChosenEquipmentCX5/ChosenEquipmentCX5";

const ExtraServiceCX5 = (props) => {
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
            .filter((m) => m.modelId == 2 && m.extraServ.id !== 14)
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
    "/mazdacx5FinalEquipForApplic"
  );
  return (
    <>
      <div className="mazda6-extra-serv-main-container-cx5">
        <div className="mazda6-extra-serv-link-h2-container">
          <Link to="/mazdacx5config" className="mazda6-extra-serv-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДОПОЛНИТЕЛЬНУЮ УСЛУГУ</h2>
        </div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="main-container-set-cards-extra-serv">
            {loadFlagextraServices &&
              extraServices.map((e) => (
                <ExtraServSetCX5
                  e={e}
                  handleChangeChosenService={handleChangeChosenService}
                  handleClick={handleClick}
                  key={e.id}
                />
              ))}
          </div>
        </ClickAwayListener>
        <div className="total-choice">
          {props.location.propsSearch !== undefined && (
            <ChosenColorExteriorCX5
              chosenColorExterior={props.location.propsSearch}
            />
          )}

          {props.location.component !== undefined && (
            <ChosenColorInteriorCX5
              chosenColorInterior={props.location.component}
            />
          )}

          {chosenService !== undefined && open ? (
            <ChosenExtraServ chosenService={chosenService} />
          ) : (
            <ChosenExtraServ chosenService="без выбора дополнительной услуги" />
          )}
          {props.location.params !== undefined && (
            <ChosenEquipmentCX5
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

export default ExtraServiceCX5;
