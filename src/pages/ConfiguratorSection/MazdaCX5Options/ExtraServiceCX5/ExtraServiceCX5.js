import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import "./ExtraServiceCX5.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import ExtraServSetCX5 from "../ExtraServSetCX5/ExtraServSetCX5";
import axios from "axios";
import ChosenExtraServ from "../../Mazda6Options/ChosenExtraServ/ChosenExtraServ";

const ExtraServiceCX5 = () => {
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
          response.data.filter((m) => m.modelId == 2).map((e) => e.extraServ)
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
      <div className="mazda6-extra-serv-main-container-cx5">
        <div className="mazda6-extra-serv-link-h2-container">
          <Link to="/mazdacx5config" className="mazda6-extra-serv-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДОПОЛНИТЕЛЬНУЮ УСЛУГУ</h2>
        </div>
        <div className="main-container-set-cards-extra-serv">
          {loadFlagextraServices &&
            extraServices.map((e) => (
              <ExtraServSetCX5
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

export default ExtraServiceCX5;
