import React from "react";

import { func, string } from "prop-types";

import styled from "styled-components";
import Switch from "@material-ui/core/Switch";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <>
      <Switch onClick={toggleTheme} />
    </>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,

  toggleTheme: func.isRequired,
};

export default Toggle;
