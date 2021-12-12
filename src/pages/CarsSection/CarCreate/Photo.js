import React from "react";
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

const Photo = ({ photo, setPhoto }) => {
  const handleChange = (event) => {
    setPhoto(event.target.files[0]);
  };
  return (
    <div>
      <div className="label">
        <FormControl value={photo} onChange={handleChange}>
          <InputLabel htmlFor="demo-customized-textbox">Фото</InputLabel>
          <BootstrapInput id="demo-customized-textbox" type="file"  accept="image/*,.jpeg,.jpg"/>
          <FormHelperText>Путь расположения фото автомобиля</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default Photo;
