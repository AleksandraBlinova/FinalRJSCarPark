import React, { useState, useRef } from "react";
import "./Cars.css";
import Car from "./Car.js";
import CarCreate from "../CarsSection/CarCreate/CarCreate";
import { NewFooter } from "../../components/New Footer/NewFooter";
import CarChange from "../CarsSection/CarChange/CarChange";
import PropTypes from "prop-types";
import axios from "axios";

const Cars = (props) => {
  const [cars, setCars] = useState([]); //все машины
  const addCar = (car) => setCars([...cars, car]); // добавить машину ко всем машинам
  const removeCar = (
    removeId //удалить машину
  ) => setCars(cars.filter(({ id }) => id !== removeId)); //устанавливаем без той, чей айди получили (removeId)
  const initialFormState = {
    //для начального отображения для формы добавления авто
    id: null,
    price: "",
    releaseYear: "",
    model1: "",
    color1: "",
    modelid: 0,
    colorid: 0,
    status: "",
    engine1: "",
    engineid: 0,
    grade1: "",
    gradeid: 0,
    drive1: "",
    driveid: 0,
    colorInteriorId: 0,
    colorInterior: "",
    performanceId: 0,
  };
  const [currentcar, setcurrentCar] = useState(initialFormState); //выбранная тачка

  const [currentPerformanceId, setCurrentPerformanceId] = useState(""); //new

  const editCar = (car, model1, engine1, grade1, drive1, warehouse) => {
    //для загрузки в форму редактирования
    console.log(car);
    setcurrentCar({
      id: car.id,
      price: car.price,
      releaseYear: car.releaseYear,
      modelid: car.modelId, //айдишник модели авто (нужно для оправки в серверную часть)
      colorid: car.colorId, //айдишник цвета авто (нужно для оправки в серверную часть)
      status: car.status,
      engineid: car.engineId,
      gradeid: car.gradeId,
      grade1: grade1,
      drive1: drive1,
      model1: model1,
      engine1: engine1,
      driveid: car.driveId,
      warehouseid: warehouse.id,
      warehouse1: warehouse.warehouse1,
      colorinteriorid: car.colorInteriorId,
      performanceid: car.performanceId,
    });
  };

  const updateCar = (car) => {
    //метод обновления таблицы автомобилей
    const index = cars.findIndex((i) => i.id === car.id); //находим машинку, которую получили (измененную) по индексу
    setCars([
      ...cars.slice(0, index),
      Object.assign({}, cars[index], { ...car }),
      ...cars.slice(index + 1),
    ]);
    //методом slice возвращаем новый массив, содержащий наши измененные элементы и посылаем его в таблицу всех авто
  };
  const titleRefCarsEdit = useRef();
  function handleBackClickCarsEdit() {
    titleRefCarsEdit.current.scrollIntoView({ behavior: "smooth" });
  }

  const titleRefCarsCreate = useRef();
  function handleBackClickCarsCreate() {
    titleRefCarsCreate.current.scrollIntoView({ behavior: "smooth" });
  }

  const titleRefCarsEditToTable = useRef();
  function handleBackClickCarsEditToTable() {
    titleRefCarsEditToTable.current.scrollIntoView({ behavior: "smooth" });
  }

  const titleRefCarsCreateToTable = useRef();
  function handleBackClickCarsCreateToTable() {
    titleRefCarsCreateToTable.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <Car
        cars={cars}
        setCars={setCars}
        removeCar={removeCar}
        editCar={editCar}
        role={props.role}
        handleBackClickCarsEdit={handleBackClickCarsEdit}
        handleBackClickCarsCreate={handleBackClickCarsCreate}
        titleRefCarsCreateToTable={titleRefCarsCreateToTable}
        titleRefCarsEditToTable={titleRefCarsEditToTable}
        currentcar={currentcar}
        setCurrentPerformanceId={setCurrentPerformanceId}
        currentPerformanceId={currentPerformanceId}
      />
      {props.role == 2 && (
        <CarCreate
          cars={cars}
          setCars={setCars}
          addCar={addCar}
          titleRefCarsCreate={titleRefCarsCreate}
          handleBackClickCarsCreateToTable={handleBackClickCarsCreateToTable}
        />
      )}
      {props.role == 2 && (
        <CarChange
          cars={cars}
          editCar={updateCar}
          currentcar={currentcar}
          titleRefCarsEdit={titleRefCarsEdit}
          handleBackClickCarsEditToTable={handleBackClickCarsEditToTable}
          setCurrentPerformanceId={setCurrentPerformanceId}
          currentPerformanceId={currentPerformanceId}
        />
      )}
      <NewFooter />
    </div>
  );
};

export default Cars;
