import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { MenuItems } from "./MenuItems";
import { FaTimes, FaBars } from "react-icons/fa";
import { Button } from "./Button";

const NavBar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };
  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <a href="/">
          <img src="favicon.ico" style={{ width: 50, height: 50 }} />
        </a>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i>
          {state ? (
            <FaTimes className="fa-times" />
          ) : (
            <FaBars className="fa-bars" />
          )}
        </i>
      </div>
      <ui className={state ? "nav-menu-active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ui>
      <Button>Sign In</Button>
    </nav>
  );
};

export default NavBar;
