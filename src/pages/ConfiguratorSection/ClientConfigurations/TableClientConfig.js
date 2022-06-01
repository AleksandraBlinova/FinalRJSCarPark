import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import axios from "axios";
import "./TableClientConfig.css";
import { Fab } from "@mui/material";
import DialogClientConfigurator from "./DialogClientConfigurator";

import {
  VKShareButton,
  VKIcon,
  TelegramShareButton,
  WhatsappShareButton,
  ViberShareButton,
  OKShareButton,
  TelegramIcon,
  WhatsappIcon,
  OKIcon,
  ViberIcon,
  MailruShareButton,
  EmailShareButton,
  MailruIcon,
  EmailIcon,
} from "react-share";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "id",
    label: "№",
  },

  {
    id: "model",
    label: "Модель",
    disableSorting: true,
  },
  {
    id: "grade",
    label: "Класс",
    disableSorting: true,
  },
  {
    id: "engine",
    label: "Объем двигателя",
    disableSorting: true,
  },
  {
    id: "drive",
    label: "Привод",
    disableSorting: true,
  },
  {
    id: "color",
    label: "Цвет экстерьера",
    disableSorting: true,
  },

  {
    id: "colorInterior",
    label: "Цвет интерьера",
    disableSorting: true,
  },
  {
    id: "price",
    label: "Цена",
  },
  {
    id: "releaseYear",
    label: "Год выпуска",
  },

  {
    id: "status",
    label: "Статус",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            style={{ color: "black" }}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "Выбраны все автомобили",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.disableSorting ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const carForEdit = props.carForEdit;
  const carForDelete = props.carForDelete;
  const { editCar } = props;
  const { handleBackClickCarsEdit } = props;
  const { deleteItem } = props;
  const carForEditColor = props.carForEditColor;
  const carForEditColorInterior = props.carForEditColorInterior;
  const role = props.role;
  const carForEditModel = props.carForEditModel;
  const carForEditEngine = props.carForEditEngine;
  const carForEditGrade = props.carForEditGrade;
  const carForEditDrive = props.carForEditDrive;
  const carForEditWarehouse = props.carForEditWarehouse;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: "#DCDDE1",
        }),
      }}
    >
      {numSelected === 1 && (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          Выберите действие
        </Typography>
      )}

      {numSelected === 1 && (
        <>
          <Tooltip title="Информация">
            <IconButton
              onClick={() => {
                handleClickOpen();
              }}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
          <DialogClientConfigurator
            open={open}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            carForEdit={carForEdit}
            carForEditColor={carForEditColor}
            carForEditColorInterior={carForEditColorInterior}
            carForEditModel={carForEditModel}
            carForEditEngine={carForEditEngine}
            carForEditGrade={carForEditGrade}
            carForEditDrive={carForEditDrive}
            carForEditWarehouse={carForEditWarehouse}
          />

          <VKShareButton
            url={`http://localhost:3000/configforsocmedia/${carForEdit.configFriendNumber}`}
            style={{ paddingRight: "10px" }}
          >
            <VKIcon size={24} round={true} />
          </VKShareButton>

          <WhatsappShareButton
            url={`http://localhost:3000/configforsocmedia/${carForEdit.configFriendNumber}`}
            style={{ paddingRight: "10px" }}
          >
            <WhatsappIcon size={24} round={true} />
          </WhatsappShareButton>

          <OKShareButton
            url={`http://localhost:3000/configforsocmedia/${carForEdit.configFriendNumber}`}
            style={{ paddingRight: "10px" }}
          >
            <OKIcon size={24} round={true} />
          </OKShareButton>

          <TelegramShareButton
            url={`http://localhost:3000/configforsocmedia/${carForEdit.configFriendNumber}`}
            style={{ paddingRight: "10px" }}
          >
            <TelegramIcon size={24} round={true} />
          </TelegramShareButton>

          <EmailShareButton
            url={`http://localhost:3000/configforsocmedia/${carForEdit.configFriendNumber}`}
            style={{ paddingRight: "10px" }}
          >
            <EmailIcon size={24} round={true} />
          </EmailShareButton>
        </>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function TableClientConfig(props) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("cars");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const [carForEdit, setCarForEdit] = React.useState();
  const [carForEditColor, setCarForEditColor] = React.useState();
  const [carForEditColorInterior, setCarForEditColorInterior] =
    React.useState();

  const [carForEditModel, setCarForEditModel] = React.useState();
  const [carForEditEngine, setCarForEditEngine] = React.useState();
  const [carForEditGrade, setCarForEditGrade] = React.useState();
  const [carForEditDrive, setCarForEditDrive] = React.useState();

  const [carForDelete, setCarForDelete] = React.useState();
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = props.myCarsConfig.map((n) => n.id);
      setSelected(newSelecteds);

      return;
    }
    setSelected([]);
  };

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row.id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    setCarForEdit(row);
    setCarForEditColor(props.colors.find((i) => i.id === row.colorId).color1);
    setCarForEditModel(
      props.gmedpOfCars.find((i) => i.modelId == row.modelId).model.model1
    );

    setCarForEditEngine(
      props.gmedpOfCars.find((i) => i.engineId == row.engineId).engine.engine1
    );
    setCarForEditGrade(
      props.gmedpOfCars.find((i) => i.gradeId == row.gradeId).grade.grade1
    );
    setCarForEditDrive(
      props.drivesOfCars.find((i) => i.id == row.driveId).drive1
    );

    setCarForEditColorInterior(
      props.colorsInterior.find((i) => i.id === row.colorInteriorId)
        .colorInterior1
    );

    setCarForDelete(row.id);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - props.myCarsConfig.length)
      : 0;

  return (
    <div className="container-table">
      <EnhancedTableToolbar
        numSelected={selected.length}
        carForEdit={carForEdit}
        carForEditColor={carForEditColor}
        carForEditColorInterior={carForEditColorInterior}
        carForDelete={carForDelete}
        carForEditModel={carForEditModel}
        carForEditEngine={carForEditEngine}
        carForEditGrade={carForEditGrade}
        carForEditDrive={carForEditDrive}
      />
      <TableContainer>
        <Table aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
          <EnhancedTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={props.myCarsConfig.length}
          />
          <TableBody>
            {stableSort(props.myCarsConfig, getComparator(order, orderBy))
              .slice(page * props.dataPerPage, page * rowsPerPage + rowsPerPage)

              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        style={{ color: "black" }}
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                        onChange={(event) => {}}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      align="center"
                    >
                      {row.id}
                    </TableCell>

                    {props.GMEDPOfCarsFlag === true && (
                      <TableCell align="center">
                        {
                          props.gmedpOfCars.find(
                            (i) => i.modelId == row.modelId
                          ).model.model1
                        }
                      </TableCell>
                    )}
                    {props.GMEDPOfCarsFlag === true && (
                      <TableCell align="center">
                        {
                          props.gmedpOfCars.find(
                            (i) => i.engineId == row.engineId
                          ).engine.engine1
                        }
                      </TableCell>
                    )}
                    {props.GMEDPOfCarsFlag === true && (
                      <TableCell align="center">
                        {
                          props.gmedpOfCars.find(
                            (i) => i.gradeId == row.gradeId
                          ).grade.grade1
                        }
                      </TableCell>
                    )}
                    {props.DOfCarsFlag == true && (
                      <TableCell align="center">
                        {
                          props.drivesOfCars.find((i) => i.id == row.driveId)
                            .drive1
                        }
                      </TableCell>
                    )}
                    {props.colorFlag === true && (
                      <TableCell align="center">
                        {props.colors.find((i) => i.id === row.colorId).color1}
                        <div>
                          <Fab
                            size="small"
                            style={{
                              background: props.colors.find(
                                (i) => i.id === row.colorId
                              ).colorView,
                            }}
                          />
                        </div>
                      </TableCell>
                    )}

                    {props.colorInFlag === true && (
                      <TableCell align="center">
                        {
                          props.colorsInterior.find(
                            (i) => i.id === row.colorInteriorId
                          ).colorInterior1
                        }
                        <div>
                          <Fab
                            size="small"
                            style={{
                              background: props.colorsInterior.find(
                                (i) => i.id === row.colorInteriorId
                              ).colorInteriorView,
                            }}
                          />
                        </div>
                      </TableCell>
                    )}

                    <TableCell align="center">{row.price}</TableCell>
                    <TableCell align="center">{row.releaseYear}</TableCell>

                    <TableCell align="center">{row.status}</TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: (dense ? 5 : 5) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={props.myCarsConfig.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Количество элементов на странице"
      />
    </div>
  );
}
