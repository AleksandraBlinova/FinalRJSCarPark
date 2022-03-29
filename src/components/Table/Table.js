import React, { useRef } from "react";
import "./Table.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Link } from "react-router-dom";

function Table(props) {
  return (
    <div className="container-table">
      <MDBTable autoWidth responsive>
        <MDBTableHead>
          <tr>
            <th ref={props.titleRefCarsCreateToTable}>№ Автомобиля</th>
            <th ref={props.titleRefCarsEditToTable}>Фото</th>
            <th>Модель</th>
            <th>Цвет</th>
            <th>Цена</th>
            <th>Год выпуска</th>
            <th>Доступность</th>
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
