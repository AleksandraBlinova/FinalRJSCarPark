import React, { useState, useEffect } from "react";
import "./AdminConfigurations.css";
import axios from "axios";
import TableAdminConfig from "./TableAdminConfig";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import LinearProgress from "@material-ui/core/LinearProgress";

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

  // const initialFormState = {
  //   //для начального отображения для формы добавления авто
  //   id: null,
  //   status: "",
  // };
  // const [currentCarStatus, setcurrentCarStatus] = useState(initialFormState); //выбранная тачка

  // const editCar = (car) => {
  //   //для загрузки в форму редактирования
  //   console.log(car);
  //   setcurrentCarStatus({
  //     id: car.id,
  //     status: car.status,
  //   });
  // };

  useEffect(() => {
    setLoading(true); //устанавливаем true для загрузочной полосы
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
              i.status == "В процессе производства" ||
              i.status == "На рассмотрении"
          )
        );
        setCarsConfigFlag(true);
      })
      .catch((error) => {
        console.log(error); // если есть ошибки - выводим
      });
  }, []);

  // const updateCar = (car) => {
  //   //метод обновления таблицы автомобилей
  //   const index = сarsConfig.findIndex((i) => i.id === car.id); //находим машинку, которую получили (измененную) по индексу
  //   setCarsConfig([
  //     ...сarsConfig.slice(0, index),
  //     Object.assign({}, сarsConfig[index], { ...car }),
  //     ...сarsConfig.slice(index + 1),
  //   ]);
  //   //методом slice возвращаем новый массив, содержащий наши измененные элементы и посылаем его в таблицу всех авто
  // };

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
        setLoading(false);
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

  const showLoading = () =>
    //показать загрузочную полосу (компонент LinearProgress material ui)
    loading ? (
      <div>
        <LinearProgress color="secondary" />
      </div>
    ) : null;

  return (
    <>
      <div className="admin-config-container">
        <h1 className="h1">Конфигурации клиентов</h1>
        {showLoading()}
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
