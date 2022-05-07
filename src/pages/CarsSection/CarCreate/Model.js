import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(24),
    minWidth: 220,
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

function Model({
  models,
  setCurrentModel,
  currentIdM,
  setCurrentModelId,
  grades,
  setGrades,
  setCurrentGrade,
  currentIdGr,
  setCurrentGradeId,
  setCurrentDrive,
  currentIdDr,
  setCurrentDriveId,
  engines,
  setEngines,
  setCurrentEngine,
  currentIdEng,
  setCurrentEngineId,
  loadFlag,
  gmed,
  setCurrentPerformanceId,
  originalDrives,
  drives,
  setDrives,
  setColorInterior,
  colorsInterior,
}) {
  const classes = useStyles();
  const handleChange = (event) => {
    setCurrentModel(event.target.value);
    setCurrentModelId(event.target.value);

    setEngines(
      gmed
        .filter((item) => item.modelId == event.target.value)
        .map((i) => i.engine)
        .reduce((o, c) => {
          const exist = o.find(
            (item) => item.id === c.id && item.engine1 === c.engine1
          );
          if (!exist) {
            const options = engines
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
    setCurrentEngine(event.target.value);
    setCurrentEngineId(event.target.value);
    setGrades(
      gmed
        .filter(
          (item) =>
            item.engineId == event.target.value && item.modelId === currentIdM
        )
        .map((i) => i.grade)
        .reduce((o, c) => {
          const exist = o.find(
            (item) => item.id === c.id && item.grade1 === c.grade1
          );
          if (!exist) {
            const options = grades
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
      drives.filter(
        (m) =>
          m.id ==
          gmed
            .filter(
              (i) =>
                i.modelId == currentIdM &&
                i.engineId == currentIdEng &&
                i.gradeId == event.target.value
            )
            .map((k) => k.driveId)
      )
    );

    setColorInterior(
      colorsInterior
        .filter(
          (item) =>
            item.modelId == currentIdM && item.gradeId == event.target.value
        )
        .map((k) => k.colorInterior)
    );

    if (
      gmed
        .filter(
          (i) =>
            i.modelId == currentIdM &&
            i.engineId == currentIdEng &&
            i.gradeId == event.target.value
        )
        .map((k) => k.driveId).length == 2
    )
      setDrives(originalDrives);
  };

  const handleChangeDrive = (event) => {
    setCurrentDrive(event.target.value);
    setCurrentDriveId(event.target.value);

    setCurrentPerformanceId(
      gmed
        .filter(
          (i) =>
            i.modelId == currentIdM &&
            i.engineId == currentIdEng &&
            i.gradeId == currentIdGr &&
            i.driveId == event.target.value
        )
        .map((k) => k.performance.map((o) => o.id))
    );
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Модель</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          input={<Input />}
          onChange={handleChange}
          value={currentIdM}
        >
          {loadFlag === true &&
            models.map((model) => (
              <MenuItem key={model.id} value={model.id}>
                {model.model1}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label2">Тип двигателя</InputLabel>
        <Select
          labelId="demo-mutiple-name-label2"
          id="demo-mutiple-name2"
          input={<Input />}
          onChange={handleChangeEngine}
          value={currentIdEng}
        >
          {loadFlag === true &&
            currentIdM !== "" &&
            engines.map((engine, index) => (
              <MenuItem key={index} value={engine.id}>
                {engine.engine1}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label2">Класс</InputLabel>
        <Select
          labelId="demo-mutiple-name-label2"
          id="demo-mutiple-name2"
          input={<Input />}
          onChange={handleChangeGrade}
          value={currentIdGr}
        >
          {" "}
          {loadFlag === true &&
            currentIdM !== "" &&
            currentIdEng !== "" &&
            grades.map((grade, index) => (
              <MenuItem key={index} value={grade.id}>
                {grade.grade1}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label2">Привод</InputLabel>
        <Select
          labelId="demo-mutiple-name-label2"
          id="demo-mutiple-name2"
          input={<Input />}
          onChange={handleChangeDrive}
        >
          {loadFlag === true &&
            currentIdM !== "" &&
            currentIdEng !== "" &&
            currentIdGr !== "" &&
            drives.map((drive, index) => (
              <MenuItem key={index} value={(drive.drive1, drive.id)}>
                {drive.drive1}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Model;
