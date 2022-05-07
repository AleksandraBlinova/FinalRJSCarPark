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

function ColorInterior({
  setColorInterior,
  colorsInterior,
  setCurrentColorInterior,
  currentColorInterior,
  currentIdCInterior,
  setCurrentColorIdInterior,
  currentIdM,
  currentIdGr,
}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setCurrentColorInterior(event.target.value);
    setCurrentColorIdInterior(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Цвет интерьера</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          input={<Input />}
          value={(currentColorInterior, currentIdCInterior)}
          onChange={handleChange}
        >
          {currentIdGr !== "" &&
            currentIdM !== "" &&
            colorsInterior.map((car, index) => (
              <MenuItem key={index} value={(car.colorInterior1, car.id)}>
                {car.colorInterior1}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ColorInterior;
