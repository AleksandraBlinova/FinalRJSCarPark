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

function Color({
  setColor,
  colors,
  setCurrentColor,
  currentColor,
  currentIdC,
  setCurrentColorId,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setCurrentColor(event.target.value);
  };

  useEffect(() => {
    axios({
      method: "GET",

      url: "http://localhost:7831/api/colors/",
      headers: {
        "content-type": "application/json",
        withCredentials: true,
      },
    })
      .then((response) => {
        setColor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Цвет</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          input={<Input />}
          value={currentColor}
          onChange={handleChange}
        >
          {colors.map((car, index) => (
            <MenuItem key={index} value={car.color1}>
              {car.color1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Color;
