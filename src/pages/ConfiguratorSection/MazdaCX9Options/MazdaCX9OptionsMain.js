import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MazdaCX9OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";

const MazdaCX9OptionsMain = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="mazdacx9-options-main-container">
        <div className="mazdacx9-options-link-container">
          <Link to="/configurator" className="mazdacx9-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default MazdaCX9OptionsMain;
