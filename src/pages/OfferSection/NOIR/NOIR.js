import React, { useRef } from "react";
import "./NOIR.css";
import { NewFooter } from "../../../components/New Footer/NewFooter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const NOIR = () => {
  const titleRef = useRef();
  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="noir-start-container">
        <h5>MAZDA 6, MAZDA CX-5 И MAZDA CX-9</h5>
        <h1>СПЕЦИАЛЬНАЯ СЕРИЯ NOIR</h1>

        <KeyboardArrowDownIcon
          onClick={handleBackClick}
          className="noir-start-container-icon"
        />
      </div>
      <div className="mazda-noir-container">
        <h2 ref={titleRef}>MAZDA 6 NOIR</h2>
        <div className="mazda-noir-container-p-container">
          <p>
            Темная, как ночное небо. Яркая, как свет звезд на нем. Специальная
            серия Mazda6 Noir – образец элегантности и эксклюзивности. Черные
            колесные диски, зеркала заднего вида и черный салон с красными
            креслами – такой Mazda6 вы еще никогда не видели.
          </p>
        </div>
        <div className="mazda-noir-container-imgs-container">
          <img src="1m6_exterior_1800x900.jpg" />
          <img src="1m6_interior_1800x900.jpg" />
        </div>

        <div className="mazda-noir-container-imgs-h6-container">
          <h6>ПРАВО НА УНИКАЛЬНОСТЬ</h6>
          <h6>ТОЧКА ПРИТЯЖЕНИЯ</h6>
        </div>

        <div className="mazda-noir-container-imgs-text-container">
          <p>
            Черный цвет – это не просто элегантная деталь. Mazda6 Noir – это
            Mazda с особым характером.
          </p>
          <p>
            Ярко-красные кресла в угольно-черном окружении. Место, где рождается
            драйв
          </p>
        </div>
      </div>

      <div className="mazda-noir-container">
        <h2>MAZDA CX-5 NOIR</h2>
        <div className="mazda-noir-container-p-container">
          <p>
            Специальная серия Mazda CX-5 Noir - эталон стиля и эксклюзивности.
            Секрет в особых элементах дизайна, которых нет ни в одном другом
            исполнении: деталях экстерьера черного цвета и особой отделке салона
            - черной комбинированной замше с контрастной красной строчкой.
          </p>
        </div>
        <div className="mazda-noir-container-imgs-container">
          <img src="1cx5_exterior_1800x900.jpg" />
          <img src="1cx5_interior_1800x900_update.jpg" />
        </div>

        <div className="mazda-noir-container-imgs-h6-container">
          <h6>ОТРАЖЕНИЕ ИНДИВИДУАЛЬНОСТИ</h6>
          <h6>ЦВЕТ ОСОБОГО ОТЛИЧИЯ</h6>
        </div>

        <div className="mazda-noir-container-imgs-text-container">
          <p>
            Черные колесные диски и корпуса зеркал заднего вида. Элегантность и
            уникальность в едином облике
          </p>
          <p>
            Огненно-красная строчка в черном салоне. Добавьте к стилю вашего
            Mazda CX-5 немного остроты
          </p>
        </div>
      </div>

      <div className="mazda-noir-container">
        <h2>MAZDA CX-9 NOIR</h2>
        <div className="mazda-noir-container-p-container">
          <p>
            Cпециальная серия Mazda CX-9 Noir - стайлинг-пакет, подчеркивающий
            благородство и эксклюзивность. Его отличительные черты - черные
            элементы дизайна кузова и уникальный красный кожаный салон, которые
            нельзя заказать ни в одной другой комплектации. Настоящая
            индивидуальность - редкое, драгоценное достоинство.
          </p>
        </div>
        <div className="mazda-noir-container-imgs-container">
          <img src="1cx9_exterior_1800x900.jpg" />
          <img src="1cx9_interior_1800x900_update.jpg" />
        </div>

        <div className="mazda-noir-container-imgs-h6-container">
          <h6>ЧЕРНЫЙ — ЦВЕТ СКОРОСТИ</h6>
          <h6>УНИКАЛЬНЫЙ ИНТЕРЬЕР</h6>
        </div>

        <div className="mazda-noir-container-imgs-text-container">
          <p>
            Черные диски и корпуса зеркал, затемненная решетка радиатора. Облик
            нового Mazda CX-9 Noir — самый стремительный в линейке
          </p>
          <p>
            Отделка салона красной кожей — самая яркая особенность комплектации
            серии Mazda CX-9 Noir
          </p>
        </div>
      </div>

      <NewFooter />
    </>
  );
};

export default NOIR;
