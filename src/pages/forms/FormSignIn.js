import React, { useState } from "react";
import axios from 'axios';
import { result } from "lodash";
import FormSuccessLog from './FormSuccessLog';

const FormSignIn = ({ errors, email, password, setPassword, setEmail}) => {
  
   
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        
    };


    
    return (
        <div className="form-content-right">
        
        <form className="form" >
    
        <h1>Вход</h1>
        <div className="form-inputs">
        <label htmlFor='email' 
        className='form-label'>
       Email
        </label>
        <input
        type="email"
         name="email"
          className='form-input'
          placeholder="Введите ваш email" 
          value={email}
          onChange={handleEmailChange}/>
         
        </div>

        <div className="form-inputs">
        <label htmlFor='password' 
        className='form-label'>
       Пароль
        </label>
        <input
        type="password"
         name="password"
          className='form-input'
          placeholder="Пароль" 
          value={password}
          onChange={handlePasswordChange}/>
        
        </div>
       <div className="ErrorText">
        {errors}

        {errors.forEach(({ errorValue, index }) => (
            <div  key={"error"+index}>
                {errorValue}
            </div>
        ))}
        </div>
       
        <button className="form-input-btn" type="submit" >Войти</button>
        <span className="form-input-login">
        Вернуться на страницу регистрации можно<a href ="/signin"> здесь</a>
       
        </span>
       
        </form>
       
            
        </div>
       
  );
};

export default FormSignIn;
