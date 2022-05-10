import React from "react";
import useForm from "./UseForm";
import validate from "./validateInfo";
import "./Form.css";
import { Link } from "react-router-dom";

const Formsignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    () => submitForm(values),
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Регистрация</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">
            Имя пользователя*
          </label>
          <input
            type="text"
            name="username"
            className="form-input"
            placeholder="Введите ваше имя"
            value={values.username}
            onChange={handleChange}
          />

          {errors.username && <p>{errors.username}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email*
          </label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Введите ваш email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Пароль*
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Пароль"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">
            Подтверждение пароля*
          </label>
          <input
            type="password"
            name="password2"
            className="form-input"
            placeholder="Повторно введите пароль"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>

        <button className="form-input-btn" type="submit">
          Зарегистироваться
        </button>
        <span className="form-input-login">
          Уже зарегистрированы? Войдите на сайт<Link to="/login"> здесь</Link>
        </span>
      </form>
    </div>
  );
};

export default Formsignup;
