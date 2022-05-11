import React, { useState, useEffect } from "react";
import "./InsuranceCalculator.css";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import axios from "axios";

const CustomAutocomplete = styled(Autocomplete)({
  paddingTop: "10px",
  width: "245px",
  margin: "0 auto",
  "& .MuiButtonBase-root": { padding: "0px" },
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "purple",
    },
  },
});
const InsuranceRegion = (props) => {
  const cities = ["Москва", "Владимир", "Санкт-Петербург"];

  const [valueLabel, setValueLabel] = React.useState("Москва");

  const [value, setValue] = React.useState(cities[0]);

  return (
    <div className="insurance-calc-region-container">
      <>
        {" "}
        <h4>ВАШ РЕГИОН</h4>
        <CustomAutocomplete
          id="controllable-states-demo"
          options={cities}
          size="medium"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={valueLabel}
          onInputChange={(event, newInputValue) => {
            setValueLabel(newInputValue);
          }}
          renderInput={(params) => <TextField {...params} label="Город" />}
        />
      </>
    </div>
  );
};

export default InsuranceRegion;
