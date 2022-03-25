import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginLeft: theme.spacing(24),
    minWidth: 220,
    marginTop: theme.spacing(3),
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

const ReleaseYear = ({ releaseYear, setReleaseYear }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setReleaseYear(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Год выпуска</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={releaseYear}
          onChange={handleChange}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ReleaseYear;
