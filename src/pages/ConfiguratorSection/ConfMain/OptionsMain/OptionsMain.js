import React from "react";
import "./OptionsMain.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const OptionsMain = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value1, setValue1] = React.useState([1843000, 4099000]);

  return (
    <div className="options-main-container">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#5d07a3",
            },
          }}
        >
          <Tab value="one" label="Все" />
          <Tab value="two" label="Седан" />
          <Tab value="three" label="Кроссовер" />
        </Tabs>
      </Box>
      <div className="price-options-text">
        <p>
          Цена:&ensp;&ensp;{value1[0]}&nbsp;₽&nbsp;-&nbsp;{value1[1]}&nbsp;₽
        </p>
      </div>
    </div>
  );
};

export default OptionsMain;
