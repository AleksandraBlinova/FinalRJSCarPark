import React from "react";
import "./InsuranceCalculator.css";
import Autocomplete from "@mui/material/Autocomplete";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

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
const InsuranceCalculator = () => {
  const regions = ["Москва и МО", "Владимир", "Санкт-Петербург"];

  const engines = ["Москва и МО", "Владимир", "Санкт-Петербург"];

  const [valueLabel, setValueLabel] = React.useState("Москва");

  const [value, setValue] = React.useState(regions[0]);
  return (
    <>
      <div className="insurance-calc-start-container">
        <h2>MAZDA СТРАХОВАНИЕ</h2>
      </div>
      <div className="insurance-calc-region-container">
        <h4>ВАШ РЕГИОН</h4>
        <CustomAutocomplete
          id="controllable-states-demo"
          options={regions}
          size="medium"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={valueLabel}
          onInputChange={(event, newInputValue) => {
            setValueLabel(newInputValue);
          }}
          renderInput={(params) => <TextField {...params} label="Регион" />}
        />
      </div>

      <div className="insurance-calc-choose-car-container">
        <h4>ВЫБЕРИТЕ АВТОМОБИЛЬ</h4>
        <div>
          <CustomAutocomplete
            id="controllable-states-demo"
            options={regions}
            size="medium"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={valueLabel}
            onInputChange={(event, newInputValue) => {
              setValueLabel(newInputValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Двигатель" />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default InsuranceCalculator;
