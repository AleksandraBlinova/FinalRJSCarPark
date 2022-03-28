import React, { useState, useEffect, useRef } from "react";
import Price from "../CarChange/Price";
import Model from "../CarChange/Model";
import Photo from "../CarChange/Photo";
import Color from "../CarChange/Color";
import ReleaseYear from "../CarChange/ReleaseYear";
import "./CarChange.css";
import axios from "axios";
import Availability from "./Availability";

function CarChange({ currentcar, editCar, titleRefCarsEdit }) {
  const [models, setModel] = useState([]);
  const [modelscar, setModelcar] = useState([]);
  const [colors, setColor] = useState([]);
  const [currentModel, setCurrentModel] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [currentIdM, setCurrentModelId] = useState("");
  const [currentIdC, setCurrentColorId] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [currentAvail, setCurrentAvail] = useState("");
  const [currentReleaseYear, setCurrentReleaseYear] = useState("");

  const [car, setCar] = useState("");

  useEffect(() => {
    setCar(currentcar);
    setCurrentModel(currentcar.model1);
    setCurrentModelId(currentcar.modelid);
    setCurrentColor(currentcar.color1);
    setCurrentColorId(currentcar.colorid);
    setCurrentPrice(currentcar.price);
    setCurrentReleaseYear(currentcar.releaseYear);
    setCurrentAvail(currentcar.availability);
  }, [currentcar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      modelFk: currentIdM,
      colorFk: currentIdC,
      price: currentPrice,
      releaseYear: currentReleaseYear,
      availability: currentAvail,
    };

    axios
      .put(`http://localhost:7831/api/cars/${currentcar.id}`, values, {
        withCredentials: true,
      })
      .then((response) => {
        const carForedit = {
          id: currentcar.id,
          price: values.price,
          releaseYear: values.releaseYear,
          model: { model1: currentModel },
          color: { color1: currentColor },
          modelid: values.modelFk,
          colorid: values.colorFk,
          availability: values.availability,
        };

        editCar(carForedit);
      })
      .catch(console.error);
  };

  const handleSetModel = (data) => {
    setModel(data);
  };

  const handleSetCurrentModel = (data) => {
    setCurrentModel(models.find((item) => item.id === data).model1);
    //console.log(models.find(item=>item.id===data).model1);
  };
  const handleSetCurrentModelId = (data) => {
    setCurrentModelId(data);
  };

  const handleSetCurrentColor = (data) => {
    setCurrentColor(data);
  };
  const handleSetColor = (data) => {
    setColor(data);
  };

  const handleSetCurrentPrice = (data) => {
    setCurrentPrice(data);
  };
  const handleSetCurrentReleaseYear = (data) => {
    setCurrentReleaseYear(data);
  };
  const handleSetCurrentAvail = (data) => {
    setCurrentAvail(data);
  };

  return (
    <React.Fragment>
      <h1 ref={titleRefCarsEdit} className="car-change-container">
        Редактирование авто
      </h1>
      <div className="car-change">
        <form className="form-container2" onSubmit={handleSubmit}>
          <div className="fields">
            <Model
              className="combobox"
              currentModel={currentModel}
              setCurrentModel={handleSetCurrentModel}
              models={models}
              setModel={handleSetModel}
              currentIdM={currentIdM}
              setCurrentModelId={handleSetCurrentModelId}
            />

            <Color
              className="combobox"
              currentColor={currentColor}
              setCurrentColor={handleSetCurrentColor}
              colors={colors}
              setColor={handleSetColor}
              currentIdC={currentIdC}
              setCurrentColorId={setCurrentColorId}
            />
            <ReleaseYear
              className="date"
              releaseYear={currentReleaseYear}
              setReleaseYear={handleSetCurrentReleaseYear}
            />

            <Price
              className="label"
              price={currentPrice}
              setPrice={handleSetCurrentPrice}
            />
            <Availability
              className="label"
              availability={currentAvail}
              setAvailability={handleSetCurrentAvail}
            />

            <div>
              <button className="btn-1" type="submit">
                Применить
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default CarChange;
