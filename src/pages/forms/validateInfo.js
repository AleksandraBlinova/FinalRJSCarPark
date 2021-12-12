export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Поле обязательно!";
  }

  if (!values.email) {
    errors.email = "Поле обязательно!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Поле заполнено неверно!";
  }

  if (!values.password) {
    errors.password = "Поле обязательно!";
  }
  
  else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/i.test(values.password)) {
    errors.password = "Пароль должен содержать минимум 6 символов, одну прописную букву, одну строчную букву, одну цифру и один символ!";
  }
 

  if (!values.password2) {
    errors.password2 = "Поле обязательно!";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Пароли не совпадают!";
  }

  return errors;
}
