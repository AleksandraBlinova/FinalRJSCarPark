import * as React from "react";
import "./SociaMediaLinks.css";
import { Typography } from "antd";

export default function SocialMediaLinks() {
  return (
    <>
      <div className="socmed_info">
        <Typography className="socmed_text">
          Официальные группы Mazda открыты на
          <a
            href="https://www.facebook.com/MazdaRussia"
            className="socmed_link"
          >
            Facebook
          </a>
          ,
          <a
            href="https://www.instagram.com/mazda_russia/"
            className="socmed_link"
          >
            Instagram
          </a>
          , а также на
          <a
            href="https://www.youtube.com/user/themazdarussia/feed?filter=2"
            className="socmed_link"
          >
            Youtube
          </a>
          . Здесь можно найти последние новости Mazda, обсуждения, конкурсы,
          голосования, фотографии, видео и многое другое. Добро пожаловать!
        </Typography>
      </div>
      <></>
    </>
  );
}
