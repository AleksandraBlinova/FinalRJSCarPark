import React, { useState, useEffect, useRef } from "react";
import "./AdminConfigurations.css";
import axios from "axios";
import TableAdminConfig from "./TableAdminConfig";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button } from "@mui/material";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(24),
    minWidth: 220,
    marginTop: theme.spacing(3),
    "@media only screen and (max-width: 660px)": {
      marginLeft: "100px",
    },
    "@media only screen and (max-width: 450px)": {
      marginLeft: "60px",
      minWidth: "140px",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2.5),
  },
}));

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

  const [currentCarStatus, setcurrentCarStatus] = useState(""); //выбранная тачка

  const [currentCarr, setcurrentCarr] = useState(); //выбранная тачка

  const [currentCarrModel, setcurrentCarrModel] = useState(); //выбранная тачка
  const [currentCarrEngine, setcurrentCarrEngine] = useState(); //выбранная тачка
  const [currentCarrDrive, setcurrentCarrDrive] = useState(); //выбранная тачка
  const [currentCarrGrade, setcurrentCarrGrade] = useState(); //выбранная тачка
  const [currentCarrColor, setcurrentCarrColor] = useState(); //выбранная тачка
  const [currentCarrColorInterior, setcurrentCarrColorInterior] = useState(); //выбранная тачка

  function editCar(car, color, colorInterior, model, engine, grade, drive) {
    //для загрузки в форму редактирования
    setcurrentCarr(car);
    setcurrentCarrModel(model);
    setcurrentCarrEngine(engine);
    setcurrentCarrDrive(drive);
    setcurrentCarrGrade(grade);
    setcurrentCarrColor(color);
    setcurrentCarrColorInterior(colorInterior);
    setcurrentCarStatus(car.status.toString());
  }

  const updateCar = (car) => {
    //метод обновления таблицы автомобилей
    const index = сarsConfig.findIndex((i) => i.id === car.id); //находим машинку, которую получили (измененную) по индексу
    setCarsConfig([
      ...сarsConfig.slice(0, index),
      Object.assign({}, сarsConfig[index], { ...car }),
      ...сarsConfig.slice(index + 1),
    ]);
    //методом slice возвращаем новый массив, содержащий наши измененные элементы и посылаем его в таблицу всех авто
  };

  console.log(currentCarStatus);

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

  const configRefCarsEditStatus = useRef();
  function handleBackClickCarsEditStatus() {
    configRefCarsEditStatus.current.scrollIntoView({ behavior: "smooth" });
  }

  const configRefCarsEditStatusToTable = useRef();
  function handleBackClickCarsEditStatusToTable() {
    configRefCarsEditStatusToTable.current.scrollIntoView({
      behavior: "smooth",
    });
  }
  const classes = useStyles();

  const handleChangeStatus = (event) => {
    setcurrentCarStatus(event.target.value);
  };

  console.log(currentCarr);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      modelid: currentCarr.modelId,
      colorid: currentCarr.colorId,
      price: currentCarr.price,
      releaseYear: currentCarr.releaseYear,
      engineid: currentCarr.engineId,
      driveid: currentCarr.driveId,
      gradeid: currentCarr.gradeId,
      performanceid: currentCarr.performanceId,
      clientEmail: currentCarr.clientEmail,
      status: currentCarStatus,
    };

    axios
      .put(`http://localhost:7831/api/carconfig/${currentCarr.id}`, values, {
        mode: "cors",
        credentials: "include",
        withCredentials: true,
        "content-type": "application/json",
      })
      .then((response) => {
        const carForedit = {
          id: currentCarr.id,
          price: currentCarr.price,
          releaseYear: currentCarr.releaseYear,
          engineid: currentCarr.engineid,
          gradeid: currentCarr.gradeid,
          driveid: currentCarr.driveid,
          modelid: currentCarr.modelid,
          colorid: currentCarr.colorid,
          status: currentCarStatus,
          performanceid: currentCarr.performanceId,
        };
        updateCar(carForedit);
      })
      .catch(console.error);
  };

  return (
    <>
      <div className="admin-config-container">
        <h1 ref={configRefCarsEditStatus} className="h1">
          Конфигурации клиентов
        </h1>
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
              editCar={editCar}
              handleBackClickCarsEditStatusToTable={
                handleBackClickCarsEditStatusToTable
              }
            />
          </div>
        )}
      </div>
      <>
        <h1 ref={configRefCarsEditStatusToTable} className="admin-configs-h1">
          Редактирование статуса конфигурации
        </h1>
        <div className="admin-configs-change">
          <form
            className="admin-configs-form-container"
            onSubmit={handleSubmit}
          >
            <div className="fields">
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Статус</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentCarStatus}
                    onChange={handleChangeStatus}
                  >
                    <MenuItem value="На рассмотрении">На рассмотрении</MenuItem>
                    <MenuItem value="Отдан в производство">
                      Отдан в производство
                    </MenuItem>
                    <MenuItem value="В процессе производства">
                      В процессе производства
                    </MenuItem>
                    <MenuItem value="Произведен">Произведен</MenuItem>
                    <MenuItem value="Ожидает клиента">Ожидает клиента</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    handleBackClickCarsEditStatus();
                  }}
                  className="btn-1"
                  type="submit"
                >
                  Применить
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
      <NewFooter />
    </>
  );
};

export default AdminConfigurations;
