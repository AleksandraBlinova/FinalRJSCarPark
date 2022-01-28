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
            <Footer.Link href="#">Стать дилером</Footer.Link>
            <Footer.Link href="/contacts">Контакты</Footer.Link>
            <Footer.Link href="#">Правовая информация</Footer.Link>
          </Footer.Column>

          <Footer.Column>
            <Footer.Title>СЛЕДИТЕ ЗА НАМИ</Footer.Title>
            <Footer.Link href="https://www.facebook.com/MazdaRussia">
              <Icon className="fab fa-facebook-f" />
              Facebook
            </Footer.Link>
            <Footer.Link href="https://www.instagram.com/mazda_russia/">
              <Icon className="fab fa-instagram" />
              Instagram
            </Footer.Link>
            <Footer.Link href="https://www.youtube.com/user/themazdarussia/feed?filter=2">
              <Icon className="fab fa-youtube" />
              Youtube
            </Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  );
}
