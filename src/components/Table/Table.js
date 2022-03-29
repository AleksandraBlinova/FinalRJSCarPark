import React, { useRef } from "react";
import "./Table.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Link } from "react-router-dom";

function Table(props) {
  console.log(props.data);
  console.log(
    " item.model.vehicleEquip.map((k) => k.speed)",
    props.data.map((i) => i.model.vehicleEquip.map((k) => k.speed))
  );
  return (
    <div className="container-table">
      <MDBTable autoWidth responsive>
        <MDBTableHead>
          <tr>
            <th ref={props.titleRefCarsCreateToTable}>№</th>
            <th ref={props.titleRefCarsEditToTable}>Фото</th>
            <th>Модель</th>
            <th>Цвет</th>
            <th>Цена</th>
            <th>Год выпуска</th>
            <th>Доступность</th>
            <th>Скорость</th>
            <th>Мощность, л.с.</th>
            <th>Крутящийся момент</th>
            <th>Объем двигателя, л.</th>
            <th>Время разгона</th>
            <th>Смешанный цикл</th>
            <th>Объем багажника</th>
            <th>Объем топливного бака, л.</th>
            <th>Рекомендуемое топливо</th>
            {props.role === 2 && <th></th>}
            {props.role === 2 && <th></th>}
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {props.data
            .filter(
              (i) =>
                i.price.toString().indexOf(props.search) !== -1 ||
                i.model.model1.toLocaleLowerCase().indexOf(props.search) !==
                  -1 ||
                i.color.color1.toLocaleLowerCase().indexOf(props.search) !== -1
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img src={item.imageUrl} />
                </td>
                <td>{item.model.model1}</td>
                <td>{item.color.color1}</td>
                <td>{item.price}</td>
                <td>{item.releaseYear}</td>
                <td>{item.availability ? "на складе" : "отсутствует"}</td>
                <td>{item.model.vehicleEquip.map((k) => k.speed)}</td>
                <td>{item.model.vehicleEquip.map((k) => k.hp)}</td>
                <td>{item.model.vehicleEquip.map((k) => k.torque)}</td>
                <td>{item.model.vehicleEquip.map((k) => k.equipType)}</td>
                <td>
                  {item.model.vehicleEquip.map((k) => k.accelerationTime)}
                </td>
                <td>{item.model.vehicleEquip.map((k) => k.mixedCycle)}</td>
                <td>{item.model.vehicleEquip.map((k) => k.trunkVolume)}</td>
                <td>{item.model.vehicleEquip.map((k) => k.fuelCapacity)}</td>
                <td>{item.model.vehicleEquip.map((k) => k.recommendedFuel)}</td>
                {props.role === 2 && (
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        props.deleteItem(item.id);
                      }}
                    >
                      Удалить
                    </button>
                  </td>
                )}
                {props.role === 2 && (
                  <td>
                    {" "}
                    <button
                      onClick={(e) => {
                        props.editCar(item);
                        props.handleBackClickCarsEdit();
                      }}
                      className="btn btn-dark mr-3"
                    >
                      Изменить
                    </button>
                  </td>
                )}
              </tr>
            ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default Table;
