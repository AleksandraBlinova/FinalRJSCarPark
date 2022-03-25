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
  setModel,
  models,
  currentModel,
  setCurrentModel,
  currentIdM,
  setCurrentModelId,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setCurrentModelId(event.target.value);
    setCurrentModel(event.target.value);
  };

  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:58475/api/models/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setModel(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Модель</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          input={<Input />}
          value={currentIdM}
          onChange={handleChange}
        >
          {models.map((car, index) => (
            <MenuItem key={index} value={car.id}>
              {car.model1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Model;
