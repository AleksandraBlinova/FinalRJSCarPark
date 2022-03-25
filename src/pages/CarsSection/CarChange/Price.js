import React, { useEffect } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import FormHelperText from "@material-ui/core/FormHelperText";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(2.5),
      minWidth: 220,
      "@media only screen and (max-width: 450px)": {
        minWidth: "80px",
      },
    },
  },
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
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

const Price = ({ price, setPrice }) => {
  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div>
      <div className="label">
        <FormControl>
          <InputLabel htmlFor="demo-customized-textbox">Цена </InputLabel>
          <BootstrapInput
            onChange={handleChange}
            value={price}
            id="demo-customized-textbox"
          />
          <FormHelperText>Цена</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default Price;
