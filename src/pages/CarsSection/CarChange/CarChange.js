import React, { useState, useEffect, useRef } from "react";
import Price from "../CarChange/Price";
import Model from "../CarChange/Model";
import Photo from "../CarChange/Photo";
import Color from "../CarChange/Color";
import ReleaseYear from "../CarChange/ReleaseYear";
import "./CarChange.css";
import axios from "axios";
import Availability from "./Availability";

function CarChange({
  currentcar,
  editCar,
  titleRefCarsEdit,
  handleBackClickCarsEditToTable,
}) {
  const [models, setModel] = useState([]);

  const [colors, setColor] = useState([]);
  const [currentModel, setCurrentModel] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [currentIdM, setCurrentModelId] = useState("");
  const [currentIdC, setCurrentColorId] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [currentAvail, setCurrentAvail] = useState("");
  const [currentReleaseYear, setCurrentReleaseYear] = useState("");
  const [loadFlag, setLoadFlag] = useState(false);
  const [gmed, setGMED] = useState([]);
  const [engines, setEngines] = useState([]);
  const [grades, setGrades] = useState(); //new
  const [currentEngine, setCurrentEngine] = useState(""); //new
  const [currentIdEng, setCurrentEngineId] = useState(""); //new

  const [currentGrade, setCurrentGrade] = useState(""); //new
  const [currentIdGr, setCurrentGradeId] = useState(""); //new
  const [currentPerformanceId, setCurrentPerformanceId] = useState(""); //new

  const [car, setCar] = useState("");

  useEffect(() => {
    setCar(currentcar);

    setCurrentModel(currentcar.model1);
    setCurrentModelId(currentcar.modelid);
    setCurrentColor(currentcar.color1);
    setCurrentColorId(currentcar.colorid);
    setCurrentPrice(currentcar.price);
    setCurrentReleaseYear(currentcar.releaseYear);
    setCurrentAvail(currentcar.status);
    setCurrentEngine(currentcar.engine1);
    setCurrentEngineId(currentcar.engineid);
    setCurrentGrade(currentcar.grade1);
    setCurrentGradeId(currentcar.gradeid);
  }, [currentcar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      modelid: currentIdM,
      colorid: currentIdC,
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
          modelid: values.modelid,
          colorid: values.colorid,
          availability: values.availability,
        };

        editCar(carForedit);
      })
      .catch(console.error);
  };

  const handleSetModel = (data) => {
    setModel(data);
  };

  const handleSetColor = (data) => {
    setColor(data);
  };
  const handleSetCurrentModel = (data) => {
    setCurrentModel(models.find((item) => item.id === data).model1);
  };

  const handleSetCurrentColor = (data) => {
    setCurrentColor(colors.find((item) => item.id === data).color1);
  };
  const handleSetCurrentModelId = (data) => {
    setCurrentModelId(data);
  };

  const handleSetCurrentColorId = (data) => {
    setCurrentColorId(data);
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
        setGMED(response.data);
        setModel(
          response.data
            .map((i) => i.model)
            .reduce((o, c) => {
              const exist = o.find(
                (item) => item.id === c.id && item.model1 === c.model1
              );
              if (!exist) {
                const options = models
                  .filter(
                    (item) => item.id === c.id && item.model1 === c.model1
                  )
                  .map((item) => item.option);
                o.push({
                  id: c.id,
                  model1: c.model1,
                  options: Array.from(new Set(options)),
                });
              }

              return o;
            }, [])
        );
        setEngines(response.data.map((i) => i.engine));
        setGrades(response.data.map((i) => i.grade));

        setLoadFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
              currentIdEng={currentIdEng}
              loadFlag={loadFlag}
              engines={engines}
              gmed={gmed}
              grades={grades}
              setGrades={setGrades}
              setCurrentEngineId={setCurrentEngineId}
              setCurrentEngine={setCurrentEngine}
              setEngines={setEngines}
              setCurrentGrade={setCurrentGrade}
              setCurrentGradeId={setCurrentGradeId}
              currentIdGr={currentIdGr}
            />

            <Color
              className="combobox"
              currentColor={currentColor}
              setCurrentColor={handleSetCurrentColor}
              colors={colors}
              setColor={handleSetColor}
              currentIdC={currentIdC}
              setCurrentColorId={handleSetCurrentColorId}
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
              <button
                onClick={(e) => {
                  handleBackClickCarsEditToTable();
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
    </React.Fragment>
  );
}

export default CarChange;
