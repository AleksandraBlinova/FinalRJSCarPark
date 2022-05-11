import React, { useState, useEffect } from "react";
import "./InsuranceCalculator.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";

import InsuranceRegion from "./InsuranceRegion";
import InsuranceCar from "./InsuranceCar";
import InsuranceCards from "./InsuranceCards";

import axios from "axios";
const InsuranceCalculator = () => {
  const [gmedIns, setGMEDIns] = useState();
  const [modelsInsurance, setModelsInsurance] = useState();
  const [enginesInsurance, setEnginesInsurance] = useState();
  const [gradesInsurance, setGradesInsurance] = useState();
  const [drivesInsurance, setDrivesInsurance] = useState();
  const [originalDrivesInc, setOriginalDrivesInc] = useState();
  const [currentModel, setCurrentModel] = useState("");
  const [currentEngine, setCurrenEngine] = useState("");
  const [currentGrade, setCurrenGrade] = useState("");
  const [currentDrive, setCurrenDrive] = useState("");

  const [currentIdM, setCurrentModelId] = useState("");
  const [currentIdEng, setCurrentEngineId] = useState(""); //new
  const [currentIdDr, setCurrentDriveId] = useState(""); //new
  const [currentIdGr, setCurrentGradeId] = useState(""); //new

  const [loadIncFlag, setLoadIncFlag] = useState(false);

  const [loadIncDriveFlag, setLoadIncDriveFlag] = useState(false);

  const [currentCost, setCurrentCost] = useState();
  const [currentCostFlag, setCurrentCostFlag] = useState(false);
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
        setGMEDIns(response.data);

        setModelsInsurance(
          response.data
            .map((i) => i.model)
            .reduce((o, c) => {
              const exist = o.find(
                (item) => item.id === c.id && item.model1 === c.model1
              );
              if (!exist) {
                const options = response.data
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
        setEnginesInsurance(response.data.map((i) => i.engine));
        setGradesInsurance(response.data.map((i) => i.grade));

        setLoadIncFlag(true);
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
        setOriginalDrivesInc(response.data);
        setDrivesInsurance(response.data);
        setLoadIncDriveFlag(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cities = ["Москва", "Владимир", "Санкт-Петербург"];

  const [valueLabel, setValueLabel] = React.useState("Москва");

  const [value, setValue] = React.useState(cities[0]);

  return (
    <>
      <div className="insurance-calc-start-container">
        <h2>MAZDA СТРАХОВАНИЕ</h2>
      </div>

      <div className="insurance-calc-choose-car-container">
        <InsuranceRegion
          cities={cities}
          value={value}
          setValue={setValue}
          valueLabel={valueLabel}
          setValueLabel={setValueLabel}
        />
        <InsuranceCar
          modelsInsurance={modelsInsurance}
          enginesInsurance={enginesInsurance}
          drivesInsurance={drivesInsurance}
          gradesInsurance={gradesInsurance}
          setEnginesInsurance={setEnginesInsurance}
          setGradesInsurance={setGradesInsurance}
          setDrivesInsurance={setDrivesInsurance}
          loadIncDriveFlag={loadIncDriveFlag}
          loadIncFlag={loadIncFlag}
          originalDrivesInc={originalDrivesInc}
          currentIdEng={currentIdEng}
          currentIdM={currentIdM}
          currentIdGr={currentIdGr}
          currentIdDr={currentIdDr}
          setCurrentDriveId={setCurrentDriveId}
          setCurrentGradeId={setCurrentGradeId}
          setCurrentModelId={setCurrentModelId}
          setCurrentEngineId={setCurrentEngineId}
          setOriginalDrivesInc={setOriginalDrivesInc}
          currentModel={currentModel}
          setCurrentModel={setCurrentModel}
          gmedIns={gmedIns}
          currentEngine={currentEngine}
          currentDrive={currentDrive}
          currentGrade={currentGrade}
          setCurrenEngine={setCurrenEngine}
          setCurrenDrive={setCurrenDrive}
          setCurrenGrade={setCurrenGrade}
          currentCost={currentCost}
          setCurrentCost={setCurrentCost}
          currentCostFlag={currentCostFlag}
          setCurrentCostFlag={setCurrentCostFlag}
        />

        <InsuranceCards
          currentCost={currentCost}
          currentIdM={currentIdM}
          valueLabel={valueLabel}
          currentCostFlag={currentCostFlag}
        />
      </div>
      <NewFooter />
    </>
  );
};

export default InsuranceCalculator;
