import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Mazda6EquipDetailsRows.css";

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

export default function mazda6equipdetailsRows(props) {
  return (
    <div className="mazda-6-equip-det-rows">
      <div className="mazda-6-equip-det-rows-text-container">
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
              {props.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-6-equip-det-rows-text-container">
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
              {props.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-6-equip-det-rows-text-container">
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
              {props.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-6-equip-det-rows-text-container">
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
              {props.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-6-equip-det-rows-text-container">
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
              {props.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="mazda-6-equip-det-rows-text-container">
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
              {props.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
