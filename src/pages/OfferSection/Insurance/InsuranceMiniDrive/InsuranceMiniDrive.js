import React from "react";
import "./InsuranceMiniDrive.css";
import { NewFooter } from "../../../../components/New Footer/NewFooter";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const InsuranceMiniDrive = () => {
  function createData1(name1, name2, name3, name4) {
    return { name1, name2, name3, name4 };
  }

  const rows1 = [
    createData1("Mazda6", "Mazda CX-5", "Mazda CX-30", "Mazda CX-9"),
  ];

  function createData2(name1, name2, name3, name4) {
    return { name1, name2, name3, name4 };
  }

  const rows2 = [createData2("1,22%", "1,32%", "0,72%", "0,73%")];

  function createData3(name1, name2, name3, name4) {
    return { name1, name2, name3, name4 };
  }

  const rows3 = [createData3("1,22%", "0,72%", "0,62%", "0,63%")];
  return (
    <>
      <div className="insurance-mini-drive-start-container">
        <h3 style={{ color: "white" }}>MAZDA СТРАХОВАНИЕ МИНИ ДРАЙВ!</h3>
      </div>
      <div className="insurance-mini-drive-main-container">
        <p
          style={{
            color: "black",
            fontFamily: "inherit",
            paddingBottom: "20px",
          }}
        >
          Программа «Mazda Страхование Мини Драйв!» – это самый доступный
          вариант страхования КАСКО, полностью покрывающий основные риски, при
          этом возраст и стаж владельца, как и стоимость автомобиля, не влияет
          на тариф. Программа «Mazda Страхование Мини Драйв!» – это входной
          билет в страхование КАСКО для Mazda, доступный каждому!
        </p>
        <p
          style={{
            color: "black",
          }}
        >
          Примеры тарифов по программе «Mazda Страхование Мини Драйв!»:
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
                  <TableCell colSpan={4}>Москва</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <TableRow
                    key={row.name1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.name1}</TableCell>
                    <TableCell align="right">{row.name2}</TableCell>
                    <TableCell align="right">{row.name3}</TableCell>
                    <TableCell align="right">{row.name4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={4}>Тариф КАСКО*</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows2.map((row) => (
                  <TableRow
                    key={row.name1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.name1}</TableCell>
                    <TableCell align="right">{row.name2}</TableCell>
                    <TableCell align="right">{row.name3}</TableCell>
                    <TableCell align="right">{row.name4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={4}>Регионы РФ</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows1.map((row) => (
                  <TableRow
                    key={row.name1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.name1}</TableCell>
                    <TableCell align="right">{row.name2}</TableCell>
                    <TableCell align="right">{row.name3}</TableCell>
                    <TableCell align="right">{row.name4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={4}>Тариф КАСКО*</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows3.map((row) => (
                  <TableRow
                    key={row.name1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{row.name1}</TableCell>
                    <TableCell align="right">{row.name2}</TableCell>
                    <TableCell align="right">{row.name3}</TableCell>
                    <TableCell align="right">{row.name4}</TableCell>
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
          * Программа "Mazda Страхование Мини-Драйв!" действительна при условии
          приобретения новых автомобилей Mazda в салонах официальных дилеров
          Mazda – участников программы «Mazda Страхование». Расчет стоимости
          договора на первый год страхования. Условия программы: Тариф от 0,62%
          в зависимости от выбранной модели Mazda и региона РФ; риски «Угон, без
          документов и ключей», «Полная гибель ТС». Требования к минимальному
          возрасту/стажу лица, допущенного к управлению автомобилем
          -отсутствуют. Территория покрытия: все регионы РФ за исключением
          Волгоградской и Ивановской области, Ставропольского края. Срок
          страхования – 1 год. Страхование рисков «Угон» и «Полная гибель» –
          стоимость не должна превышать действительную стоимость застрахованного
          имущества. Программа «Мини-Драйв!» от «Mazda Страхование» реализуются
          при содействии страховой компании СПАО «Ингосстрах» (Лицензия ЦБ РФ на
          осуществление страхования СИ №0928 от 23.09.2015 без ограничения срока
          действия). Срок действия предложения не ограничен. Условия программы
          могут быть изменены. Доступны иные варианты расчета тарифа КАСКО на
          других условиях в том числе при установке спутниковых поисковых систем
          или иных охранных систем. Подробные условия страхования изложены в
          правилах страхования СПАО «Ингосстрах», размещённых на сайте
          www.ingos.ru. Подробная информация размещена на сайте: www.mazda.ru,
          раздел «Mazda Страхование», а также в салонах официальных дилеров
          Mazda - участников программы «Mazda Страхование». Данное предложение
          носит справочный характер и не является публичной офертой (ст. 437 ГК
          РФ).
        </p>
      </div>
      <NewFooter />
    </>
  );
};

export default InsuranceMiniDrive;
