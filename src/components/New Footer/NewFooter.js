import React from "react";
import Footer from "./FooterComponents/footer";
import Icon from "./FooterComponents/icons";

export function NewFooter() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>ПОЛЕЗНЫЕ ССЫЛКИ</Footer.Title>
            <Footer.Link href="#">Обратная связь</Footer.Link>
            <Footer.Link href="/dealer">Поиск дилера</Footer.Link>
            <Footer.Link href="/contacts">Контакты</Footer.Link>
            <Footer.Link href="/legalinfo">Правовая информация</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>СЛЕДИТЕ ЗА НАМИ</Footer.Title>
            <Footer.Link href="https://ok.ru/mazda">
              <Icon className="fab fa-odnoklassniki " />
              Одноклассники
            </Footer.Link>
            <Footer.Link href="https://vk.com/mazda">
              <Icon className="fab fa-vk" />
              Вконтакте
            </Footer.Link>
            <Footer.Link href="https://www.youtube.com/user/themazdarussia/feed?filter=2">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <p style={{ color: "red", textAlign: "center", marginTop: "30px" }}>
          Данный сайт носит исключительно учебно-справочный характер (информация
          взята с официального сайта Mazda Russia). Не является публичной
          офертой. © 2022 Blinova Aleksandra. All rights reserved
        </p>
      </Footer.Wrapper>
    </Footer>
  );
}
