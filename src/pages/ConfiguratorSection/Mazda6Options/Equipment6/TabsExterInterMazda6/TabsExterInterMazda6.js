import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "000",
  padding: "6px 12px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#fff",
  borderColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
    borderColor: "#fff",
    boxShadow: "none",
    color: "000",
    fontSize: "18px",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#fff",
    borderColor: "#fff",
    color: "000",
  },
  "&:focus": {
    boxShadow: "none",
    color: "000",
  },
}));
const TabsExterInterMazda6 = (props) => {
  const [value, setValue] = React.useState(props.typeofsectionTabs);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [hrefTabs, setHrefTabs] = React.useState("");

  const hangeChangeHref = (newHref) => {
    setHrefTabs(newHref);
  };
  return (
    <div>
      {props.linktoTabs === "DRIVE" && hangeChangeHref("/mazda6interiordrive")}
      {props.linktoTabs === "ACTIVE" &&
        hangeChangeHref("/mazda6interioractive")}
      {props.linktoTabs === "SUPREME PLUS" &&
        hangeChangeHref("/mazda6interiorsupremeplus")}

      <div className="mazda6-equip-tabs-main-container">
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            variant="fullWidth"
            onChange={handleChange}
            aria-label="nav tabs example"
            textColor="inherit"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#5d07a3",
              },
            }}
          >
            <Link to={hrefTabs}>
              <ColorButton style={{ textDecoration: "none", color: "#000" }}>
                ИНТЕРЬЕР
              </ColorButton>
            </Link>
            <Link to="/mazda6exterior">
              <ColorButton style={{ textDecoration: "none", color: "#000" }}>
                ЭКСТЕРЬЕР
              </ColorButton>
            </Link>
          </Tabs>
        </Box>
      </div>
    </div>
  );
};

export default TabsExterInterMazda6;
