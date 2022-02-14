import React from "react";
import "./OptionsMain.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardsMain from "../CardsMain/CardsMain";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const OptionsMain = (props) => {
  const [value, setValue] = React.useState(0);
  const [disabled, setDisabled] = React.useState(true);
  const [statusSedan, setStatusSedan] = React.useState("sedan");
  const [statusCrossover, setStatusCrossover] = React.useState("crossover");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="options-main-container">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
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
            <Tab
              label="Все"
              {...a11yProps(0)}
              style={{ fontFamily: "Segoe UI" }}
            />

            <Tab
              label="Седан"
              {...a11yProps(1)}
              style={{ fontFamily: "Segoe UI" }}
            />
            <Tab
              label="Кроссовер"
              {...a11yProps(2)}
              style={{ fontFamily: "Segoe UI" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <CardsMain />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CardsMain disabled={disabled} status={statusSedan} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CardsMain status={statusCrossover} disabled={disabled} />
        </TabPanel>
      </Box>
    </div>
  );
};

export default OptionsMain;
