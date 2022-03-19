import React, { useRef } from "react";
import "./TradeIn.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData1(nameData1, price1Data1, price2Data1) {
  return { nameData1, price1Data1, price2Data1 };
}

const rows1 = [
  createData1("Mazda6", 75000, 90000),
  createData1("Mazda CX-5 Drive", 70000, 85000),
  createData1("Mazda CX-5 Active, Supreme, Executive", 100000, 115000),
  createData1("Mazda CX-9", 110000, 125000),
];

function createData2(mazdacx30, price1Data2, price2Data2) {
  return { mazdacx30, price1Data2, price2Data2 };
}
const rows2 = [createData2("Mazda CX-30", 85000, 115000)];

function createData3(nameData3, price1Data3, price2Data3) {
  return { nameData3, price1Data3, price2Data3 };
}

const rows3 = [
  createData3("Mazda6", 30000, 45000),
  createData3("Mazda CX-5 Drive", 20000, 35000),
  createData3("Mazda CX-30", 30000, 45000),
  createData3("Mazda CX-5 Active, Supreme, Executive", 30000, 45000),
  createData3("Mazda CX-9", 40000, 55000),
];

const TradeIn = () => {
  const titleRef = useRef();
  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="trade-in-start-container">
        <h5>
          Получите максимум выгоды при покупке нового автомобиля Mazdа по
          программе Mazda Трейд-ин
        </h5>
        <h1>MAZDA ТРЕЙД-ИН</h1>

        <KeyboardArrowDownIcon
          onClick={handleBackClick}
          className="trade-in-start-container-icon"
        />
      </div>
      <div className="trade-in-main-container">
        <p ref={titleRef}>
          Настало время изменений! Только до 31 марта самый выгодный момент для
          обновления вашего автомобиля. Вы можете приобрести новые автомобили
          Mazda с дополнительной выгодой по программе Трейд-ин от Mazda.
        </p>
        <h6>
          Выгода на автомобили 2020 года выпуска в рамках программы Трейд-ин:
        </h6>
        <div className="table1">
          <TableContainer
            sx={{
              boxShadow: "none",
              marginTop: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
            component={Paper}
          >
            <Table
              sx={{
                "& td": {
                  backgroundColor: "white",
                  boxShadow: "none",
                  textAlign: "center",
                },
                "& th": {
                  backgroundColor: "white",
                  fontSize: "1rem",
                  boxShadow: "none",
                  color: "#000",
                  textAlign: "center",
                  width: "300px",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Модель</TableCell>
                  <TableCell align="right">
                    При сдаче в трейд-ин автомобиля другой марки
                  </TableCell>
                  <TableCell align="right">
                    При сдаче в трейд-ин автомобиля Mazda или Премиум марок*
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <TableRow
                    key={row.nameData1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.nameData1}
                    </TableCell>
                    <TableCell align="right">{row.price1Data1}</TableCell>
                    <TableCell align="right">{row.price2Data1}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="table2">
          <TableContainer
            sx={{
              boxShadow: "none",
              marginTop: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
            component={Paper}
          >
            <Table
              sx={{
                "& td": {
                  backgroundColor: "white",
                  boxShadow: "none",
                  textAlign: "center",
                },
                "& th": {
                  backgroundColor: "white",
                  fontSize: "1rem",
                  boxShadow: "none",
                  color: "#000",
                  textAlign: "center",
                  width: "300px",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Модель</TableCell>
                  <TableCell align="right">
                    При сдаче в трейд-ин автомобиля Mazda или другой марки
                  </TableCell>
                  <TableCell align="right">
                    При сдаче в трейд-ин автомобиля Toyota, Volkswagen** или
                    Премиум марок*
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.mazdacx30}</TableCell>
                    <TableCell align="right">{row.price1Data2}</TableCell>
                    <TableCell align="right">{row.price2Data2}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <h6>
          Выгода на автомобили 2021 года выпуска в рамках программы Трейд-ин:
        </h6>

        <div className="table3">
          {" "}
          <TableContainer
            sx={{
              boxShadow: "none",
              marginTop: "50px",
              alignItems: "center",
              justifyContent: "center",
            }}
            component={Paper}
          >
            <Table
              sx={{
                "& td": {
                  backgroundColor: "white",
                  boxShadow: "none",
                  textAlign: "center",
                },
                "& th": {
                  backgroundColor: "white",
                  fontSize: "1rem",
                  boxShadow: "none",
                  color: "#000",
                  textAlign: "center",
                  width: "300px",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>Модель</TableCell>
                  <TableCell align="right">
                    При сдаче в трейд-ин автомобиля другой марки
                  </TableCell>
                  <TableCell align="right">
                    При сдаче в трейд-ин автомобиля Mazda или Премиум марок*
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows3.map((row) => (
                  <TableRow
                    key={row.nameData3}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.nameData3}
                    </TableCell>
                    <TableCell align="right">{row.price1Data3}</TableCell>
                    <TableCell align="right">{row.price2Data3}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

      <div className="trade-in-final-container">
        <p>
          *В случае сдачи в трейд-ин а/м одной из следующих марок: Audi, BMW,
          Infiniti, Jaguar, Land Rover, Lexus, MB, Porsche, Volvo, возраст
          которого на дату сдачи в зачет не превышает 5 лет с даты первой
          регистрации в ПТС
        </p>
        <p>
          Бонус по программе Трейд-ин распространяется на новые модели Mazda и
          действует в салонах официальных дилеров ООО «МАЗДА МОТОР РУС» (далее –
          «ММР»). Согласно условиям данного предложения, покупателю
          предоставляется специальная скидка в случае передачи бывшего в
          употреблении автомобиля в трейд-ин официальному дилеру Мazda в счет
          приобретения нового автомобиля Mazda. Автомобиль с пробегом должен
          быть полнокомплектным и находиться в собственности владельца
          транспортного средства не менее 6 месяцев. Возраст автомобилей с
          пробегом российских марок (включая ЗАЗ) – не более 10 лет. Владельцем
          автомобиля с пробегом может быть физическое или юридическое лицо (в
          том числе лизинговые компании), покупающее новый автомобиль у
          официального дилера в период действия программы. Для участия в
          программе необходимо представить официальному дилеру автомобиль с
          пробегом со следующим комплектом документов: оригинал паспорта
          транспортного средства, оригинал свидетельства о регистрации
          транспортного средства. Предложение носит информационный характер, не
          является публичной офертой и ограничено наличием у официальных дилеров
          автомобилей, на которые оно распространяется. Подробную информацию по
          данному и прочим предложениям вы можете получить на сайте
          www.mazda.ru, раздел «предложения», по телефону горячей линии Mazda 8
          800 100 00 70 или в салонах официальных дилеров ООО «МАЗДА МОТОР РУС»
        </p>
      </div>
      <NewFooter />
    </>
  );
};

export default TradeIn;
