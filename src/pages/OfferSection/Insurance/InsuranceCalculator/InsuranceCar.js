import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import "./InsuranceCalculator.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";

import cx52019_deepcrystalblue_kr8g_902min from "../insurancemodelsphotos/cx5-2019_deepcrystalblue_kr8g_902min.png";
import cx9_machinegrey_tm46903 from "../insurancemodelsphotos/cx-9_machinegrey_tm46903.png";
import mazda6_soulred_gcaf901 from "../insurancemodelsphotos/mazda6_soulred_gcaf901.png";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 220,
    marginTop: theme.spacing(5),
    "@media only screen and (max-width: 660px)": {
      marginLeft: "50px",
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
const InsuranceCar = (props) => {
  const classes = useStyles();
  const [activeButt, setActiveButt] = useState(0);
  const handleButtChange = (newValue) => {
    setActiveButt(newValue);
  };

  const [curMId, setCurMId] = useState();
  const [curENId, setCurENId] = useState();
  const [curGRId, setCurGRId] = useState();
  const handleChangeModel = (event) => {
    props.setCurrentModel(event.target.value);

    props.setCurrentModelId(event.target.value);
    handleButtChange(event.target.value);

    props.setCurrentEngineId("");
    props.setCurrentDriveId("");
    props.setCurrentGradeId("");
    props.setCurrenEngine("");
    props.setCurrentCost("");
    props.setCurrenGrade("");
    props.setCurrenDrive("");
    props.setEnginesInsurance(
      props.gmedIns
        .filter((item) => item.modelId == event.target.value)
        .map((i) => i.engine)
        .reduce((o, c) => {
          const exist = o.find(
            (item) => item.id === c.id && item.engine1 === c.engine1
          );
          if (!exist) {
            const options = props.enginesInsurance
              .filter((item) => item.id === c.id && item.engine1 === c.engine1)
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
  };

  const handleChangeEngine = (event) => {
    props.setCurrenEngine(event.target.value);
    props.setCurrentEngineId(event.target.value);

    props.setCurrentDriveId("");
    props.setCurrentGradeId("");
    props.setCurrentCost("");
    props.setCurrenGrade("");
    props.setCurrenDrive("");
    props.setGradesInsurance(
      props.gmedIns
        .filter(
          (item) =>
            item.engineId == event.target.value &&
            item.modelId == props.currentIdM
        )
        .map((i) => i.grade)
        .reduce((o, c) => {
          const exist = o.find(
            (item) => item.id === c.id && item.grade1 === c.grade1
          );
          if (!exist) {
            const options = props.gradesInsurance
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
    props.setCurrenGrade(event.target.value);
    props.setCurrentGradeId(event.target.value);
    props.setCurrentDriveId("");
    props.setCurrentCost("");
    props.setCurrenDrive("");

    props.setCurrenDrive(
      props.drivesInsurance.filter(
        (m) =>
          m.id ==
          props.gmedIns
            .filter(
              (i) =>
                i.modelId == props.currentIdM &&
                i.engineId == props.currentIdEng &&
                i.gradeId == event.target.value
            )
            .map((k) => k.driveId)
      )
    );

    if (
      props.gmedIns
        .filter(
          (i) =>
            i.modelId == props.currentIdM &&
            i.engineId == props.currentIdEng &&
            i.gradeId == event.target.value
        )
        .map((k) => k.driveId).length == 2
    )
      props.setCurrenDrive(props.originalDrivesInc);
  };

  const handleChangeDrive = (event) => {
    props.setCurrentDriveId(event.target.value);
    props.setCurrentCost(
      props.gmedIns
        .filter(
          (i) =>
            i.modelId == props.currentIdM &&
            i.engineId == props.currentIdEng &&
            i.gradeId == props.currentIdGr &&
            i.driveId == event.target.value
        )
        .map((c) => c.cost)
    );
    props.setCurrentCostFlag(true);
  };

  return (
    <div>
      <Divider />
      <div className="insurance-calc-car-container-h4">
        {" "}
        <h4>ВЫБЕРИТЕ АВТОМОБИЛЬ</h4>
      </div>

      <div className="insurance-calc-car-container">
        <div>
          <List>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#000",
                fontWeight: "500",
                paddingLeft: "60px",
                paddingTop: "40px",
              }}
            >
              Модель
            </Typography>
            <ListItemText>
              {props.loadIncFlag == true &&
                props.modelsInsurance.map((m) => (
                  <div className="insurance-calc-car-container-checkboxes">
                    <Radio
                      sx={{
                        color: "#999999",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                      onChange={handleChangeModel}
                      checked={m.id == props.currentIdM}
                      value={m.id}
                    />{" "}
                    <Typography>Mazda {m.model1}</Typography>
                  </div>
                ))}
            </ListItemText>
          </List>
          <div classname="engine-ins">
            <Typography
              sx={{
                fontSize: "16px",
                color: "#000",
                fontWeight: "500",
                paddingLeft: "60px",
                paddingTop: "80px",
              }}
            >
              Двигатель
            </Typography>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label2">
                Тип двигателя
              </InputLabel>
              <Select
                labelId="demo-mutiple-name-label2"
                id="demo-mutiple-name2"
                input={<Input />}
                onChange={handleChangeEngine}
                value={props.currentIdEng}
              >
                {props.loadIncFlag === true &&
                  props.currentIdM !== "" &&
                  props.enginesInsurance.map((engine, index) => (
                    <MenuItem key={index} value={engine.id}>
                      {engine.engine1}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div>
          <div>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#000",
                fontWeight: "500",

                paddingTop: "40px",
              }}
            >
              Комплектация
            </Typography>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-mutiple-name-label2">Класс</InputLabel>
              <Select
                labelId="demo-mutiple-name-label2"
                id="demo-mutiple-name2"
                input={<Input />}
                onChange={handleChangeGrade}
                value={props.currentIdGr}
              >
                {" "}
                {props.loadIncFlag === true &&
                  props.currentIdM !== "" &&
                  props.currentIdEng !== "" &&
                  props.gradesInsurance.map((grade, index) => (
                    <MenuItem key={index} value={grade.id}>
                      {grade.grade1}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <div>
            {" "}
            <Typography
              sx={{
                fontSize: "16px",
                color: "#000",
                fontWeight: "500",
                paddingLeft: "10px",
                paddingTop: "150px",
              }}
            >
              Привод
            </Typography>
            {props.loadIncFlag == true &&
              props.loadIncDriveFlag == true &&
              props.currentIdM !== "" &&
              props.currentIdEng !== "" &&
              props.currentIdGr !== "" &&
              props.currentDrive.map((d) => (
                <div className="insurance-calc-car-container-checkboxes">
                  <Checkbox
                    sx={{
                      color: "#999999",
                      "&.Mui-checked": {
                        color: "#000",
                      },
                    }}
                    onChange={handleChangeDrive}
                    checked={d.id == props.currentIdDr}
                    value={d.id}
                  />{" "}
                  <Typography> {d.drive1}</Typography>
                </div>
              ))}
          </div>
        </div>
        <div className="images-ins">
          {activeButt == 1 && <img src={mazda6_soulred_gcaf901} />}
          {activeButt == 2 && <img src={cx52019_deepcrystalblue_kr8g_902min} />}
          {activeButt == 3 && <img src={cx9_machinegrey_tm46903} />}
          {activeButt !== 0 && <p>Стоимость конфигурации</p>}
          {activeButt !== 0 &&
            props.currentCostFlag !== false &&
            props.currentCost.length !== 0 && (
              <h4>{props.currentCost} &nbsp;&nbsp;₽</h4>
            )}
        </div>
      </div>
    </div>
  );
};

export default InsuranceCar;
