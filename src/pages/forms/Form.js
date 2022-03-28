import React, { useState } from "react";
import Formsignup from "./FormSignUp";
import FormSuccess from "./FormSuccess";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [errors, setErrors] = useState([]);

  function submitForm({ username, email, password, password2 }) {
    const values = {
      username: username,
      email: email,
      password: password,
      passwordConfirm: password2,
    };

    axios
      .post("http://localhost:7831/api/Account/Register", values, {
        withCredentials: true,
      })
      .then((response) => {
        typeof response.data.error !== "undefined" &&
          setErrors(response.data.error);
      })
      .catch(console.error);

    setIsSubmitted(true);
  }

  return (
    <>
      <div>
        <div className="form-container">
          <img
            src="mobile_ksp_1800x809_design.jpg"
            alt="promo"
            className="form-img"
          />
          <a href="/" className="close-btn">
            x
          </a>
          {!isSubmitted ? (
            <Formsignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
