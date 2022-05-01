import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./ExtraService6.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import ExtraServSet6 from "../ExtraServSet6/ExtraServSet6";
import axios from "axios";
import ChosenExtraServ from "../ChosenExtraServ/ChosenExtraServ";

const ExtraService6 = () => {
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
          response.data.filter((m) => m.modelId == 1).map((e) => e.extraServ)
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
        <div className="main-container-set-cards-extra-serv">
          {loadFlagextraServices &&
            extraServices.map((e) => (
              <ExtraServSet6
                e={e}
                handleChangeChosenService={handleChangeChosenService}
              />
            ))}
        </div>
        {chosenService !== undefined ? (
          <ChosenExtraServ chosenService={chosenService} />
        ) : null}
      </div>

      <NewFooter />
    </>
  );
};

export default ExtraService6;
