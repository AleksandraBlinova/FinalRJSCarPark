import React, { useState, useEffect, useContext } from "react";

import { NavBtn, NavBtnLink } from "./Button";
import { Link } from "react-router-dom";

import Toggle from "../SwitchTheme/Toggler";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../SwitchTheme/Themes";
import { useDarkMode } from "../SwitchTheme/useDarkMode";
import { GlobalStyles } from "../../components/SwitchTheme/GlobalStyles";

import Badge from "@mui/material/Badge";

import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

import axios from "axios";

import "./Navbar.css";
import { ButtonSlideMenu } from "./ButtonSlideMenu";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiIconButton-root": {
    padding: "0px",
  },
}));

const BootstrapButton = styled(Button)({
  borderColor: "#807e7e",
  boxShadow: "inset 0 0 0 1.5px #807e7e",
  textTransform: "none",
  fontSize: 20,
  width: "25ch",
  backgroundColor: "#0063cc",
  color: "#450505",
  padding: "15px 22px",
  border: "0.5px solid",
  lineHeight: 1.5,
  borderRadius: "0px",
  float: "right",
  textDecoration: "none",
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
  "&:hover": {
    borderColor: "#7e57c2",
    boxShadow: "inset 0 0 0 2.5px #7e57c2",
    transition: "all 0.2s",
    textDecoration: "none",
    color: "#673ab7",
  },
});

const BootstrapLink = styled(Link)({ color: "#000" });

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            float: "right",
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    axios
      .post("http://localhost:7831/api/Account/LogOff", {
        withCredentials: true,
      })
      .then((response) => {
        typeof response.data.error !== "undefined" &&
          setErrors(response.data.error);
        if (response.data.message === "???????????????? ??????????.") {
          props.setRole(0);
          props.handleSetCurrentUserEmail("");
          props.setLog(false);
          localStorage.setItem("isLog", false);
          localStorage.setItem("role", 0);
        }
      })
      .catch(console.error);
  };

  const [openDialogConfig, setOpenDialogConfig] = useState(false);

  const handleSetDialogConfigClose = () => {
    setOpenDialogConfig(false);
  };

  const handleSetOpenDialogConfig = () => {
    setOpenDialogConfig(true);
  };

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src="favicon.ico" style={{ width: 50, height: 50 }} alt="logo" />
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/offers" className="nav-links" onClick={closeMobileMenu}>
              ??????????????????????
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/models" className="nav-links" onClick={closeMobileMenu}>
              ???????????????????? ?? ??????????????
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              ????????????????
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/configurator"
              className="nav-links"
              onClick={() => {
                closeMobileMenu();
                handleSetOpenDialogConfig(true);
              }}
            >
              ????????????????????????
            </Link>
          </li>

          {props.isLog == true && props.role == 2 && (
            <li className="nav-item">
              <Link
                to="/adminconfig"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ????????????????????????
              </Link>
            </li>
          )}

          {props.isLog == true && props.role == 1 && (
            <li className="nav-item">
              <Link
                to="/myconfig"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ?????? ????????????????????????
              </Link>
            </li>
          )}
          <li>
            {props.isLog == false && props.role == 0 && (
              <Link
                to="/signin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                ??????????????????????
              </Link>
            )}
          </li>
          <li>
            {" "}
            {props.isLog == true && (props.role == 1 || props.role == 2) && (
              <Link
                to="/logout"
                className="nav-links-mobile"
                onClick={() => {
                  closeMobileMenu();
                  handleSubmit();
                }}
              >
                ??????????
              </Link>
            )}
          </li>
          {props.isLog == false && props.role == 0 && (
            <NavBtn>
              <NavBtnLink to="/signin">??????????????????????</NavBtnLink>
            </NavBtn>
          )}
          {props.isLog == true && (props.role == 1 || props.role == 2) && (
            <NavBtn onClick={handleSubmit}>
              <NavBtnLink to="/logout">??????????</NavBtnLink>
            </NavBtn>
          )}
          <li className="nav-item-toggle">
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </li>
        </ul>
      </nav>
      {props.role == 0 && props.isLog == false && (
        <div>
          <BootstrapDialog
            onClose={handleSetDialogConfigClose}
            aria-labelledby="customized-dialog-title"
            open={openDialogConfig}
          >
            <BootstrapDialogTitle
              id="customized-dialog-title"
              onClose={handleSetDialogConfigClose}
            >
              ???????????????????? ?????? ???????????????? MAZDA
            </BootstrapDialogTitle>
            <DialogContent dividers>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "black",
                  fontFamily: "Tahoma, Geneva, Verdana, sans-serif",
                  paddingBottom: "5px",
                  fontWeight: "600",
                }}
                gutterBottom
              >
                ???????????????? ???????????? ???? ?????????????????????????????? ???????????????????????? ?????????? ????????????
                ?????????? ??????????????????????!
              </Typography>
              <BootstrapLink to="/signin">
                <BootstrapButton autoFocus onClick={handleSetDialogConfigClose}>
                  ?????????????????? ??????????????????????
                </BootstrapButton>
              </BootstrapLink>
            </DialogContent>
          </BootstrapDialog>
        </div>
      )}
    </ThemeProvider>
  );
}

export default Navbar;
