import React, { useState } from "react";
import FormSignIn from "./FormSignIn";
import FormSuccessLog from "./FormSuccessLog";
import CloseIcon from "@mui/icons-material/Close";

import "./Form.css";
import axios from "axios";
import { Link } from "react-router-dom";

const FormL = (props) => {
  const [isLog, setLog] = useState(false);
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
          setLog(true);
          setNameofUser(response.data.message);

          if (
            response.data.message ===
            "Выполнен вход пользователем: admin@mail.com"
          )
            props.setRole(2);
          else props.setRole(1);
          props.handleSetCurrentUserEmail(email);
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

        {!isLog ? (
          <FormSignIn
            errors={errors}
            setErrors={setErrors}
            email={email}
            password={password}
            setPassword={handleSetPassword}
            setEmail={handleSetEmaill}
          />
        ) : (
          <FormSuccessLog NameofUser={NameofUser} />
        )}
      </div>
    </div>
  );
};
export default FormL;
