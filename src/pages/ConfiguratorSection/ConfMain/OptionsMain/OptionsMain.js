import React, { useRef, useState } from "react";
import "./OptionsMain.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardsMain from "../CardsMain/CardsMain";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

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

  const titleRefCarsEdit = useRef();
  function handleBackClickCarsEdit() {
    titleRefCarsEdit.current.scrollIntoView({ behavior: "smooth" });
  }

  const titleRefCarsCreate = useRef();
  function handleBackClickCarsCreate() {
    titleRefCarsCreate.current.scrollIntoView({ behavior: "smooth" });
  }

  const titleRefCarsEditToTable = useRef();
  function handleBackClickCarsEditToTable() {
    titleRefCarsEditToTable.current.scrollIntoView({ behavior: "smooth" });
  }

  const titleRefCarsCreateToTable = useRef();
  function handleBackClickCarsCreateToTable() {
    titleRefCarsCreateToTable.current.scrollIntoView({ behavior: "smooth" });
  }

  const [currentRole, setCurrentRole] = useState(localStorage.getItem("role"));

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
        {currentRole == 2 && (
          <Tooltip
            title="Добавить модель"
            ref={titleRefCarsCreateToTable}
            style={{ float: "right" }}
          >
            <IconButton
              onClick={() => {
                handleBackClickCarsCreate();
              }}
            >
              <AddIcon style={{ fontSize: "30px" }} />
            </IconButton>
          </Tooltip>
        )}

        <TabPanel value={value} index={0}>
          <CardsMain
            titleRefCarsCreate={titleRefCarsCreate}
            handleBackClickCarsCreate={handleBackClickCarsCreate}
            titleRefCarsEdit={titleRefCarsEdit}
            handleBackClickCarsEdit={handleBackClickCarsEdit}
            titleRefCarsCreateToTable={titleRefCarsCreateToTable}
            titleRefCarsEditToTable={titleRefCarsEditToTable}
            handleBackClickCarsCreateToTable={handleBackClickCarsCreateToTable}
            handleBackClickCarsEditToTable={handleBackClickCarsEditToTable}
            currentRole={currentRole}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CardsMain
            disabled={disabled}
            status={statusSedan}
            titleRefCarsCreate={titleRefCarsCreate}
            handleBackClickCarsCreate={handleBackClickCarsCreate}
            titleRefCarsEdit={titleRefCarsEdit}
            handleBackClickCarsEdit={handleBackClickCarsEdit}
            titleRefCarsCreateToTable={titleRefCarsCreateToTable}
            titleRefCarsEditToTable={titleRefCarsEditToTable}
            handleBackClickCarsCreateToTable={handleBackClickCarsCreateToTable}
            handleBackClickCarsEditToTable={handleBackClickCarsEditToTable}
            currentRole={currentRole}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CardsMain
            status={statusCrossover}
            disabled={disabled}
            titleRefCarsCreate={titleRefCarsCreate}
            handleBackClickCarsCreate={handleBackClickCarsCreate}
            titleRefCarsEdit={titleRefCarsEdit}
            handleBackClickCarsEdit={handleBackClickCarsEdit}
            titleRefCarsCreateToTable={titleRefCarsCreateToTable}
            titleRefCarsEditToTable={titleRefCarsEditToTable}
            handleBackClickCarsCreateToTable={handleBackClickCarsCreateToTable}
            handleBackClickCarsEditToTable={handleBackClickCarsEditToTable}
            currentRole={currentRole}
          />
        </TabPanel>
      </Box>
    </div>
  );
};

export default OptionsMain;
