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
  return (
    <div className="insurance-calc-region-container">
      <>
        {" "}
        <h4>ВАШ РЕГИОН</h4>
        <CustomAutocomplete
          id="controllable-states-demo"
          options={props.cities}
          size="medium"
          value={props.value}
          onChange={(event, newValue) => {
            props.setValue(newValue);
          }}
          inputValue={props.valueLabel}
          onInputChange={(event, newInputValue) => {
            props.setValueLabel(newInputValue);
          }}
          renderInput={(params) => <TextField {...params} label="Город" />}
        />
      </>
    </div>
  );
};

export default InsuranceRegion;
