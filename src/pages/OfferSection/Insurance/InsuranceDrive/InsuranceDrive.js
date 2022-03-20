import React from "react";
import "./InsuranceDrive.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const InsuranceDrive = () => {
  function createData1(nameData1, price1Data1, price2Data1) {
    return { nameData1, price1Data1, price2Data1 };
  }

  const rows1 = [
    createData1("Mazda6", "4,20%", "3,86%"),
    createData1("Mazda CX-5", "2,45%", "2,50%*"),
  ];
  return (
    <>
      <div className="insurance-drive-start-container">
        <h3 style={{ color: "white" }}>MAZDA СТРАХОВАНИЕ ДРАЙВ!</h3>
      </div>
      <div className="insurance-drive-main-container">
        <h4
          style={{
            color: "black",
            fontSize: "22px",
            fontFamily: "inherit",
            paddingBottom: "20px",
          }}
        >
          УМНОЕ РЕШЕНИЕ ДЛЯ ТЕХ, У КОГО В СПИСКЕ ДОПУЩЕННЫХ К УПРАВЛЕНИЮ ЕСТЬ
          МОЛОДЫЕ ВОДИТЕЛИ
        </h4>
        <p
          style={{
            color: "black",
          }}
        >
          Примеры тарифов по программе:
        </p>
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
                  width: "200px",
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell rowSpan={2}>Модель/Партнер</TableCell>
                  <TableCell align="center" colSpan={2}>
                    Тариф КАСКО
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="right">Росгосстрах</TableCell>
                  <TableCell align="right">Ингосстрах</TableCell>
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
        <p
          style={{
            color: "black",
            paddingTop: "100px",
            textAlign: "left",
            lineHeight: "25px",
          }}
        >
          Программа "Mazda Страхование Драйв!" действительна при условии
          приобретения новых автомобилей Mazda в салонах официальных дилеров
          Mazda – участников программы «Mazda Страхование». Расчет стоимости
          договора на первый год страхования. Условия программы: Фиксированный
          Тариф страхования КАСКО. Требования к минимальному возрасту/стажу
          лица, допущенного к управлению автомобилем -отсутствуют. Срок
          страхования – 1 год. Страхование рисков «Угон» и «Полная гибель» –
          стоимость не должна превышать действительную стоимость застрахованного
          имущества, страхование рисков повреждения автомобиля (Ущерб) в случае
          «ДТП по вине Страхователя/ЛДУ» с установленной 3-ей стороной – 1 раз в
          течение срока страхования. Максимальный лимит возмещения составляет:
          до 150 тысяч рублей при проведении ремонта у официального дилера ООО
          «МАЗДА МОТОР РУС» или до 75 тысяч рублей при проведении ремонта на
          авторизованной страховой компанией СТОА. Страховые тарифы
          действительны для всех регионов РФ. Программа «Mazda Страхование»
          реализуется в партнерстве с ПАО СК «Росгосстрах», лицензия СИ № 0001,
          выдана Центральным банком Российской Федерации (Банк России) 23 мая
          2016 года и СПАО «Ингосстрах», лицензия ЦБ РФ на осуществление
          страхования СИ №0928 от 23.09.2015 без ограничения срока действия.
          Срок действия программы не ограничен при условии наличия автомобилей у
          официального дилера ООО «МАЗДА МОТОР РУС» – участника программы «Mazda
          Страхование». Доступны иные варианты расчета тарифа КАСКО. Подробная
          информация о программе «Mazda Страхование» размещена на сайте:
          www.mazda.ru, раздел Mazda Страхование, а также в салонах официальных
          дилеров Mazda-участников программы «Mazda Страхование». Данное
          предложение не является публичной офертой, определяемой положениями
          статьи 437 (2) Гражданского кодекса Российской Федерации.
        </p>

        <p
          style={{
            color: "black",
            paddingTop: "30px",
            textAlign: "left",
            lineHeight: "25px",
          }}
        >
          *в г. Москве и Московской области тариф действителен в случае, если ТС
          оборудовано противоугонной системой.
        </p>
      </div>
      <NewFooter />
    </>
  );
};

export default InsuranceDrive;
