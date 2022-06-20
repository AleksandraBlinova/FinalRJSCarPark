import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Mazda6OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";
import CardsEngine6 from "./Equipment6/CardsEngine/CardsEngine6";
import CardsSet6 from "./Equipment6/CardsSet/CardsSet6";
import axios from "axios";
import ChosenEquipment from "./Equipment6/ChosenEquipment/ChosenEquipment";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import ChosenColorExterior from "./ChosenColorExterior/ChosenColorExterior";
import ChosenColorInterior from "./ChosenColorInterior/ChosenColorInterior";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Mazda6FormNewConfigGED from "./Mazda6FormNewConfigGED";

const Mazda6OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const [isShown, setIsShown] = useState(true);
  const [chosen, setChosen] = useState(0);
  const [ged, setGED] = useState([]);

  const [gedF, setGEDF] = useState(false);
  const [engines, setEngines] = useState([]);

  const [currentRole, setCurrentRole] = useState(localStorage.getItem("role"));

  const [pathnameForExtraServ, setPathnameForExtraServ] =
    useState("/extraserv6");

  const onHover = () => {
    setHover(!hover);
  };

  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/ged/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setGED(response.data);
        setGEDF(true);
        setEngines(
          response.data
            .filter((item) => item.modelId == 1)
            .map((i) => i.engine)
            .reduce((o, c) => {
              const exist = o.find(
                (item) => item.id === c.id && item.engine1 === c.engine1
              );
              if (!exist) {
                const options = response.data
                  .filter(
                    (item) => item.id === c.id && item.engine1 === c.engine1
                  )
                  .map((item) => item.option);

                o.push({
                  id: c.id,
                  engine1: c.engine1,
                  options: Array.from(new Set(options)),
                });
              }

              return o;
            }, [])
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const types = engines.map((i) => i.engine1);

  const [active, setActive] = useState("");
  const [activeEngineId, setActiveEngineId] = useState(1);
  const [loadAEflag, setLoadAEFlag] = useState(false);

  const handleChangeActive = (newActive) => {
    setActive(newActive);
    if (newActive === "2.0") {
      setActiveEngineId(1);
      setEquipments(ged.filter((i) => i.modelId === 1 && i.engineId === 1));
      setLoadAEFlag(true);
    } else {
      setActiveEngineId(2);
      setEquipments(ged.filter((i) => i.modelId === 1 && i.engineId === 2));
      setLoadAEFlag(true);
    }
  };

  let [chosenColorExterior, setChosenColorExterior] = useState(
    props.location.propsSearch
  );
  let [chosenColorInterior, setChosenColorInterior] = useState(
    props.location.component
  );

  let [chosenCarForConfig, setChosenCarForConfig] = useState(
    props.location.params
  );
  const [equipments, setEquipments] = useState();

  const [chosenEquipmentCar, setChosenEquipmentCar] = useState();
  const handleChangeEquipment = (newValue) => {
    setChosenEquipmentCar(newValue);
    setChosenColorInterior(undefined);
    setChosenColorExterior(undefined);
  };

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prev) => !prev);
  }

  function handleClickAway() {
    setOpen(false);
  }

  const [grades, setGrades] = useState(); //new
  const [currentEngine, setCurrentEngine] = useState(""); //new
  const [currentIdEng, setCurrentEngineId] = useState(""); //new
  const [drives, setDrives] = useState(); //new
  const [currentGrade, setCurrentGrade] = useState(""); //new
  const [currentIdGr, setCurrentGradeId] = useState(""); //new
  const [currentIdM, setCurrentModelId] = useState(1); //new
  const [loadWFlag, setLoadWFlag] = useState(false);
  const [originalDrives, setOriginalDrives] = useState(""); //new
  const [currentDrive, setCurrentDrive] = useState(""); //new
  const [currentDriveId, setCurrentDriveId] = useState(""); //new

  const [currentPerformanceId, setCurrentPerformanceId] = useState(""); //new
  const [currentPerformance, setCurrentPerformance] = useState(""); //new
  const [currentPerformanceF, setCurrentPerformanceF] = useState(false); //new

  const [transm, setTransm] = useState(""); //new
  const [currentTransm, setCurrentTransm] = useState(""); //new
  const [currentTransmId, setCurrentTransmId] = useState(""); //new
  const [currentTransmF, setCurrentTransmF] = useState(false); //new

  const [newEngine, setNewEngine] = useState(""); //new
  const [newGrade, setNewGrade] = useState(""); //new
  const [newDrive, setNewDrive] = useState(""); //new
  const [newHP, setNewHP] = useState(""); //new
  const [newSpeed, setNewSpeed] = useState(""); //new
  const [newFuelCapacity, setNewFuelCapacity] = useState(""); //new
  const [newTrunkVolume, setNewTrunkVolume] = useState(""); //new
  const [newAccelerationTime, setNewAccelerationTime] = useState(""); //new
  const [newTorque, setNewTorque] = useState(""); //new
  const [newMixedCycle, setNewMixedCycle] = useState(""); //new
  const [newRecommendedFuel, setNewRecommendedFuel] = useState(""); //new

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:7831/api/transm/",

      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setTransm(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangeEngine = (event) => {
    setCurrentEngine(event.target.value);
    setCurrentEngineId(event.target.value);

    setGrades(
      ged
        .filter(
          (item) => item.engineId == event.target.value && item.modelId == 1
        )
        .map((i) => i.grade)
        .reduce((o, c) => {
          const exist = o.find(
            (item) => item.id === c.id && item.grade1 === c.grade1
          );
          if (!exist) {
            const options = ged
              .filter((item) => item.id === c.id && item.grade1 === c.grade1)
              .map((item) => item.option);

            o.push({
              id: c.id,
              grade1: c.grade1,
              options: Array.from(new Set(options)),
            });
          }

          return o;
        }, [])
    );
  };

  const handleChangeGrade = (event) => {
    setCurrentGrade(event.target.value);
    setCurrentGradeId(event.target.value);
    setDrives(
      ged
        .filter(
          (item) =>
            item.engineId == currentIdEng &&
            item.modelId == 1 &&
            item.gradeId == event.target.value
        )
        .map((i) => i.drive)
        .reduce((o, c) => {
          const exist = o.find(
            (item) => item.id === c.id && item.drive1 === c.drive1
          );
          if (!exist) {
            const options = ged
              .filter((item) => item.id === c.id && item.drive1 === c.drive1)
              .map((item) => item.option);

            o.push({
              id: c.id,
              drive1: c.drive1,
              options: Array.from(new Set(options)),
            });
          }

          return o;
        }, [])
    );
  };
  const handleChangeDrive = (event) => {
    setCurrentDrive(event.target.value);
    setCurrentDriveId(event.target.value);
    setCurrentPerformanceId(
      ged
        .filter(
          (i) =>
            i.modelId == currentIdM &&
            i.engineId == currentIdEng &&
            i.gradeId == currentIdGr &&
            i.driveId == event.target.value
        )
        .map((k) => k.performance.map((o) => o.id))
    );
    setCurrentPerformance(
      ged
        .filter(
          (i) =>
            i.modelId == currentIdM &&
            i.engineId == currentIdEng &&
            i.gradeId == currentIdGr &&
            i.driveId == event.target.value
        )
        .map((k) => k.performance.map((o) => o))
    );
    setCurrentPerformanceF(true);
    setCurrentTransm(
      transm.find(
        (i) =>
          i.id ==
          parseInt(
            ged
              .filter(
                (i) =>
                  i.modelId == currentIdM &&
                  i.engineId == currentIdEng &&
                  i.gradeId == currentIdGr &&
                  i.driveId == event.target.value
              )
              .map((k) => k.performance.map((o) => o.transmId))
          )
      ).transmission1
    );
    setCurrentTransmId(
      transm.find(
        (i) =>
          i.id ==
          parseInt(
            ged
              .filter(
                (i) =>
                  i.modelId == currentIdM &&
                  i.engineId == currentIdEng &&
                  i.gradeId == currentIdGr &&
                  i.driveId == event.target.value
              )
              .map((k) => k.performance.map((o) => o.transmId))
          )
      ).id
    );
    setCurrentTransmF(true);
  };

  const handleChangeTransm = (event) => {
    setCurrentTransm(event.target.value);
    setCurrentTransmId(event.target.value);
  };

  const handleChangeAccelerationTime = (event) => {
    setNewAccelerationTime(event.target.value);
  };
  const handleChangeHp = (event) => {
    setNewHP(event.target.value);
  };
  const handleChangeSpeed = (event) => {
    setNewSpeed(event.target.value);
  };
  const handleChangeTorque = (event) => {
    setNewTorque(event.target.value);
  };
  const handleChangeRecommendedFuel = (event) => {
    setNewRecommendedFuel(event.target.value);
  };
  const handleChangeFuelCapacity = (event) => {
    setNewFuelCapacity(event.target.value);
  };
  const handleChangeTrunkVolume = (event) => {
    setNewTrunkVolume(event.target.value);
  };

  const handleChangeMixedCycle = (event) => {
    setNewMixedCycle(event.target.value);
  };

  const handleChangeNewDrive = (event) => {
    setNewDrive(event.target.value);
  };
  const handleChangeNewGrade = (event) => {
    setNewGrade(event.target.value);
  };
  const handleChangeNewEngine = (event) => {
    setNewEngine(event.target.value);
  };

  return (
    <>
      <div className="mazda6-options-main-container">
        <div className="mazda6-options-link-h2-container">
          <Link to="/configurator" className="mazda6-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>

          <h2>ВЫБЕРИТЕ ДВИГАТЕЛЬ, КОМПЛЕКТАЦИЮ И ПАКЕТ</h2>
          {currentRole == 2 && (
            <Tooltip
              title="Добавить конфигурацию"
              // ref={titleRefCarsCreateToTable}
              style={{ float: "right" }}
            >
              <IconButton
              // onClick={() => {
              //   handleBackClickCarsCreate();
              // }}
              >
                <AddIcon style={{ fontSize: "32px" }} />
              </IconButton>
            </Tooltip>
          )}
        </div>
        <div className="main-container-engine-cards">
          <CardsEngine6
            engines={engines}
            types={types}
            active={active}
            setActive={handleChangeActive}
          />
        </div>
        {active === "2.0" && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="main-container-set-cards">
              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(1))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-first-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 3) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 1) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 1) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>

              <div
                className="main-container-set-cards-second-card"
                onMouseEnter={(() => setIsShown(true), () => setChosen(2))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
              >
                {(isShown === true && chosen === 1) ||
                (isShown === true && chosen === 3) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 2) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 2) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>

              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(3))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-third-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 1) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 4) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 4) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>
            </div>
          </ClickAwayListener>
        )}
        {active === "2.5" && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <div className="main-container-set-cards-25">
              <div
                className="main-container-set-cards-second-card"
                onMouseEnter={(() => setIsShown(true), () => setChosen(2))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
              >
                {(isShown === true && chosen === 1) ||
                (isShown === true && chosen === 3) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 5) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 5) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>

              <div
                onMouseEnter={(() => setIsShown(true), () => setChosen(3))}
                onMouseLeave={(() => setIsShown(false), () => setChosen(0))}
                className="main-container-set-cards-third-card"
              >
                {(isShown === true && chosen === 2) ||
                (isShown === true && chosen === 1) ? (
                  <div
                    style={{
                      pointerEvents: "none",
                      opacity: "0.4",
                      transition: "all 0.2s ease-in-out",
                    }}
                  >
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 6) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                ) : (
                  <div>
                    {loadAEflag === true &&
                      equipments.reduce((res, e) => {
                        if (e.id == 6) {
                          return (
                            <CardsSet6
                              type={"AT 6" + " " + "/" + " " + e.drive.drive1}
                              src="../configurator/main-cards/mazda6_soul-red_gcaf901.png"
                              text={e.grade.grade1.toUpperCase()}
                              price={e.cost + " " + "₽"}
                              path="/mazda6equipdetails"
                              number={e.gradeId - 1}
                              isShown={isShown}
                              chosen={chosen}
                              handleChangeEquipment={handleChangeEquipment}
                              active={active}
                              chosenEquipmentCar={e}
                              handleClickAway={handleClickAway}
                              handleClick={handleClick}
                              chosenColorExterior={chosenColorExterior}
                              chosenColorInterior={chosenColorInterior}
                            />
                          );
                        } else {
                          return res;
                        }
                      }, "")}
                  </div>
                )}
              </div>
            </div>
          </ClickAwayListener>
        )}
        {chosenColorExterior !== undefined && (
          <ChosenColorExterior chosenColorExterior={chosenColorExterior} />
        )}

        {chosenColorInterior !== undefined && (
          <ChosenColorInterior chosenColorInterior={chosenColorInterior} />
        )}
        {chosenEquipmentCar !== undefined && open ? (
          <ChosenEquipment
            chosenEquipmentCar={chosenEquipmentCar}
            handleClick={handleClick}
            chosenColorExterior={chosenColorExterior}
            chosenColorInterior={chosenColorInterior}
            pathnameForExtraServ={pathnameForExtraServ}
          />
        ) : (
          <ChosenEquipment
            chosenEquipmentCar={chosenCarForConfig}
            chosenColorExterior={chosenColorExterior}
            chosenColorInterior={chosenColorInterior}
            pathnameForExtraServ={pathnameForExtraServ}
          />
        )}

        <>
          <Mazda6FormNewConfigGED
            ged={ged}
            engines={engines}
            gedF={gedF}
            handleChangeGrade={handleChangeGrade}
            handleChangeEngine={handleChangeEngine}
            handleChangeDrive={handleChangeDrive}
            grades={grades}
            drives={drives}
            currentIdEng={currentIdEng}
            currentIdGr={currentIdGr}
            currentDriveId={currentDriveId}
            currentPerformance={currentPerformance}
            currentPerformanceId={currentPerformanceId}
            currentPerformanceF={currentPerformanceF}
            currentTransm={currentTransm}
            currentTransmF={currentTransmF}
            currentTransmId={currentTransmId}
            transm={transm}
            handleChangeTransm={handleChangeTransm}
            newAccelerationTime={newAccelerationTime}
            newDrive={newDrive}
            newEngine={newEngine}
            newFuelCapacity={newFuelCapacity}
            newGrade={newGrade}
            newHP={newHP}
            newMixedCycle={newMixedCycle}
            newRecommendedFuel={newRecommendedFuel}
            newSpeed={newSpeed}
            newTorque={newTorque}
            handleChangeAccelerationTime={handleChangeAccelerationTime}
            handleChangeFuelCapacity={handleChangeFuelCapacity}
            handleChangeHp={handleChangeHp}
            handleChangeMixedCycle={handleChangeMixedCycle}
            handleChangeRecommendedFuel={handleChangeRecommendedFuel}
            handleChangeSpeed={handleChangeSpeed}
            handleChangeTrunkVolume={handleChangeTrunkVolume}
            handleChangeTorque={handleChangeTorque}
            handleChangeNewDrive={handleChangeNewDrive}
            handleChangeNewEngine={handleChangeNewEngine}
            handleChangeNewGrade={handleChangeNewGrade}
          />
        </>

        <div className="prices-container">
          <p className="prices-text-conf-main">
            Цены действительны с 29 декабря 2021 года на автомобили 2021 года
            производства. Подробную информацию уточняйте у официального дилера
            Mazda. Гарантия производителя – 3 года или 100 000 км пробега.
            Количество автомобилей по указанным ценам ограничено. Цены и
            комплектации, указанные в данном прайс-листе, могут быть изменены
            без предварительного уведомления. Информация о ценах на продукцию,
            модельном ряде и комплектациях, представленная в настоящем
            прайс-листе, носит исключительно информационный характер и не
            является офертой, в т. ч. публичной (п. 2 ст. 437 ГК РФ). Указанные
            цены могут отличаться от действующих цен у Официальных Дилеров.
            Приобретение любой продукции осуществляется в соответствии с
            условиями индивидуального договора купли-продажи. Представленная в
            прайс-листе информация о продукции также не означает, что данная
            продукция имеется в наличии у Официальных Дилеров для продажи. Для
            получения информации о наличии автомобилей, актуальных ценах, а
            также подробных сведений об автомобилях вы можете обратиться к
            Официальному Дилеру по вашему выбору.
          </p>
        </div>
      </div>

      <NewFooter />
    </>
  );
};

export default Mazda6OptionsMain;
