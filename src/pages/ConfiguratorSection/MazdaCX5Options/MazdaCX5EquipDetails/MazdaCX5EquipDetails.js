import React, { useState } from "react";
import "./MazdaCX5EquipDetails.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import MazdaCX5EquipDetailsRows from "./MazdaCX5EquipDetailsRows/MazdaCX5EquipDetailsRows";
import {
  InteriorDrive,
  InteriorActiveLight,
  InteriorActiveHard,
  InteriorSupreme,
  ComfortActiveLight,
  ComfortActiveHard,
  ComfortDrive,
  ComfortSupreme,
  SafetyActiveLight,
  SafetyActiveHard,
  SafetyDrive,
  SafetySupreme,
  LightingDevicesActiveLight,
  LightingDevicesActiveHard,
  LightingDevicesDrive,
  LightingDevicesSupreme,
  WheelsAndTiresActiveLight,
  WheelsAndTiresActiveHard,
  WheelsAndTiresDrive,
  WheelsAndTiresSupreme,
  AudioActiveLight,
  AudioActiveHard,
  AudioDrive,
  AudioSupreme,
} from "../MazdaCX5EquipDetails/MazdaCX5EquipDetailsRows/MazdaCX5EquipDetailsRowsLists";

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

const MazdaCX5EquipDetails = (props) => {
  const [value, setValue] = React.useState(props.location.propsSearch);
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="mazdacx5-equip-main-container">
        <div className="mazdacx5-equip-h2-closelink">
          <h2>MAZDA CX-5</h2>
          <Link to="/mazdacx5config" className="mazdacx5-equip-details-link">
            Закрыть {hover ? <MdClose className="" /> : <MdClose />}
          </Link>
        </div>

        <div className="mazdacx5-equip-tabs-main-container">
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
                  label="ACTIVE"
                  {...a11yProps(2)}
                  style={{ fontFamily: "Segoe UI" }}
                />
                <Tab
                  label="SUPREME"
                  {...a11yProps(3)}
                  style={{ fontFamily: "Segoe UI" }}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}></TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
            <TabPanel value={value} index={3}></TabPanel>
          </Box>
        </div>
        <div>
          <MazdaCX5EquipDetailsRows
            interiordrive={InteriorDrive}
            interioractivel={InteriorActiveLight}
            interioractiveh={InteriorActiveHard}
            interiorsupreme={InteriorSupreme}
            comfortdrive={ComfortDrive}
            comfortactivel={ComfortActiveLight}
            comfortactiveh={ComfortActiveHard}
            comfortsupreme={ComfortSupreme}
            safetydrive={SafetyDrive}
            safetyactivel={SafetyActiveLight}
            safetyactiveh={SafetyActiveHard}
            safetysupreme={SafetySupreme}
            lightdrive={LightingDevicesDrive}
            lightactivel={LightingDevicesActiveLight}
            lightactiveh={LightingDevicesActiveHard}
            lightsupreme={LightingDevicesSupreme}
            wtdrive={WheelsAndTiresDrive}
            wtactivel={WheelsAndTiresActiveLight}
            wtactiveh={WheelsAndTiresActiveHard}
            wtsupreme={WheelsAndTiresSupreme}
            audiodrive={AudioDrive}
            audioactivel={AudioActiveLight}
            audioactiveh={AudioActiveHard}
            audiosupreme={AudioSupreme}
            value={value}
          />
        </div>
        <div className="mazdacx5-equip-details-prices-container">
          <p className="mazdacx5-equip-details-prices-text">
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

export default MazdaCX5EquipDetails;
