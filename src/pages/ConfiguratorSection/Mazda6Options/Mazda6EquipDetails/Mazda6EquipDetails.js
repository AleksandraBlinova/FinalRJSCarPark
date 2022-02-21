import React, { useState } from "react";
import "./Mazda6EquipDetails.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import Mazda6EquipDetailsRows from "./Mazda6EquipDetailsRows/Mazda6EquipDetailsRows";
import {
  InteriorDrive,
  InteriorActive,
  InteriorSupremePlus,
  ComfortActive,
  ComfortDrive,
  ComfortSupremePlus,
  SafetyActive,
  SafetyDrive,
  SafetySupremePlus,
  LightingDevicesActive,
  LightingDevicesDrive,
  LightingDevicesSupremePlus,
  WheelsAndTiresActive,
  WheelsAndTiresDrive,
  WheelsAndTiresSupremePlus,
  AudioActive,
  AudioDrive,
  AudioSupremePlus,
} from "../Mazda6EquipDetails/Mazda6EquipDetailsRows/Mazda6EquipDetailsRowsLists";

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

const Mazda6EquipDetails = () => {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="mazda6-equip-main-container">
        <div className="mazda6-equip-h2-closelink">
          <h2>MAZDA6</h2>
          <Link to="/mazda6config" className="mazda6-equip-details-link">
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>

        <div className="mazda6-equip-tabs-main-container">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                variant="fullWidth"
                onChange={handleChange}
                textColor="inherit"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#5d07a3",
                  },
                }}
              >
                <Tab
                  label="DRIVE"
                  {...a11yProps(0)}
                  style={{ fontFamily: "Segoe UI" }}
                />

                <Tab
                  label="ACTIVE"
                  {...a11yProps(1)}
                  style={{ fontFamily: "Segoe UI" }}
                />
                <Tab
                  label="SUPREME PLUS"
                  {...a11yProps(2)}
                  style={{ fontFamily: "Segoe UI" }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
          </Box>
        </div>
        <div>
          <Mazda6EquipDetailsRows
            interiordrive={InteriorDrive}
            interioractive={InteriorActive}
            interiorsupreme={InteriorSupremePlus}
            comfortdrive={ComfortDrive}
            comfortactive={ComfortActive}
            comfortsupreme={ComfortSupremePlus}
            safetydrive={SafetyDrive}
            safetyactive={SafetyActive}
            safetysupreme={SafetySupremePlus}
            lightdrive={LightingDevicesDrive}
            lightactive={LightingDevicesActive}
            lightsupreme={LightingDevicesSupremePlus}
            wtdrive={WheelsAndTiresDrive}
            wtactive={WheelsAndTiresActive}
            wtsupreme={WheelsAndTiresSupremePlus}
            audiodrive={AudioDrive}
            audioactive={AudioActive}
            audiosupreme={AudioSupremePlus}
            value={value}
          />
        </div>
        <div className="mazda6-equip-details-prices-container">
          <p className="mazda6-equip-details-prices-text">
            Цены действительны с 29 декабря 2021 года на автомобили 2021 года
            производства. Подробную информацию уточняйте у официального дилера
            Mazda. Гарантия производителя – 3 года или 100 000 км пробега.
            Количество автомобилей по указанным ценам ограничено. Цены и
            комплектации, указанные в данном прайс-листе, могут быть изменены
            без предварительного уведомления. Информация о ценах на продукцию,
            модельном ряде и комплектациях, представленная в настоящем
            прайс-листе, носит исключительно информационный характер и не
            является офертой, в т. ч. публичной (п. 2 ст. 437 ГК РФ). Указанные
            цены могут отличаться от действующих цен у Официальных Дилеров.
            Приобретение любой продукции осуществляется в соответствии с
            условиями индивидуального договора купли-продажи. Представленная в
            прайс-листе информация о продукции также не означает, что данная
            продукция имеется в наличии у Официальных Дилеров для продажи. Для
            получения информации о наличии автомобилей, актуальных ценах, а
            также подробных сведений об автомобилях вы можете обратиться к
            Официальному Дилеру по вашему выбору.
          </p>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Mazda6EquipDetails;
