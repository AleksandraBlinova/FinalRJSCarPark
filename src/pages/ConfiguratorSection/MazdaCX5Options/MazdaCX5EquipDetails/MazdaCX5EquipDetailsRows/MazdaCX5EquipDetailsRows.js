import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./MazdaCX5EquipDetailsRows.css";
import { ListItem } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },

  "&:hover": {
    boxShadow: "inset 0 0 0 2px #807e7e",
    transition: "all 0.2s",
    textDecoration: "none",
  },
}));

const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(
  ({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)",
    flexDirection: "row",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1),
    },
  })
);

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function mazdacx5equipdetailsRows(props) {
  return (
    <div className="mazda-cx5-equip-det-rows">
      <div className="mazda-cx5-equip-det-rows-text-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="1a-content"
            id="1a-header"
          >
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#999999",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              ИНТЕРЬЕР
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#575555",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {props.value === 0 &&
                props.interiordrive.map((interiordrive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{interiordrive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.interioractivel.map((interioractivel) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{interioractivel}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.interioractiveh.map((interioractiveh) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{interioractiveh}
                  </ListItem>
                ))}
              {props.value === 3 &&
                props.interiorsupreme.map((interiorsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{interiorsupreme}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx5-equip-det-rows-text-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="2a-content"
            id="2a-header"
          >
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#999999",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              КОМФОРТ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontFamily: "inherit" }}>
              {props.value === 0 &&
                props.comfortdrive.map((comfortdrive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;
                    {comfortdrive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.comfortactivel.map((comfortactivel) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{comfortactivel}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.comfortactiveh.map((comfortactiveh) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{comfortactiveh}
                  </ListItem>
                ))}
              {props.value === 3 &&
                props.comfortsupreme.map((comfortsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{comfortsupreme}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx5-equip-det-rows-text-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="3a-content"
            id="3a-header"
          >
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#999999",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              БЕЗОПАСНОСТЬ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontFamily: "inherit" }}>
              {props.value === 0 &&
                props.safetydrive.map((safetydrive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{safetydrive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.safetyactivel.map((safetyactivel) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{safetyactivel}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.safetyactiveh.map((safetyactiveh) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{safetyactiveh}
                  </ListItem>
                ))}
              {props.value === 3 &&
                props.safetysupreme.map((safetysupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{safetysupreme}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx5-equip-det-rows-text-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="4a-content"
            id="4a-header"
          >
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#999999",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              ПРИБОРЫ ОСВЕЩЕНИЯ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#575555",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {props.value === 0 &&
                props.lightdrive.map((lightdrive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{lightdrive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.lightactivel.map((lightactivel) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{lightactivel}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.lightactiveh.map((lightactiveh) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{lightactiveh}
                  </ListItem>
                ))}
              {props.value === 3 &&
                props.lightsupreme.map((lightsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{lightsupreme}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx5-equip-det-rows-text-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="5a-content"
            id="5a-header"
          >
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#999999",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              КОЛЕСНЫЕ ДИСКИ И ШИНЫ
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#575555",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              {props.value === 0 &&
                props.wtdrive.map((wtdrive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{wtdrive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.wtactivel.map((wtactivel) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{wtactivel}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.wtactiveh.map((wtactiveh) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{wtactiveh}
                  </ListItem>
                ))}
              {props.value === 3 &&
                props.wtsupreme.map((wtsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{wtsupreme}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx5-equip-det-rows-text-container">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="6a-content"
            id="6a-header"
          >
            <Typography
              style={{
                fontFamily: "inherit",
                color: "#999999",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              АУДИОАППАРАТУРА
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ fontFamily: "inherit" }}>
              {props.value === 0 &&
                props.audiodrive.map((audiodrive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{audiodrive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.audioactivel.map((audioactivel) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{audioactivel}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.audioactiveh.map((audioactiveh) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{audioactiveh}
                  </ListItem>
                ))}
              {props.value === 3 &&
                props.audiosupreme.map((audiosupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{audiosupreme}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
