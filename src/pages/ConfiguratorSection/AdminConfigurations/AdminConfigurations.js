import React, { useState, useEffect } from "react";
import "./AdminConfigurations.css";
import axios from "axios";
import TableAdminConfig from "./TableAdminConfig";
import { NewFooter } from "../../../components/New Footer/NewFooter";

const AdminConfigurations = () => {
  const [сarsConfig, setCarsConfig] = useState();

  const [loading, setLoading] = useState(false); //устанавливаем false для загрузочной полосы
  const [сarsConfigFlag, setCarsConfigFlag] = useState(false);

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
        setCarsConfig(
          response.data.filter(
            (i) =>
              i.status == "Отдан в производство" ||
              i.status == "В процессе производства"
          )
        );
        setCarsConfigFlag(true);
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
    <>
      <div className="admin-config-container">
        <h1 className="h1">Конфигурации клиентов</h1>
        {сarsConfigFlag == true && (
          <div>
            <TableAdminConfig
              сarsConfig={сarsConfig}
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
      <NewFooter />
    </>
  );
};

export default AdminConfigurations;
