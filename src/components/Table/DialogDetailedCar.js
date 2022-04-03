import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogDetailedCar = (props) => {
  console.log(props.carForEdit.model.model1);
  return (
    <Dialog
      fullScreen
      open={props.open}
      onClose={props.handleClose}
      TransitionComponent={Transition}
    >
      <AppBar
        sx={{ position: "relative" }}
        style={{ backgroundColor: "#202020", height: "70px" }}
      >
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Полная информация о выбранном автомобиле
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={props.handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <img src={props.carForEdit.imageUrl} />
        </ListItem>
        <ListItem>
          <ListItemText primary={props.carForEdit.model.model1} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={props.carForEdit.color.color1} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText secondary={props.carForEdit.price} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText secondary={props.carForEdit.releaseYear} />
        </ListItem>
      </List>
    </Dialog>
  );
};
export default DialogDetailedCar;
