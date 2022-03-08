import React, { useState, useEffect, useContext } from "react";

import { NavBtn, NavBtnLink } from "./Button";
import { Link } from "react-router-dom";

import Toggle from "../SwitchTheme/Toggler";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../SwitchTheme/Themes";
import { useDarkMode } from "../SwitchTheme/useDarkMode";
import { GlobalStyles } from "../../components/SwitchTheme/GlobalStyles";

import axios from "axios";

import "./Navbar.css";
import { ButtonSlideMenu } from "./ButtonSlideMenu";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const [errors, setErrors] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:58475/api/Account/LogOff", {
        withCredentials: true,
      })
      .then((response) => {
        typeof response.data.error !== "undefined" &&
          setErrors(response.data.error);
        if (response.data.message === "Выполнен выход.") props.setRole(0);
      })
      .catch(console.error);
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
              Предложения
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/models" className="nav-links" onClick={closeMobileMenu}>
              Модельный ряд
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contacts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Контакты
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/configurator"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Конфигуратор
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          {props.role === 0 && (
            <NavBtn>
              <NavBtnLink to="/signin">Войти</NavBtnLink>
            </NavBtn>
          )}
          {(props.role === 1 || props.role === 2) && (
            <NavBtn onClick={handleSubmit}>
              <NavBtnLink to="/logout">Выйти</NavBtnLink>
            </NavBtn>
          )}
          <li className="nav-item-toggle">
            <Toggle theme={theme} toggleTheme={themeToggler} />
          </li>
        </ul>
      </nav>
    </ThemeProvider>
  );
}

export default Navbar;
