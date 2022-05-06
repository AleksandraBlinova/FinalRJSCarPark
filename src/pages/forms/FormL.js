import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import FormSuccessLog from "./FormSuccessLog";
import CloseIcon from "@mui/icons-material/Close";

import "./Form.css";
import axios from "axios";
import { Link } from "react-router-dom";

const FormL = (props) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [NameofUser, setNameofUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = { email: email, password: password };

    axios
      .post("http://localhost:7831/api/Account/Login", value, {
        withCredentials: true,
      })
      .then((response) => {
        typeof response.data.error !== "undefined" &&
          setErrors(response.data.error);

        if (!response.data.error) {
          props.setLog(true);
          setNameofUser(response.data.message);
          localStorage.setItem("isLog", true);
          props.handleSetCurrentUserEmail(email);

          if (
            response.data.message ===
            "Выполнен вход пользователем: admin@mail.com"
          ) {
            props.setRole(2);
            localStorage.setItem("role", 2);
          } else {
            props.setRole(1);
            localStorage.setItem("role", 1);
          }
        }
      })
      .catch(console.error);
  };

  const handleSetEmaill = (data) => {
    setEmail(data);
  };
  const handleSetPassword = (data) => {
    setPassword(data);
  };

  return (
    <div>
      <div className="form-container" onSubmit={handleSubmit}>
        <img
          src="mobile_ksp_1800x809_design.jpg"
          alt="promo"
          className="form-img"
        />

        {!props.isLog ? (
          <FormSignIn
            errors={errors}
            setErrors={setErrors}
            email={email}
            password={password}
            setPassword={handleSetPassword}
            setEmail={handleSetEmaill}
          />
        ) : (
          <FormSuccessLog
            NameofUser={localStorage.getItem("CurrentUserEmail")}
          />
        )}
      </div>
    </div>
  );
};
export default FormL;
