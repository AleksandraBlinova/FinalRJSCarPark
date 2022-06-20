import React, { useRef, useState, useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import "./Mazda6FormNewConfigGED.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(0),
    minWidth: 240,

    marginTop: theme.spacing(2),
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

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2.5),
      minWidth: 240,

      "@media only screen and (max-width: 450px)": {
        minWidth: "80px",
      },
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #999",
    fontSize: 20,
    height: 30,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

const Mazda6FormNewConfigGED = (props) => {
  const [currentRole, setCurrentRole] = useState(localStorage.getItem("role"));

  const classes = useStyles();

  const [openEngine, setOpenEngine] = useState(false);

  const handleChangeOpenEngine = () => {
    setOpenEngine(!openEngine);
  };

  const [openGrade, setOpenGrade] = useState(false);

  const handleChangeOpenGrade = () => {
    setOpenGrade(!openGrade);
  };

  const [openDrive, setOpenDrive] = useState(false);

  const handleChangeOpenDrive = () => {
    setOpenDrive(!openDrive);
  };

  const [newGEDIsSent, setNewGEDIsSent] = useState(false);
  const [senderCheck, setSenderCheck] = useState(false);

  function setNewSenderCheck(newValue) {
    setNewGEDIsSent(newValue);
    if ((openDrive || openEngine || openGrade) && newValue)
      setSenderCheck(true);
  }
  return (
    <div>
      {currentRole == 2 && (
        <>
          <div className="add-model-new-config">
            <h2>Добавление новой конфигурации</h2>
            <div className="car-change-container-cards-main-add-new-config">
              <form
                className="form-container-cards-main-add-new-config"
                //onSubmit={handleSubmit}
              >
                <div className="fields-new-config">
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-mutiple-name-label2">
                        Mazda 6
                      </InputLabel>
                      <Select
                        labelId="demo-mutiple-name-label2"
                        id="demo-mutiple-name2"
                        input={<Input />}
                        disabled
                      ></Select>
                    </FormControl>
                  </div>
                  {props.currentPerformanceF && (
                    <div>
                      <FormControl className={classes.formControl}>
                        <FormControl>
                          <InputLabel htmlFor="demo-customized-textbox">
                            Объем топливного бака
                          </InputLabel>
                          <BootstrapInput
                            disabled={!openEngine && !openGrade && !openDrive}
                            onChange={props.handleChangeFuelCapacity}
                            value={
                              openEngine == false &&
                              openGrade == false &&
                              openDrive == false
                                ? parseInt(
                                    props.currentPerformance.map((option) =>
                                      option.map((i) => i.fuelCapacity)
                                    )
                                  )
                                : props.newFuelCapacity
                            }
                            id="demo-customized-textbox"
                          />
                        </FormControl>{" "}
                      </FormControl>
                    </div>
                  )}

                  <div>
                    {openEngine == false && (
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-name-label">
                          Тип двигателя
                        </InputLabel>
                        <Select
                          labelId="demo-mutiple-name-label"
                          id="demo-mutiple-name"
                          input={<Input />}
                          value={props.currentIdEng}
                          onChange={props.handleChangeEngine}
                        >
                          {props.gedF &&
                            props.engines.map((car, index) => (
                              <MenuItem key={index} value={car.id}>
                                {car.engine1}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    )}

                    {openEngine && (
                      <FormControl className={classes.formControl}>
                        <FormControl>
                          <InputLabel htmlFor="demo-customized-textbox">
                            Тип двигателя
                          </InputLabel>
                          <BootstrapInput
                            value={props.newEngine}
                            id="demo-customized-textbox"
                            onChange={props.handleChangeNewEngine}
                          />
                        </FormControl>{" "}
                      </FormControl>
                    )}

                    <Tooltip title="Добавить новый тип двигателя">
                      <IconButton
                        onClick={() => {
                          handleChangeOpenEngine();
                        }}
                      >
                        <AddIcon
                          style={{
                            fontSize: "32px",
                            paddingTop: "6px",
                            paddingLeft: "5px",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                  {props.currentPerformanceF && (
                    <div>
                      <FormControl className={classes.formControl}>
                        <FormControl>
                          <InputLabel htmlFor="demo-customized-textbox">
                            Объем багажника
                          </InputLabel>
                          <BootstrapInput
                            disabled={!openEngine && !openGrade && !openDrive}
                            onChange={props.handleChangeTrunkVolume}
                            value={
                              openEngine == false &&
                              openGrade == false &&
                              openDrive == false
                                ? parseInt(
                                    props.currentPerformance.map((option) =>
                                      option.map((i) => i.trunkVolume)
                                    )
                                  )
                                : props.newTrunkVolume
                            }
                            id="demo-customized-textbox"
                          />
                        </FormControl>{" "}
                      </FormControl>
                    </div>
                  )}

                  <div>
                    {openGrade == false && (
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-name-label2">
                          Класс
                        </InputLabel>
                        <Select
                          labelId="demo-mutiple-name-label2"
                          id="demo-mutiple-name2"
                          input={<Input />}
                          onChange={props.handleChangeGrade}
                          value={props.currentIdGr}
                        >
                          {props.currentIdEng !== "" &&
                            props.grades.map((grade, index) => (
                              <MenuItem key={index} value={grade.id}>
                                {grade.grade1}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    )}

                    {openGrade && (
                      <FormControl className={classes.formControl}>
                        <FormControl>
                          <InputLabel htmlFor="demo-customized-textbox">
                            Класс
                          </InputLabel>
                          <BootstrapInput
                            value={props.newGrade}
                            onChange={props.handleChangeNewGrade}
                            id="demo-customized-textbox"
                            //onChange={props.handleChangeRecommendedFuel}
                          />
                        </FormControl>{" "}
                      </FormControl>
                    )}
                    <Tooltip title="Добавить новый класс">
                      <IconButton
                        onClick={() => {
                          handleChangeOpenGrade();
                        }}
                      >
                        <AddIcon
                          style={{
                            fontSize: "32px",
                            paddingTop: "6px",
                            paddingLeft: "5px",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                  {props.currentPerformanceF && (
                    <div>
                      <FormControl className={classes.formControl}>
                        <FormControl>
                          <InputLabel htmlFor="demo-customized-textbox">
                            Смешанный цикл
                          </InputLabel>
                          <BootstrapInput
                            disabled={!openEngine && !openGrade && !openDrive}
                            onChange={props.handleChangeMixedCycle}
                            value={
                              openEngine == false &&
                              openGrade == false &&
                              openDrive == false
                                ? parseInt(
                                    props.currentPerformance.map((option) =>
                                      option.map((i) => i.mixedCycle)
                                    )
                                  )
                                : props.newMixedCycle
                            }
                            id="demo-customized-textbox"
                          />
                        </FormControl>{" "}
                      </FormControl>
                    </div>
                  )}
                  <div>
                    {openDrive == false && (
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-name-label2">
                          Привод
                        </InputLabel>
                        <Select
                          labelId="demo-mutiple-name-label2"
                          id="demo-mutiple-name2"
                          input={<Input />}
                          onChange={props.handleChangeDrive}
                          value={props.currentDriveId}
                        >
                          {props.currentIdEng !== "" &&
                            props.currentIdGr !== "" &&
                            props.drives.map((drive, index) => (
                              <MenuItem key={index} value={drive.id}>
                                {drive.drive1}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    )}
                    {openDrive && (
                      <FormControl className={classes.formControl}>
                        <FormControl>
                          <InputLabel htmlFor="demo-customized-textbox">
                            Привод
                          </InputLabel>
                          <BootstrapInput
                            value={props.newDrive}
                            id="demo-customized-textbox"
                            onChange={props.handleChangeNewDrive}
                          />
                        </FormControl>{" "}
                      </FormControl>
                    )}
                    <Tooltip title="Добавить новый привод">
                      <IconButton
                        onClick={() => {
                          handleChangeOpenDrive();
                        }}
                      >
                        <AddIcon
                          style={{
                            fontSize: "32px",
                            paddingTop: "6px",
                            paddingLeft: "5px",
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </div>
                  {props.currentPerformanceF && (
                    <>
                      <div>
                        <FormControl className={classes.formControl}>
                          <FormControl>
                            <InputLabel htmlFor="demo-customized-textbox">
                              Рекомендуемое топливо
                            </InputLabel>
                            <BootstrapInput
                              disabled={!openEngine && !openGrade && !openDrive}
                              onChange={props.handleChangeRecommendedFuel}
                              value={
                                openEngine == false &&
                                openGrade == false &&
                                openDrive == false
                                  ? props.currentPerformance
                                      .map((option) =>
                                        option.map((i) => i.recommendedFuel)
                                      )
                                      .toString()
                                  : props.newRecommendedFuel
                              }
                              id="demo-customized-textbox"
                            />
                          </FormControl>{" "}
                        </FormControl>
                      </div>
                      {props.currentTransmF && (
                        <div>
                          <FormControl className={classes.formControl}>
                            <InputLabel id="demo-mutiple-name-label2">
                              Трансмиссия
                            </InputLabel>
                            <Select
                              labelId="demo-mutiple-name-label2"
                              id="demo-mutiple-name2"
                              input={<Input />}
                              onChange={props.handleChangeTransm}
                              value={props.currentTransmId}
                            >
                              {props.currentIdEng !== "" &&
                                props.currentIdGr !== "" &&
                                props.currentDriveId !== "" &&
                                props.transm.map((drive, index) => (
                                  <MenuItem key={index} value={drive.id}>
                                    {drive.transmission1}
                                  </MenuItem>
                                ))}
                            </Select>
                          </FormControl>
                        </div>
                      )}

                      <div>
                        <FormControl className={classes.formControl}>
                          <FormControl>
                            <InputLabel htmlFor="demo-customized-textbox">
                              Макс.скорость (км/ч){" "}
                            </InputLabel>
                            <BootstrapInput
                              disabled={!openEngine && !openGrade && !openDrive}
                              onChange={props.handleChangeSpeed}
                              value={
                                openEngine == false &&
                                openGrade == false &&
                                openDrive == false
                                  ? parseInt(
                                      props.currentPerformance.map((option) =>
                                        option.map((i) => i.speed)
                                      )
                                    )
                                  : props.newSpeed
                              }
                              id="demo-customized-textbox"
                            />
                          </FormControl>{" "}
                        </FormControl>
                      </div>

                      <div>
                        {(openDrive || openEngine || openGrade) && (
                          <button
                            className="btn-new-config"
                            onClick={() => setNewSenderCheck(true)}
                          >
                            Применить
                          </button>
                        )}
                      </div>

                      <div>
                        <FormControl className={classes.formControl}>
                          <FormControl>
                            <InputLabel htmlFor="demo-customized-textbox">
                              Мощность (л.с.){" "}
                            </InputLabel>
                            <BootstrapInput
                              disabled={!openEngine && !openGrade && !openDrive}
                              onChange={props.handleChangeHp}
                              value={
                                openEngine == false &&
                                openGrade == false &&
                                openDrive == false
                                  ? parseInt(
                                      props.currentPerformance.map((option) =>
                                        option.map((i) => i.hp)
                                      )
                                    )
                                  : props.newHP
                              }
                              id="demo-customized-textbox"
                            />
                          </FormControl>{" "}
                        </FormControl>
                      </div>
                      <div></div>
                      <div>
                        <FormControl className={classes.formControl}>
                          <FormControl>
                            <InputLabel htmlFor="demo-customized-textbox">
                              Время разгона (с){" "}
                            </InputLabel>
                            <BootstrapInput
                              disabled={!openEngine && !openGrade && !openDrive}
                              onChange={props.handleChangeAccelerationTime}
                              value={
                                openEngine == false &&
                                openGrade == false &&
                                openDrive == false
                                  ? parseInt(
                                      props.currentPerformance.map((option) =>
                                        option.map((i) => i.accelerationTime)
                                      )
                                    )
                                  : props.newAccelerationTime
                              }
                              id="demo-customized-textbox"
                            />
                          </FormControl>{" "}
                        </FormControl>
                      </div>
                      <div></div>
                      <div>
                        <FormControl className={classes.formControl}>
                          <FormControl>
                            <InputLabel htmlFor="demo-customized-textbox">
                              Крутящийся момент{" "}
                            </InputLabel>
                            <BootstrapInput
                              disabled={!openEngine && !openGrade && !openDrive}
                              onChange={props.handleChangeTorque}
                              value={
                                openEngine == false &&
                                openGrade == false &&
                                openDrive == false
                                  ? parseInt(
                                      props.currentPerformance.map((option) =>
                                        option.map((i) => i.torque)
                                      )
                                    )
                                  : props.newTorque
                              }
                              id="demo-customized-textbox"
                            />
                          </FormControl>{" "}
                        </FormControl>
                      </div>
                    </>
                  )}
                </div>

                <div>
                  {(senderCheck ||
                    openDrive == true ||
                    openGrade == true ||
                    openEngine == true) && (
                    <button className="btn-new-config">Применить</button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Mazda6FormNewConfigGED;
