import React, { useRef } from "react";
import "./Table.css";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { Link } from "react-router-dom";
import DialogDetailedCar from "./DialogDetailedCar";
import { DataGrid } from "@mui/x-data-grid";
import { withStyles } from "@material-ui/styles";

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important",
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
    },

    "& .MuiDataGrid-row": {
      maxHeight: "none !important",
      border: "none !important",
    },
    "& .MuiDataGrid-cell:hover": {
      color: "#202020",
    },
  },
})(DataGrid);
const columns = [
  {
    field: "id",
    headerName: "№",
    width: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "imageUrl",
    headerName: "Фото",
    width: 400,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      return (
        <div>
          <img
            src={params.row.imageUrl}
            style={{ width: "300px", height: "auto" }}
          />
        </div>
      );
    },
  },
  {
    field: "model",
    headerName: "Модель",
    width: 160,
    valueGetter: (params) => `${params.value.model1} `,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "color",
    headerName: "Цвет",
    width: 160,
    valueGetter: (params) => `${params.value.color1} `,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "price",
    headerName: "Цена",
    width: 130,
    type: "number",
    align: "center",
    headerAlign: "center",
  },
  {
    field: "releaseYear",
    headerName: "Год выпуска",
    width: 130,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "availability",
    headerName: "Доступность",
    width: 130,
    align: "center",
    headerAlign: "center",
    valueGetter: (params) =>
      params.row.availability ? "на складе" : "отсутствует",
  },
];
function TableCars(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="container-table">
      <div style={{ height: 400, width: "100%" }}>
        <StyledDataGrid
          rows={props.data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          sx={{
            boxShadow: "none",
            border: "none",
          }}
        />
      </div>
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
            <th></th>
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
                <td>
                  {" "}
                  <button
                    className="btn btn-dark mr-3"
                    //props.deleteItem(item.id);
                    onClick={handleClickOpen}
                  >
                    Подробнее
                  </button>
                </td>
                <DialogDetailedCar
                  open={open}
                  handleClickOpen={handleClickOpen}
                  handleClose={handleClose}
                />
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

export default TableCars;
