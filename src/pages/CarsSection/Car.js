import "./Car.css";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import TableCars from "../../components/Table/TableCars";
import { TableSearch } from "../../components/Table/TableSearch";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ColorButtonCar = styled(Button)(({ theme }) => ({
  "&.MuiButtonBase-root": {
    border: "2px solid #101010",
    borderRadius: "3px ",
    width: "180px",
    height: "41px",
    color: "#fff",
    lineHeight: "1",
    fontSize: "14px",
    fontFamily: "inherit",
    marginTop: "14px",
    fontWeight: "500",
    backgroundColor: "#000",
    "@media only screen and (max-width: 960px)": {
      width: "160px",
      height: "40px",
      fontSize: "14px",
      padding: "0 auto",
      marginTop: "15px",
    },

    "@media only screen and (max-width: 769px)": {
      width: "150px",
      height: "40px",
      fontSize: "12px",
      padding: "0 auto",
    },

    "@media only screen and (max-width: 551px)": {
      width: "120px",
      height: "40px",
      fontSize: "10px",
      padding: "0 auto",
      marginTop: "18px",
      marginRight: "10px",
    },

    "@media only screen and (max-width: 350px)": {
      width: "80px",
      height: "36px",
    },
  },
  "&:hover": {
    backgroundColor: "#880000",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    borderRadius: "3px ",
  },
}));

const Car = ({
  cars, //все машины
  setCars, // метод для загрузки в таблицу всех машин
  removeCar, //удалить машинку
  editCar, //изменить машинку
  currentcar, // текущая (выбранная) машинка
  setcurrentCar, // подгрузить данные для выбранной машинки
  role, //роль (менеджер, гость или клиент)
  handleBackClickCarsEdit,
  handleBackClickCarsCreate,
  titleRefCarsCreateToTable,
  titleRefCarsEditToTable,
}) => {
  const [loading, setLoading] = useState(false); //устанавливаем false для загрузочной полосы
  const [search, setSearch] = useState(""); //для поиска по машинкам
  const [colors, setColors] = useState();
  const [colorsInterior, setColorsInterior] = useState();
  const [colorFlag, setColorFlag] = useState(false);
  const [colorInFlag, setColorInFlag] = useState(false);

  const [gmedpOfCars, setGMEDPOfCars] = useState();
  const [GMEDPOfCarsFlag, setGMEDPOfCarsFlag] = useState(false);

  const [drivesOfCars, setDrivesOfCars] = useState();
  const [DOfCarsFlag, setDOfCarsFlag] = useState(false);

  const [warehousessOfCars, setWarehousesOfCars] = useState();
  const [WOfCarsFlag, setWOfCarsFlag] = useState(false);
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
        setCars(
          response.data.filter(
            (i) =>
              i.status !== "Отдан в производство" &&
              i.status !== "В процессе производства" &&
              i.status !== "На рассмотрении" &&
              i.status !== "Произведен" &&
              i.status !== "Ожидает клиента" &&
              i.status !== "Конфигурация пользователя"
          )
        );
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
        //используем метод setCars для подгрузки авто в таблицу
        setLoading(false); //устанавливаем false для загрузочной полосы (она больше не нужна)
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
      url: "http://localhost:7831/api/warehouses/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setWarehousesOfCars(response.data);
        setWOfCarsFlag(true);
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

  const deleteItem = (id) => {
    //удаление машинки
    //e.stopPropagation();

    axios({
      //посылаем запрос
      method: "DELETE",
      url: `http://localhost:7831/api/cars/${id}`,
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then(() => {
        removeCar(id); //используем метод removeCar и передаем туда айди
      })
      .catch(console.error);
  };

  const showLoading = () =>
    //показать загрузочную полосу (компонент LinearProgress material ui)
    loading ? (
      <div>
        <LinearProgress color="secondary" />
      </div>
    ) : null;

  //показать загрузочную полосу (компонент LinearProgress material ui)
  //TableSearch - для поиска по машинам
  //Table - таблица с машинами
  return (
    <React.Fragment>
      <h1 className="h1">Автомобили в наличии</h1>

      {showLoading()}
      <div className="car-component-search-add-btn-container">
        <TableSearch
          search={search}
          handleChangeSearch={(value) => setSearch(value)}
        />
        {role == 2 && (
          <ColorButtonCar
            onClick={(e) => {
              handleBackClickCarsCreate();
            }}
          >
            Добавить авто
          </ColorButtonCar>
        )}
      </div>
      <TableCars
        search={search}
        data={cars}
        colors={colors}
        deleteItem={deleteItem}
        editCar={editCar}
        currentcar={currentcar}
        setcurrentCar={setcurrentCar}
        role={role}
        handleBackClickCarsEdit={handleBackClickCarsEdit}
        titleRefCarsCreateToTable={titleRefCarsCreateToTable}
        titleRefCarsEditToTable={titleRefCarsEditToTable}
        colorFlag={colorFlag}
        colorInFlag={colorInFlag}
        colorsInterior={colorsInterior}
        gmedpOfCars={gmedpOfCars}
        GMEDPOfCarsFlag={GMEDPOfCarsFlag}
        DOfCarsFlag={DOfCarsFlag}
        drivesOfCars={drivesOfCars}
        warehousessOfCars={warehousessOfCars}
        WOfCarsFlag={WOfCarsFlag}
      />
    </React.Fragment>
  );
};

export default Car;
