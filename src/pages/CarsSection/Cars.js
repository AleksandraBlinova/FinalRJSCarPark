import React, { useState } from "react";
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
    availability: "",
  };
  const [currentcar, setcurrentCar] = useState(initialFormState); //выбранная тачка

  const editCar = (car) => {
    //для загрузки в форму редактирования

    setcurrentCar({
      id: car.id,
      price: car.price,
      releaseYear: car.releaseYear,
      model1: car.modelFkNavigation.model1,
      color1: car.colorFkNavigation.color1,
      modelid: car.modelFkNavigation.id, //айдишник модели авто (нужно для оправки в серверную часть)
      colorid: car.colorFkNavigation.id, //айдишник цвета авто (нужно для оправки в серверную часть)
      availability: car.availability,
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

  return (
    <div>
      <Car
        cars={cars}
        setCars={setCars}
        removeCar={removeCar}
        cars={cars}
        editCar={editCar}
        role={props.role}
      />
      {props.role === 2 && (
        <CarCreate cars={cars} setCars={setCars} addCar={addCar} />
      )}
      {props.role === 2 && (
        <CarChange
          cars={cars}
          editCar={updateCar}
          cars={cars}
          currentcar={currentcar}
        />
      )}
      <NewFooter />
    </div>
  );
};

export default Cars;
