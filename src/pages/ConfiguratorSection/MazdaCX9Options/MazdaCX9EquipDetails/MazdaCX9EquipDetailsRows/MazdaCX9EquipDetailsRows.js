import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./MazdaCX9EquipDetailsRows.css";
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

export default function mazdacx9equipdetailsRows(props) {
  return (
    <div className="mazda-cx9-equip-det-rows">
      <div className="mazda-cx9-equip-det-rows-text-container">
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
                props.interioractive.map((interioractive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{interioractive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.interiorsupreme.map((interiorsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{interiorsupreme}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.interiorex.map((interiorex) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{interiorex}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx9-equip-det-rows-text-container">
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
                props.comfortactive.map((comfortactive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{comfortactive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.comfortsupreme.map((comfortsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{comfortsupreme}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.comfortex.map((comfortex) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{comfortex}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx9-equip-det-rows-text-container">
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
                props.safetyactive.map((safetyactive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{safetyactive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.safetysupreme.map((safetysupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{safetysupreme}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.safetyex.map((safetyex) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{safetyex}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx9-equip-det-rows-text-container">
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
                props.lightactive.map((lightactive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{lightactive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.lightsupreme.map((lightsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{lightsupreme}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.lightex.map((lightex) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{lightex}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx9-equip-det-rows-text-container">
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
                props.wtactive.map((wtactive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{wtactive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.wtsupreme.map((wtsupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{wtsupreme}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.wtex.map((wtex) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{wtex}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-cx9-equip-det-rows-text-container">
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
                props.audioactive.map((audioactive) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{audioactive}
                  </ListItem>
                ))}
              {props.value === 1 &&
                props.audiosupreme.map((audiosupreme) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{audiosupreme}
                  </ListItem>
                ))}
              {props.value === 2 &&
                props.audioex.map((audioex) => (
                  <ListItem>
                    <CircleIcon style={{ fontSize: "9px", color: "#999999" }} />
                    &nbsp; &nbsp;{audioex}
                  </ListItem>
                ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
