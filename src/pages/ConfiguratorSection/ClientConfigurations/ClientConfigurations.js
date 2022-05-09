import React, { useState, useEffect } from "react";
import "./ClientConfigurations.css";
import axios from "axios";
import TableClientConfig from "./TableClientConfig";

const ClientConfigurations = () => {
  const [myCarsConfig, setMyCarsConfig] = useState();

  const [loading, setLoading] = useState(false); //устанавливаем false для загрузочной полосы

  const [currentEmail, setcurrentEmail] = useState(
    localStorage.getItem("CurrentUserEmail")
  );

  const [myCarsConfigFlag, setMyCarsConfigFlag] = useState(false);

  const [colors, setColors] = useState();
  const [colorsInterior, setColorsInterior] = useState();
  const [colorFlag, setColorFlag] = useState(false);
  const [colorInFlag, setColorInFlag] = useState(false);

  const [gmedpOfCars, setGMEDPOfCars] = useState();
  const [GMEDPOfCarsFlag, setGMEDPOfCarsFlag] = useState(false);

  const [drivesOfCars, setDrivesOfCars] = useState();
  const [DOfCarsFlag, setDOfCarsFlag] = useState(false);

  useEffect(() => {
    axios({
      //оправляем запрос на получение машинок
      method: "GET",
      url: "http://localhost:7831/api/cars/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setMyCarsConfig(
          response.data.filter((i) => i.clientEmail == currentEmail)
        );
        setMyCarsConfigFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:7831/api/gmed/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setGMEDPOfCars(response.data);
        setGMEDPOfCarsFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:7831/api/drives/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setDrivesOfCars(response.data);
        setDOfCarsFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:7831/api/colors/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setColors(response.data);
        setColorFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:7831/api/colorsinterior/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setColorsInterior(response.data);
        setColorInFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  return (
    <div className="client-config-container">
      <h1 className="h1">Мои конфигурации</h1>
      {myCarsConfigFlag == true && (
        <div>
          <TableClientConfig
            myCarsConfig={myCarsConfig}
            colors={colors}
            colorFlag={colorFlag}
            colorInFlag={colorInFlag}
            colorsInterior={colorsInterior}
            gmedpOfCars={gmedpOfCars}
            GMEDPOfCarsFlag={GMEDPOfCarsFlag}
            DOfCarsFlag={DOfCarsFlag}
            drivesOfCars={drivesOfCars}
          />
        </div>
      )}
    </div>
  );
};

export default ClientConfigurations;
