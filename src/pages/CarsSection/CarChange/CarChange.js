import React, { useState, useEffect, useRef } from "react";
import Price from "../CarChange/Price";
import Model from "../CarChange/Model";
import Photo from "../CarChange/Photo";
import Color from "../CarChange/Color";
import ReleaseYear from "../CarChange/ReleaseYear";
import "./CarChange.css";
import axios from "axios";
import Availability from "./Availability";
import Warehouse from "./Warehouse";

function CarChange({
  currentcar,
  editCar,
  titleRefCarsEdit,
  handleBackClickCarsEditToTable,
  setCurrentPerformanceId,
  currentPerformanceId,
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
  const [drives, setDrives] = useState(); //new
  const [currentGrade, setCurrentGrade] = useState(""); //new
  const [currentIdGr, setCurrentGradeId] = useState(""); //new

  const [loadWFlag, setLoadWFlag] = useState(false);
  const [originalDrives, setOriginalDrives] = useState(""); //new
  const [currentDrive, setCurrentDrive] = useState(""); //new
  const [currentDriveId, setCurrentDriveId] = useState(""); //new

  const [warehouses, setWarehouses] = useState([]);
  const [currentWarehouse, setCurrentWarehouse] = useState(""); //new
  const [currentIdW, setCurrentWarehouseId] = useState(""); //new
  const [loadWWFlag, setLoadWWFlag] = useState(false);

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
    setCurrentDrive(currentcar.drive1);
    setCurrentDriveId(currentcar.driveid);
    setCurrentWarehouse(currentcar.warehouse1);
    setCurrentWarehouseId(currentcar.warehouseid);
    setCurrentPerformanceId(currentcar.performanceid);
  }, [currentcar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      modelid: currentIdM,
      colorid: currentIdC,
      price: currentPrice,
      releaseYear: currentReleaseYear,
      status: currentAvail,
      engineid: currentIdEng,
      driveid: currentDriveId,
      gradeid: currentIdGr,
      performanceid: currentPerformanceId,
      warehouseid: currentIdW,
    };

    axios
      .put(`http://localhost:7831/api/cars/${currentcar.id}`, values, {
        mode: "cors",
        credentials: "include",
        withCredentials: true,
        "content-type": "application/json",
      })
      .then((response) => {
        const carForedit = {
          id: currentcar.id,
          price: values.price,
          releaseYear: values.releaseYear,
          model: { model1: currentModel },
          color: { color1: currentColor },
          engine: { engine1: currentEngine },
          grade: { grade1: currentGrade },
          drive: { drive1: currentDrive },
          warehouse: { warehouse1: currentWarehouse },
          engineid: values.engineid,
          gradeid: values.gradeid,
          driveid: values.driveid,
          modelid: values.modelid,
          colorid: values.colorid,
          status: values.status,
          warehouseid: values.warehouseid,
          performanceid: values.performanceid,
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

  const handleSetCurrentWarehouse = (data) => {
    setCurrentWarehouse(data);
  };

  const handleSetCurrentEngine = (data) => {
    setCurrentEngine(engines.find((item) => item.id === data).engine1);
  };

  const handleSetCurrentGrade = (data) => {
    setCurrentGrade(grades.find((item) => item.id === data).grade1);
  };

  const handleSetCurrentDrive = (data) => {
    setCurrentDrive(drives.find((item) => item.id === data).drive1);
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
      <h1 ref={titleRefCarsEdit} className="car-change-container">
        Редактирование автомобиля
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
              setCurrentEngine={handleSetCurrentEngine}
              setEngines={setEngines}
              setCurrentGrade={handleSetCurrentGrade}
              setCurrentGradeId={setCurrentGradeId}
              currentIdGr={currentIdGr}
              setCurrentPerformanceId={setCurrentPerformanceId}
              drives={drives}
              setDrives={setDrives}
              originalDrives={originalDrives}
              currentDriveId={currentDriveId}
              currentDrive={currentDrive}
              setCurrentDrive={handleSetCurrentDrive}
              setCurrentDriveId={setCurrentDriveId}
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
              status={currentAvail}
              setAvailability={handleSetCurrentAvail}
            />
            <Warehouse
              warehouses={warehouses}
              setWarehouses={setWarehouses}
              setCurrentWarehouse={handleSetCurrentWarehouse}
              loadWWFlag={loadWWFlag}
              currentIdW={currentIdW}
              setCurrentWarehouseId={setCurrentWarehouseId}
              currentWarehouse={currentWarehouse}
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
