import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mazda6OptionsMain.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import { MdArrowBack } from "react-icons/md";

const Mazda6OptionsMain = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <div className="mazda6-options-main-container">
        <div className="mazda6-options-link-container">
          <Link to="/configurator" className="mazda6-options-link">
            {hover ? <MdArrowBack className="" /> : <MdArrowBack />}
            &nbsp; Назад
          </Link>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Mazda6OptionsMain;
