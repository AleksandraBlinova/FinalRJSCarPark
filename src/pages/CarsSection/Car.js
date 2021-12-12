import "./Car.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table/Table";
import { TableSearch } from "../../components/Table/TableSearch";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";




const Car = ({
  cars,//все машины
  setCars,// метод для загрузки в таблицу всех машин
  removeCar,//удалить машинку
  editCar,//изменить машинку
  currentcar,// текущая (выбранная) машинка
  setcurrentCar, // подгрузить данные для выбранной машинки
  role,//роль (менеджер, гость или клиент)
}) => {
  const [loading, setLoading] = useState(false);//устанавливаем false для загрузочной полосы
  const [search, setSearch] = useState("");//для поиска по машинкам
 
  useEffect(() => {
    setLoading(true);//устанавливаем true для загрузочной полосы
    axios({//оправляем запрос на получение машинок
      method: "GET",
      url: "http://localhost:58475/api/cars/",
      headers: {
        "content-type": "application/json", withCredentials: true,
      },
    })
      .then((response) => {
        setCars(response.data);//используем метод setCars для подгрузки авто в таблицу 
        setLoading(false);//устанавливаем false для загрузочной полосы (она больше не нужна)
      })
      .catch((error) => {
        console.log(error);// если есть ошибки - выводим
        setLoading(false);
      });
  }, []);


  const deleteItem = (id) => {//удаление машинки
    //e.stopPropagation();
    axios({//посылаем запрос
      method: "DELETE",
      url: `http://localhost:58475/api/cars/${id}`,
      headers: {
        "content-type": "application/json", withCredentials: true,
      },
     
    })
    .then(() => {
      removeCar(id);//используем метод removeCar и передаем туда айди
   })
   .catch(console.error);
  };

  const showLoading = () =>//показать загрузочную полосу (компонент LinearProgress material ui)
    loading ? (
      <div>
        <LinearProgress color="secondary" />
      </div>
    ) : null;

  //показать загрузочную полосу (компонент LinearProgress material ui)
  //TableSearch - для поиска по машинам
  //Table - таблица с машинами
  return (
    <React.Fragment>
      <h1 className="h1">Модельный ряд</h1>

      {showLoading()}

     

          <TableSearch
            search={search}
            handleChangeSearch={(value) => setSearch(value)}
          />
          <Table
            search={search}
            data={cars}
            deleteItem={deleteItem}
            editCar={editCar}
            currentcar={currentcar}
            setcurrentCar={setcurrentCar}
            role={role}
          />
        
    </React.Fragment>
  );
};

export default Car;
