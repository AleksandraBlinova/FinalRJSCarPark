import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./CarCreate.css";
import Price from "./Price";
import Model from "./Model";
import Photo from "./Photo";
import Color from "./Color";
import ReleaseYear from "./ReleaseYear";
import PropTypes from "prop-types";
import Availability from "./Availability";
import Warehouse from "./Warehouse";

function CarCreate(props) {
  const [models, setModel] = useState([]);
  const [colors, setColor] = useState([]);
  const [gmed, setGMED] = useState([]);

  const [currentModel, setCurrentModel] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [currentIdM, setCurrentModelId] = useState("");
  const [currentIdC, setCurrentColorId] = useState("");
  const [status, setAvail] = useState("");

  const [drives, setDrives] = useState(); //new
  const [currentDrive, setCurrentDrive] = useState(""); //new
  const [currentIdDr, setCurrentDriveId] = useState(""); //new
  const [engines, setEngines] = useState([]);
  const [currentEngine, setCurrentEngine] = useState(""); //new
  const [currentIdEng, setCurrentEngineId] = useState(""); //new
  const [grades, setGrades] = useState(); //new
  const [currentGrade, setCurrentGrade] = useState(""); //new
  const [currentIdGr, setCurrentGradeId] = useState(""); //new
  const [currentPerformanceId, setCurrentPerformanceId] = useState(""); //new
  const [loadFlag, setLoadFlag] = useState(false);
  const [loadWFlag, setLoadWFlag] = useState(false);
  const [originalDrives, setOriginalDrives] = useState(""); //new

  const [warehouses, setWarehouses] = useState([]);
  const [currentWarehouse, setCurrentWarehouse] = useState(""); //new
  const [currentIdW, setCurrentWarehouseId] = useState(""); //new
  const [loadWWFlag, setLoadWWFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      modelid: currentIdM,
      colorid: currentIdC,
      price: price,
      releaseYear: releaseYear,
      status: status,
      imageUrl: photo,
      warehouseid: currentIdW,
      engineid: currentIdEng,
      driveid: currentIdDr,
      gradeid: currentIdGr,
      performanceid: currentPerformanceId,
    };

    const file = new FormData();
    file.append("imageUrl", photo);

    Object.entries({ ...values }).map(([key, value]) =>
      file.append(key, value)
    );

    axios
      .post(`http://localhost:7831/api/cars/`, file, {
        withCredentials: true,
      })
      .then((response) => {
        props.addCar(response.data);
      })
      .catch(console.error);
  };

  const handleSetModel = (data) => {
    setModel(data);
  };
  const handleSetColor = (data) => {
    setColor(data);
  };
  const handleSetAvail = (data) => {
    setAvail(data);
  };

  const handleSetPhoto = (data) => {
    if (data) {
      setPhoto(data);
    }
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
        setOriginalDrives(response.data);
        setDrives(response.data);
        setLoadWFlag(true);
      })
      .catch((error) => {
        console.log(error);
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
        setWarehouses(response.data);
        setLoadWWFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <React.Fragment>
      <h1 ref={props.titleRefCarsCreate} className="car-create-container">
        Добавление нового авто
      </h1>
      <div>
        <form className="form-container1" onSubmit={handleSubmit}>
          <div className="fields">
            <Model
              className="combobox"
              models={models}
              setModel={handleSetModel}
              currentModel={currentModel}
              setCurrentModel={setCurrentModel}
              currentIdM={currentIdM}
              setCurrentModelId={setCurrentModelId}
              grades={grades}
              setGrades={setGrades}
              currentGrade={currentGrade}
              setCurrentGrade={setCurrentGrade}
              currentIdGr={currentIdGr}
              setCurrentGradeId={setCurrentGradeId}
              drives={drives}
              setDrives={setDrives}
              currentDrive={currentDrive}
              setCurrentDrive={setCurrentDrive}
              currentIdDr={currentIdDr}
              setCurrentDriveId={setCurrentDriveId}
              engines={engines}
              setEngines={setEngines}
              currentEngine={currentEngine}
              setCurrentEngine={setCurrentEngine}
              currentIdEng={currentIdEng}
              setCurrentEngineId={setCurrentEngineId}
              gmed={gmed}
              setCurrentPerformanceId={setCurrentPerformanceId}
              loadFlag={loadFlag}
              loadWFlag={loadWFlag}
              originalDrives={originalDrives}
            />

            <Color
              className="combobox"
              colors={colors}
              setColor={handleSetColor}
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
              currentIdC={currentIdC}
              setCurrentColorId={setCurrentColorId}
            />

            <ReleaseYear
              className="date"
              releaseYear={releaseYear}
              setReleaseYear={setReleaseYear}
            />

            <Price className="label" price={price} setPrice={setPrice} />

            <Availability
              className="label"
              status={status}
              setAvail={handleSetAvail}
            />
            <Warehouse
              warehouses={warehouses}
              setWarehouses={setWarehouses}
              loadWWFlag={loadWWFlag}
              currentIdW={currentIdW}
              currentWarehouse={currentWarehouse}
              setCurrentWarehouse={setCurrentWarehouse}
              setCurrentWarehouseId={setCurrentWarehouseId}
            />

            <Photo className="label" photo={photo} setPhoto={handleSetPhoto} />
            <div>
              <button
                onClick={(e) => {
                  props.handleBackClickCarsCreateToTable();
                }}
                className="btn-2"
                type="submit"
              >
                Создать
              </button>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

/* CarCreate.propTypes = {
  addCar: PropTypes.func.isRequired,
}; */
export default CarCreate;
